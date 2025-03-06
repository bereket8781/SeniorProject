import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Image,
  Platform,
  Alert,
  FlatList,
  KeyboardAvoidingView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import styles from "./homeStyles";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { auth, db } from "../firebaseConfig";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";
import { useRoute } from "@react-navigation/native";

const HomePage = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState("Home");
  const [username, setUsername] = useState(route.params?.username || "");
  const [profileImage, setProfileImage] = useState(null);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (courseId) => {
    setFavorites(prev => 
      prev.includes(courseId) 
        ? prev.filter(id => id !== courseId) 
        : [...prev, courseId]
    );
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const userDoc = await getDoc(doc(db, "users", user.uid));
          if (userDoc.exists()) {
            const userData = userDoc.data();
            setUsername(userData.username || "");
            setProfileImage(userData.profileImage || null);
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, []);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "courses"));
        const coursesData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCourses(coursesData);
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  useEffect(() => {
    const saveFavorites = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          await setDoc(doc(db, "users", user.uid), { favorites }, { merge: true });
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
          setFavorites(userDoc.data()?.favorites || []);
        }
      } catch (error) {
        console.error("Error fetching favorites:", error);
      }
    };
    fetchFavorites();
  }, []);

  const handleNavigation = (screen) => {
    setActiveTab(screen);
    navigation.navigate(screen, { username });
  };

  const handleSearch = async () => {
    if (!searchKeyword.trim()) {
      Alert.alert("Error", "Please enter a search keyword.");
      return;
    }

    try {
      const q = query(
        collection(db, "courses"),
        where("title", ">=", searchKeyword),
        where("title", "<=", searchKeyword + "\uf8ff")
      );
      const querySnapshot = await getDocs(q);
      const coursesData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setFilteredCourses(coursesData);
      navigation.navigate("SearchResult", { courses: coursesData });
    } catch (error) {
      console.error("Error searching courses:", error);
      Alert.alert("Error", "Something went wrong. Please try again.");
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
      >
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.greeting}>
              <View>
                <Text style={styles.greetingText}>Hi, {username} 👋</Text>
                <Text style={styles.subGreetingText}>Let's start learning!</Text>
              </View>
              <TouchableOpacity onPress={() => navigation.navigate("ProfilePage")}>
                {profileImage ? (
                  <Image
                    source={{ uri: profileImage }}
                    style={styles.profileImage}
                  />
                ) : (
                  <Image
                    source={{ uri: "https://via.placeholder.com/150" }}
                    style={styles.profileImage}
                  />
                )}
              </TouchableOpacity>
            </View>
            
            <View style={styles.searchContainer}>
              <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
                <Feather name="search" size={20} color="#666666" />
              </TouchableOpacity>
              <TextInput
                style={styles.searchInput}
                placeholder="Search"
                placeholderTextColor="#666666"
                value={searchKeyword}
                onChangeText={setSearchKeyword}
                onSubmitEditing={handleSearch}
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
              <TouchableOpacity onPress={() => navigation.navigate("AllCategories")}>
                <Text style={styles.seeAll}>See all</Text>
              </TouchableOpacity>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categories}>
              {[
                { name: "Security", color: "#FF6B00", icon: "pen-tool" },
                { name: "Coding", color: "#0056FF", icon: "code" },
                { name: "Testing", color: "#FF3B30", icon: "trending-up" },
                { name: "AI", color: "#34C759", icon: "briefcase" },
                { name: "Data Structure", color: "#FF3B30", icon: "trending-up" },
              ].map((category, index) => (
                <TouchableOpacity key={index} style={styles.category}>
                  <View style={[styles.categoryIcon, { backgroundColor: `${category.color}20` }]}>
                    <Feather name={category.icon} size={24} color={category.color} />
                  </View>
                  <Text style={styles.categoryText}>{category.name}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>

            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Popular Courses</Text>
              <TouchableOpacity onPress={() => navigation.navigate("AllCourses")}>
                <Text style={styles.seeAll}>See all</Text>
              </TouchableOpacity>
            </View>

            {loading ? (
              <ActivityIndicator size="large" color="#0056FF" />
            ) : (
              <FlatList
                data={courses}
                keyExtractor={(item) => item.id}
                numColumns={2}
                scrollEnabled={false}
                contentContainerStyle={styles.courseGrid}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.courseCard}
                    onPress={() => navigation.navigate("CourseDetails", { course: item })}
                  >
                    <Image source={{ uri: item.imageUrl }} style={styles.courseImage} />
                    <TouchableOpacity
                      style={styles.favoriteButton}
                      onPress={() => toggleFavorite(item.id)}
                    >
                      <Feather
                        name={favorites.includes(item.id) ? "bookmark" : "bookmark"}
                        size={20}
                        color={favorites.includes(item.id) ? "#FF3B30" : "#666666"}
                      />
                    </TouchableOpacity>
                    <View style={styles.courseContent}>
                      <Text style={styles.courseTitle}>{item.title}</Text>
                      <View style={styles.instructorRow}>
                        <Feather name="user" size={14} color="#666666" />
                        <Text style={styles.instructorText}>{item.provider}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                )}
              />
            )}
          </ScrollView>
        </View>
      </KeyboardAvoidingView>

      {/* Fixed Navigation Bar */}
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
  );
};

export default HomePage;
