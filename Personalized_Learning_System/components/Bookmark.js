import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from "react-native";
import { Feather, MaterialIcons } from "@expo/vector-icons";

import styles from "./bookmarkStyles";


const courses = [
  {
    id: 1,
    title: "Introduction of Figma",
    instructor: "Jacob Jones",
    price: "180.00",
    image: "https://v0.dev/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    title: "Logo Design Basics",
    instructor: "Eleanor Pena",
    price: "120.00",
    image: "https://v0.dev/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    title: "Introduction of Figma",
    instructor: "Kathryn Murphy",
    price: "160.00",
    image: "https://v0.dev/placeholder.svg?height=100&width=100",
  },
  {
    id: 4,
    title: "User-Centered Design",
    instructor: "Marvin McKinney",
    price: "200.00",
    image: "https://v0.dev/placeholder.svg?height=100&width=100",
  },
]

const Bookmark = ({ navigation }) => {
    const [activeTab, setActiveTab] = useState("MyCourses");
  
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
      <Text style={styles.headerTitle}>Bookmark</Text>
    </View>

    <View style={styles.searchContainer}>
      <View style={styles.searchWrapper}>
        <TextInput placeholder="Search for..." style={styles.searchInput} />
        <Feather name="search" style={styles.searchIcon} />
      </View>
    </View>

    <View style={styles.categoriesContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesScroll}>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.categoryButton, styles.categoryButtonActive]}>
            <Text style={[styles.categoryText, styles.categoryTextActive]}>Design</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>Coding</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>Marketing</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* Course List */}
      <ScrollView style={styles.courseList}>
        {courses.map((course) => (
          <View key={course.id} style={styles.courseCard}>
            <Image source={{ uri: course.image }} style={styles.courseImage} />
            <View style={styles.courseInfo}>
              <View style={styles.courseHeader}>
                <Text style={styles.courseTitle}>{course.title}</Text>
                <MaterialIcons name="bookmark" size={24} color="blue" />
              </View>
              <View style={styles.instructorContainer}>
                <View style={styles.instructorAvatar} />
                <Text style={styles.instructorName}>{course.instructor}</Text>
              </View>
              <View style={styles.courseFooter}>
                <Text style={styles.coursePrice}>${course.price}</Text>
                <Text style={styles.bestSeller}>Best seller</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.bottomNav}>
        {[
          { icon: "home", label: "Home", screen: "HomePage" }, 
          { icon: "book", label: "My Course", screen: "MyCourses" },
          { icon: "bookmark", label: "Bookmark", screen: "Bookmark" },
          { icon: "message-circle", label: "Chat", screen: "Chat" },
          { icon: "user", label: "Profile", screen: "Profile" },
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

export default Bookmark;



