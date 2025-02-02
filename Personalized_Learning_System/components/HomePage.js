import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";

import styles from "./homeStyles";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { auth, db } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

const HomePage = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState("Home");
  const [username, setUsername] = useState("");

  useEffect(() => {
    // Get current logged-in user from Firebase
    const getUserData = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const userDoc = await getDoc(doc(db, "users", user.uid));
          if (userDoc.exists()) {
            setUsername(userDoc.data().username); // Set the username from Firestore
          } else {
            console.error("No user data found");
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error.message);
      }
    };

    getUserData();
  }, []);

  const courseImages = [
    "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=500&q=80",
    "https://images.unsplash.com/photo-1626785774625-0b1c2c4eab67?w=500&q=80",
  ];

/*   const mentorImages = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=200&q=80",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  ]; */

  const courses = [
    {
      title: "Design Thinking Fundamental",
      instructor: "Robert Green",
      price: "$190.00",
      rating: "4.8",
      image: courseImages[0],
    },
    {
      title: "Data Structures and Algorithms",
      instructor: "Robert Green",
      price: "$190.00",
      rating: "4.8",
      image: courseImages[0],
    },
    {
      title: "3D Illustration Design",
      instructor: "John Doe",
      price: "$250.00",
      rating: "4.9",
      image: courseImages[0],
    },
  ];

  const handleNavigation = (screen) => {
    setActiveTab(screen);
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.greeting}>
          <View>
            <Text style={styles.greetingText}>Hi, {username} 👋</Text>
            <Text style={styles.subGreetingText}>Let's start learning!</Text>
          </View>
          <TouchableOpacity>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&q=80",
              }}
              style={{ width: 40, height: 40, borderRadius: 20 }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.searchContainer}>
          <Feather name="search" size={20} color="#666666" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="#666666"
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
            { name: "Art", color: "#FF6B00", icon: "pen-tool" },
            { name: "Coding", color: "#0056FF", icon: "code" },
            { name: "Marketing", color: "#FF3B30", icon: "trending-up" },
            { name: "Business", color: "#34C759", icon: "briefcase" },
            { name: "Marketing", color: "#FF3B30", icon: "trending-up" },
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

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.courseRow}
        >
          {courses.map((course, index) => (
            <TouchableOpacity
              key={index}
              style={styles.courseCard}
              onPress={() => navigation.navigate("CourseDetails", course)}
            >
              <Image
                source={{ uri: course.image }}
                style={styles.courseImage}
              />
              <View style={styles.ratingBadge}>
                <Feather name="star" size={14} color="#FFB800" />
                <Text style={styles.ratingText}>{course.rating}</Text>
              </View>
              <View style={styles.courseContent}>
                <Text style={styles.courseTitle}>{course.title}</Text>
                <View style={styles.instructorRow}>
                  <Feather name="user" size={14} color="#666666" />
                  <Text style={styles.instructorText}>{course.instructor}</Text>
                </View>
                <View style={styles.priceRow}>
                  <Text style={styles.priceText}>{course.price}</Text>
                  <Text style={styles.newPriceTag}>New Price</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/*         <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Top Mentor</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.mentors}
        >
          {[
            "Esther T.",
            "Jenny M.",
            "Jacob U.",
            "Bessi K.",
            "Jacob U.",
            "Esther T.",
          ].map((mentor, index) => (
            <TouchableOpacity key={index} style={styles.mentor}>
              <Image
                source={{ uri: mentorImages[index] }}
                style={styles.mentorAvatar}
              />
              <Text style={styles.mentorName}>{mentor}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView> */}

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Continue Learning</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("OngoingCourses")}
          >
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.continueCard}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=500&q=80",
            }}
            style={styles.continueThumbnail}
          />
          <View style={styles.continueContent}>
            <View>
              <Text style={styles.continueTitle}>Introduction of Figma</Text>
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

        <TouchableOpacity style={styles.continueCard}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=500&q=80",
            }}
            style={styles.continueThumbnail}
          />
          <View style={styles.continueContent}>
            <View>
              <Text style={styles.continueTitle}>
                Introduction of Algorithms
              </Text>
              <View style={styles.instructorRow}>
                <Feather name="user" size={14} color="#666666" />
                <Text style={styles.instructorText}>John Doe</Text>
              </View>
            </View>
            <View style={styles.progressContainer}>
              <Text style={styles.progressText}>23/25</Text>
              <View style={styles.progressBar}>
                <View style={styles.progressFill} />
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.bottomNav}>
        {[
          { icon: "home", label: "Home", screen: "HomePage" }, // Use the correct route name for the Home page
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

export default HomePage;
