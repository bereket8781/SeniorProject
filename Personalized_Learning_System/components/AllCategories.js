import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import styles from "./categoriesStyles";
import { auth, db } from "../firebaseConfig";
import {
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

const AllCategories = ({ navigation }) => {
  const categories = [
    { name: "Data Science", icon: require("../assets/images/3Ddesign.png") },
    {
      name: "Computer Graphics",
      icon: require("../assets/images/graphicDesign.png"),
    },
    { name: "Web Development", icon: require("../assets/images/webDev.png") },
    { name: "Computer Security", icon: require("../assets/images/search.png") },
    {
      name: "Network Administration",
      icon: require("../assets/images/budget.png"),
    },
    {
      name: "Project Management",
      icon: require("../assets/images/personalDev.png"),
    },
    {
      name: "Programming",
      icon: require("../assets/images/settings.png"),
    },
    { name: "Artificial Intelligence", icon: require("../assets/images/hr.png") },
    {
      name: "Data Structure and Algorithms",
      icon: require("../assets/images/algorithm.png"),
    },
  ];

    const [searchKeyword, setSearchKeyword] = useState("");
    const [filteredCourses, setFilteredCourses] = useState([]);

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
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("HomePage")}>
          <Feather name="arrow-left" size={24} color="#333" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>All Categories</Text>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#666"
          value={searchKeyword} // Bind value to state
          onChangeText={(text) => setSearchKeyword(text)} // Update state on input change
        />

        <TouchableOpacity
          style={styles.searchButton}
          onPress={handleSearch} // Trigger search on button press
        >
          <Feather name="search" size={20} color="white" />
        </TouchableOpacity>
      </View>

<ScrollView contentContainerStyle={styles.categoriesContainer}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            style={styles.categoryItem}
            onPress={() => navigation.navigate('CategoryCourses', { categoryName: category.name })}
          >
            <Image source={category.icon} style={styles.categoryIcon} />
            <Text style={styles.categoryText}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default AllCategories;
