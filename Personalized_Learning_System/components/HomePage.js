import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Image,
  Platform,
  Alert,
  KeyboardAvoidingView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import styles from "./homeStyles";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { auth, db } from "../firebaseConfig";
import { collection, query, where, getDocs, doc, getDoc, setDoc } from "firebase/firestore";
import { useRoute } from "@react-navigation/native";

const HomePage = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState("Home");
  const [username, setUsername] = useState(route.params?.username || "");
  const [profileImage, setProfileImage] = useState(null); // State for Base64 profile image
  const [courses, setCourses] = useState([]); // State to store fetched courses
  const [loading, setLoading] = useState(true); // Loading state
  const [searchKeyword, setSearchKeyword] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (courseId) => {
    if (favorites.includes(courseId)) {
      // Remove from favorites
      setFavorites(favorites.filter((id) => id !== courseId));
    } else {
      // Add to favorites
      setFavorites([...favorites, courseId]);
    }
  };

  // Fetch user data
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = auth.currentUser; // Get currently logged-in user
        if (user) {
          const userDoc = await getDoc(doc(db, "users", user.uid));
          if (userDoc.exists()) {
            const userData = userDoc.data();
            setUsername(userData.username || "");
            setProfileImage(userData.profileImage || null); // Set Base64 profile image
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  // Fetch courses from Firestore
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const coursesCollection = collection(db, "courses");
        const querySnapshot = await getDocs(coursesCollection);

        const coursesData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setCourses(coursesData); // Set fetched courses to state
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false); // Set loading to false
      }
    };

    fetchCourses();
  }, []);

  useEffect(() => {
    const saveFavorites = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          await setDoc(
            doc(db, "users", user.uid),
            {
              favorites,
            },
            { merge: true }
          );
        }
      } catch (error) {
        console.error("Error saving favorites:", error);
      }
    };

    saveFavorites();
  }, [favorites]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const userDoc = await getDoc(doc(db, "users", user.uid));
          if (userDoc.exists()) {
            const userData = userDoc.data();
            setFavorites(userData.favorites || []);
          }
        }
      } catch (error) {
        console.error("Error fetching favorites:", error);
      }
    };

    fetchFavorites();
  }, []);

  const handleNavigation = (screen) => {
    setActiveTab(screen);
    if (screen === "Chat") {
      navigation.navigate("Chat", { username: username });
    } else {
      navigation.navigate(screen);
    }
  };

  const handleSearch = async () => {
    if (!searchKeyword.trim()) {
      Alert.alert("Error", "Please enter a search keyword.");
      return;
    }

    try {
      const coursesCollection = collection(db, "courses");
      const q = query(
        coursesCollection,
        where("title", ">=", searchKeyword),
        where("title", "<=", searchKeyword + "\uf8ff")
      );
      const querySnapshot = await getDocs(q);

      const coursesData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setFilteredCourses(coursesData); // Store filtered courses
      navigation.navigate("SearchResult", { courses: coursesData }); // Navigate to search results page
    } catch (error) {
      console.error("Error searching courses:", error);
      Alert.alert("Error", "Something went wrong. Please try again.");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.greeting}>
            <View>
              <Text style={styles.greetingText}>Hi, {username} 👋</Text>
              <Text style={styles.subGreetingText}>Let's start learning!</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("ProfilePage")}>
              {/* Display the profile image */}
              {profileImage ? (
                <Image
                  source={{ uri: profileImage }} // Use Base64 string directly
                  style={{ width: 40, height: 40, borderRadius: 20 }}
                  onError={(e) => {
                    console.error("Failed to load image:", e.nativeEvent.error); // Debugging
                  }}
                />
              ) : (
                <Image
                  source={{ uri: "https://via.placeholder.com/150" }} // Fallback image
                  style={{ width: 40, height: 40, borderRadius: 20 }}
                />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.searchContainer}>
            <TouchableOpacity
              style={styles.searchButton}
              onPress={handleSearch}
            >
              <Feather name="search" size={20} color="#666666" />
            </TouchableOpacity>
            <TextInput
              style={styles.searchInput}
              placeholder="Search"
              placeholderTextColor="#666666"
              value={searchKeyword}
              onChangeText={(text) => setSearchKeyword(text)}
            />
            <TouchableOpacity
              style={styles.filterButton}
              onPress={() => navigation.navigate("Filter")}
            >
              <Feather name="sliders" size={20} color="#666666" />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Categories</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("AllCategories")}
            >
              <Text style={styles.seeAll}>See all</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.categories}
          >
            {[
              { name: "Security", color: "#FF6B00", icon: "pen-tool" },
              { name: "Coding", color: "#0056FF", icon: "code" },
              { name: "Testing", color: "#FF3B30", icon: "trending-up" },
              { name: "AI", color: "#34C759", icon: "briefcase" },
              { name: "Data Structure", color: "#FF3B30", icon: "trending-up" },
            ].map((category, index) => (
              <TouchableOpacity key={index} style={styles.category}>
                <View
                  style={[
                    styles.categoryIcon,
                    { backgroundColor: `${category.color}20` },
                  ]}
                >
                  <Feather
                    name={category.icon}
                    size={24}
                    color={category.color}
                  />
                </View>
                <Text style={styles.categoryText}>{category.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Popular Course</Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>See all</Text>
            </TouchableOpacity>
          </View>

          {loading ? (
            <Text>...</Text>
          ) : (
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.courseRow}
            >
              {courses.map((course, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.courseCard}
                  onPress={() =>
                    navigation.navigate("CourseDetails", { course })
                  }
                >
                  <Image
                    source={{ uri: course.imageUrl }}
                    style={styles.courseImage}
                  />
                  <TouchableOpacity
                    style={styles.favoriteButton}
                    onPress={() => toggleFavorite(course.id)}
                  >
                    <Feather
                      name={favorites.includes(course.id) ? "bookmark" : "bookmark"}
                      size={20}
                      color={
                        favorites.includes(course.id) ? "#FF3B30" : "#666666"
                      }
                    />
                  </TouchableOpacity>
                  <View style={styles.courseContent}>
                    <Text style={styles.courseTitle}>{course.title}</Text>
                    <View style={styles.instructorRow}>
                      <Feather name="user" size={14} color="#666666" />
                      <Text style={styles.instructorText}>
                        {course.provider}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          )}

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Continue Learning</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("OngoingCourses")}
            >
              <Text style={styles.seeAll}>See all</Text>
            </TouchableOpacity>
          </View>

          {/* Continue Learning Section */}
          <TouchableOpacity style={styles.continueCard}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=500&q=80",
              }}
              style={styles.continueThumbnail}
            />
            <View style={styles.continueContent}>
              <View>
                <Text style={styles.continueTitle}>Introduction to Python</Text>
                <View style={styles.instructorRow}>
                  <Feather name="user" size={14} color="#666666" />
                  <Text style={styles.instructorText}>Jacob Jones</Text>
                </View>
              </View>
              <View style={styles.progressContainer}>
                <Text style={styles.progressText}>20/25</Text>
                <View style={styles.progressBar}>
                  <View style={styles.progressFill} />
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>

        <View style={styles.bottomNav}>
          {[
            { icon: "home", label: "Home", screen: "HomePage" },
            { icon: "book", label: "My Course", screen: "MyCourses" },
            { icon: "bookmark", label: "Bookmark", screen: "Bookmark" },
            { icon: "message-circle", label: "Chat", screen: "Chat" },
            { icon: "user", label: "Profile", screen: "ProfilePage" },
          ].map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.navItem}
              onPress={() => handleNavigation(item.screen)}
            >
              <Feather
                name={item.icon}
                size={24}
                color={activeTab === item.screen ? "#0056FF" : "#666666"}
              />
              <Text
                style={[
                  styles.navText,
                  activeTab === item.screen && styles.navActive,
                ]}
              >
                {item.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default HomePage;