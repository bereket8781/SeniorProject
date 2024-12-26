import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import { Feather, MaterialIcons } from "@expo/vector-icons"; 
import styles from "./mycourseStyles";

const courses = [
  {
    id: 1,
    category: "Graphic Design",
    title: "Graphic Design Advanced",
    progress: "4.7",
    duration: "2 hrs 35 min",
  },
  {
    id: 2,
    category: "Graphic Design",
    title: "Advanced Diploma in Graphics Design",
    progress: "4.7",
    duration: "2 hrs 35 min",
  },
  {
    id: 3,
    category: "Data Structure and Algorithm",
    title: "Data Structure Basics",
    progress: "4.9",
    duration: "1 hrs 15 min",
  },
  {
    id: 4,
    category: "Web Development",
    title: "Full Stack Web Development",
    progress: "3.2",
    duration: "5 hrs 55 min",
  },
];

const MyCourses = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("HomePage")} style={styles.backButton}>
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
            >
              <Text style={styles.filterTextCompleted}>Completed</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.filterButton, styles.filterButtonOngoing]}
            >
              <Text style={styles.filterTextOngoing}>Ongoing</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.courseList}>
          {courses.map((course) => (
            <View key={course.id} style={styles.courseItem}>
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
                  <MaterialIcons name="check-circle" color="#10b981" size={20} />
                </View>
                <View style={styles.courseFooter}>
                  <View style={styles.courseStats}>
                    <Text style={styles.courseProgress}>{course.progress}</Text>
                    <Text style={styles.courseDuration}>{course.duration}</Text>
                  </View>
                  <TouchableOpacity>
                    <Text style={styles.certificateButton}>
                      VIEW CERTIFICATE
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        {[
          { icon: "home", label: "Home" },
          { icon: "book", label: "My Course" },
          { icon: "bookmark", label: "Bookmark" },
          { icon: "message-circle", label: "Chat" },
          { icon: "user", label: "Profile" },
        ].map((item, index) => (
          <TouchableOpacity key={index} style={styles.navItem}>
            <Feather
              name={item.icon}
              size={24}
              color={index === 0 ? "#0056FF" : "#666666"}
            />
            <Text style={[styles.navText, index === 0 && styles.navActive]}>
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
 export default MyCourses;