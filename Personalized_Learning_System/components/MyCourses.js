import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { db, auth } from "../firebaseConfig";
import { collection, onSnapshot, query, where, getDocs } from "firebase/firestore";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import styles from "./mycourseStyles";

const MyCourses = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState("MyCourses");
  const [completedCourses, setCompletedCourses] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]);

  useEffect(() => {
    if (activeTab === "Completed") {
      const userId = auth.currentUser?.uid;
      if (!userId) return;

      const userCoursesRef = collection(db, "userCourses", userId, "completedCourses");
      const unsubscribe = onSnapshot(userCoursesRef, (querySnapshot) => {
        const courses = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setCompletedCourses(courses);
      });
      return unsubscribe;
    }
  }, [activeTab]);

  const handleNavigation = (screen) => {
    setActiveTab(screen);
    navigation.navigate(screen);
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
      const coursesData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      
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
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.backButton}
            >
              <Feather name="chevron-left" color="#000000" size={24} />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>My Courses</Text>
          </View>

          <ScrollView contentContainerStyle={styles.scrollContent}>
            <View style={styles.searchContainer}>
              <View style={styles.searchWrapper}>
                <TextInput
                  placeholder="Search for..."
                  style={styles.searchInput}
                  value={searchKeyword}
                  onChangeText={setSearchKeyword}
                  onSubmitEditing={handleSearch}
                />
                <TouchableOpacity onPress={handleSearch}>
                  <Feather name="search" style={styles.searchIcon} />
                </TouchableOpacity>
              </View>

              <View style={styles.filterContainer}>
                <TouchableOpacity
                  style={[
                    styles.filterButton,
                    styles.filterButtonCompleted,
                    activeTab === "Completed" && styles.activeFilter,
                  ]}
                  onPress={() => setActiveTab("Completed")}
                >
                  <Text style={styles.filterTextCompleted}>Completed</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.filterButton,
                    styles.filterButtonOngoing,
                    activeTab === "Ongoing" && styles.activeFilter,
                  ]}
                  onPress={() => navigation.navigate("OngoingCourses")}
                >
                  <Text style={styles.filterTextOngoing}>Ongoing</Text>
                </TouchableOpacity>
              </View>
            </View>

            {activeTab === "Completed" && (
              <View style={styles.courseList}>
                {completedCourses.map((course) => (
                  <TouchableOpacity
                    key={course.id}
                    style={styles.courseItem}
                    //onPress={() => navigation.navigate("MyCourseLessons", { course })}
                  >
                    <View style={styles.courseImageContainer}>
                      <Image
                        source={{ uri: course.image || "https://via.placeholder.com/150" }}
                        style={styles.courseImage}
                      />
                      <View style={styles.checkCircle}>
                        <MaterialIcons
                          name="check-circle"
                          color="#10b981"
                          size={24}
                        />
                      </View>
                    </View>
                    <View style={styles.courseDetails}>
                      <Text style={styles.courseTitle}>{course.title}</Text>
                      <Text style={styles.courseProvider}>{course.provider}</Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
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

export default MyCourses;
