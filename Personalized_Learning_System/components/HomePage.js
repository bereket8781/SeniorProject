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
import { useRoute } from "@react-navigation/native";

const HomePage = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState("Home");
  const [username, setUsername] = useState(route.params?.username || "");
  const [profileImage, setProfileImage] = useState(route.params?.profileImage || "");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = auth.currentUser; // Get currently logged-in user
        if (user) {
          const userDoc = await getDoc(doc(db, "users", user.uid));
          if (userDoc.exists()) {
            const userData = userDoc.data();
            setProfileImage(userData.profileImage || "https://via.placeholder.com/150"); // Default image if empty
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, []);

  const courseImages = [
    "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=500&q=80",
    "https://images.unsplash.com/photo-1626785774625-0b1c2c4eab67?w=500&q=80",
    "https://files.oaiusercontent.com/file-8TGUawJ4jv93Z6dac66SSS?se=2025-02-13T17%3A04%3A27Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Da7841edb-3b0e-4b04-a06a-bdc5d45339aa.webp&sig=la3W2qm8uSaA/7sl1BzEeKhlwC2HF8sRjcxgM41fG/Q%3D",
  ];

  const courses = [
    {
      title: "Design Thinking Fundamental",
      instructor: "Robert Green",
      rating: "4.8",
      image: courseImages[0],
    },
    {
      title: "Data Structures and Algorithms",
      instructor: "Robert Green",
      rating: "4.8",
      image: courseImages[0],
    },
    {
      title: "Network Administration",
      instructor: "John Doe",
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
          <TouchableOpacity onPress={() => navigation.navigate("ProfilePage")}>
            <Image
              source={{ uri: profileImage }}
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
{/*                 <View style={styles.priceRow}>
                  <Text style={styles.priceText}>{course.price}</Text>
                  <Text style={styles.newPriceTag}>New Price</Text>
                </View> */}
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

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
