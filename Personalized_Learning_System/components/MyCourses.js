import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, TextInput,Image } from "react-native";
import { db, auth } from "../firebaseConfig"; // Import Firebase db and auth
import { collection, onSnapshot } from "firebase/firestore"; // Import Firestore functions
import { Feather, MaterialIcons } from "@expo/vector-icons";
import styles from "./mycourseStyles";

const MyCourses = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState("MyCourses");
  const [completedCourses, setCompletedCourses] = useState([]);

  // Fetch completed courses from Firestore
  useEffect(() => {
    if (activeTab === "Completed") {
      const userId = auth.currentUser.uid; // Get current user ID
      const userCoursesRef = collection(db, "userCourses", userId, "completedCourses");

      const unsubscribe = onSnapshot(userCoursesRef, (querySnapshot) => {
        const courses = [];
        querySnapshot.forEach((doc) => {
          courses.push({ id: doc.id, ...doc.data() });
        });
        setCompletedCourses(courses);
      });

      return () => unsubscribe();
    }
  }, [activeTab]);

  const handleNavigation = (screen) => {
    setActiveTab(screen);
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.navigate("HomePage")}
          style={styles.backButton}
        >
          <Feather name="chevron-left" color="#000000" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Courses</Text>
      </View>

      <ScrollView>
        <View style={styles.searchContainer}>
          <View style={styles.searchWrapper}>
            <TextInput placeholder="Search for..." style={styles.searchInput} />
            <Feather name="search" style={styles.searchIcon} />
          </View>

          <View style={styles.filterContainer}>
            <TouchableOpacity
              style={[styles.filterButton, styles.filterButtonCompleted]}
              onPress={() => setActiveTab("Completed")}
            >
              <Text style={styles.filterTextCompleted}>Completed</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.filterButton, styles.filterButtonOngoing]}
              onPress={() => navigation.navigate("OngoingCourses")}
            >
              <Text style={styles.filterTextOngoing}>Ongoing</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Display Completed Courses */}
        {activeTab === "Completed" && (
          <View style={styles.courseList}>
            {completedCourses.map((course) => (
              <TouchableOpacity
                key={course.id}
                style={styles.courseItem}
                onPress={() => navigation.navigate("MyCourseLessons", { course })}
              >
                <View style={styles.courseImage}>
                  <Image
                    source={{
                      uri: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=500&q=80",
                    }}
                    style={{ width: "100%", height: "100%", borderRadius: 8 }}
                  />
                </View>
                <View style={styles.courseContent}>
                  <View style={styles.courseHeader}>
                    <View>
                      <Text style={styles.courseCategory}>{course.category}</Text>
                      <Text style={styles.courseTitle}>{course.title}</Text>
                    </View>
                    <MaterialIcons
                      name="check-circle"
                      color="#10b981"
                      size={20}
                    />
                  </View>
                  <View style={styles.courseFooter}>
                    <View style={styles.courseStats}>
                      <Text style={styles.courseProgress}>{course.progress}</Text>
                      <Text style={styles.courseDuration}>{course.duration}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {/* Display Ongoing Courses */}
        {activeTab === "Ongoing" && (
          <View style={styles.courseList}>
            {/* Render ongoing courses here */}
          </View>
        )}
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
  );
};

export default MyCourses;