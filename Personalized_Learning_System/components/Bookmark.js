import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from "react-native";
import { Feather, MaterialIcons } from "@expo/vector-icons";

import styles from "./bookmarkStyles";


const courses = [
  {
    id: 1,
    title: "Introduction to Python",
    instructor: "Jacob Jones",
    price: "180.00",
    image: "https://files.oaiusercontent.com/file-8TGUawJ4jv93Z6dac66SSS?se=2025-02-13T17%3A04%3A27Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Da7841edb-3b0e-4b04-a06a-bdc5d45339aa.webp&sig=la3W2qm8uSaA/7sl1BzEeKhlwC2HF8sRjcxgM41fG/Q%3D",
  },
  {
    id: 2,
    title: "Web Development Fundamentals",
    instructor: "Eleanor Pena",
    price: "120.00",
    image: "https://files.oaiusercontent.com/file-8TGUawJ4jv93Z6dac66SSS?se=2025-02-13T17%3A04%3A27Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Da7841edb-3b0e-4b04-a06a-bdc5d45339aa.webp&sig=la3W2qm8uSaA/7sl1BzEeKhlwC2HF8sRjcxgM41fG/Q%3D",
  },
  {
    id: 3,
    title: "User-centered Design",
    instructor: "Kathryn Murphy",
    price: "160.00",
    image: "https://files.oaiusercontent.com/file-LXAnZVa5GdjKZ5ahpJTPK3?se=2025-02-13T17%3A05%3A23Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D9cc448db-aaec-4257-968b-7cf2a76aa5ce.webp&sig=x0DR4nAX%2Bxc9wK1TEgcYQNNf%2B31nxSh4Fs0YymiMCgY%3D",
  },
  {
    id: 4,
    title: "JavaScript Fundamentals",
    instructor: "Marvin McKinney",
    price: "200.00",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=500&q=80",
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
            <Text style={styles.categoryText}>Programming</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>Security</Text>
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

export default Bookmark;



