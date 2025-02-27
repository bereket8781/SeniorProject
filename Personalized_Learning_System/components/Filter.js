import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Alert } from "react-native";
import { Feather } from "@expo/vector-icons";
import styles from "./filterStyles";
import { db } from "../firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";

const Filter = ({ navigation }) => {
  const [filters, setFilters] = useState({
    subCategories: [],
    levels: [],
    price: [],
    features: [],
    rating: [],
    videoDuration: [],
  });

  const toggleFilter = (category, item) => {
    setFilters((prevFilters) => {
      const updatedCategory = prevFilters[category].includes(item)
        ? prevFilters[category].filter((i) => i !== item)
        : [...prevFilters[category], item];
      return { ...prevFilters, [category]: updatedCategory };
    });
  };

  const renderCheckbox = (category, item) => {
    const isSelected = filters[category].includes(item);
    return (
      <TouchableOpacity
        style={styles.checkboxContainer}
        onPress={() => toggleFilter(category, item)}
      >
        <View style={[styles.checkbox, isSelected && styles.checkboxSelected]}>
          {isSelected && <Feather name="check" size={18} color="#FFFFFF" />}
        </View>
        <Text style={styles.checkboxLabel}>{item}</Text>
      </TouchableOpacity>
    );
  };

  const applyFilters = async () => {
    try {
      let coursesRef = collection(db, "courses");
      let conditions = [];
  
      // Apply filters only if values exist
      if (filters.subCategories.length > 0) {
        conditions.push(where("category", "in", filters.subCategories));
      }
      if (filters.levels.length > 0) {
        conditions.push(where("difficulty", "in", filters.levels));
      }
      if (filters.price.length > 0) {
        conditions.push(where("price", "in", filters.price));
      }
      if (filters.rating.length > 0) {
        const minRating = Math.min(...filters.rating.map((r) => parseFloat(r.split(" ")[0])));
        conditions.push(where("rating", ">=", minRating));
      }
      if (filters.videoDuration.length > 0) {
        let minDurations = filters.videoDuration.map((d) => parseInt(d.split("-")[0]));
        conditions.push(where("duration", ">=", Math.min(...minDurations)));
      }
  
      // Execute query
      let q = query(coursesRef, ...conditions);
      const snapshot = await getDocs(q);
  
      if (snapshot.empty) {
        Alert.alert("No results", "No courses match your filters.");
        return;
      }
  
      const courses = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      navigation.navigate("FilteredCourses", { courses });
    } catch (error) {
      Alert.alert("Error", "Failed to fetch courses. Please try again.");
      console.error("Error fetching courses: ", error);
    }
  };
  

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("HomePage")}>
          <Feather name="arrow-left" size={24} color="1A1A1A" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Filter</Text>
        <TouchableOpacity
                     onPress={() =>
                      setFilters({
                        subCategories: [],
                        levels: [],
                        price: [],
                        features: [],
                        rating: [],
                        videoDuration: [],
                      })
                    }
        >
          <Text style={styles.clearButton}>Clear</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Sub Categories:</Text>
          {renderCheckbox("subCategories", "Computer Graphics")}
          {renderCheckbox("subCategories", "Web Development")}
          {renderCheckbox("subCategories", "Computer Security")}
          {renderCheckbox("subCategories", "Project Management")}
          {renderCheckbox("subCategories", "Data Science")}
          {renderCheckbox("subCategories", "Artificial Intelligence")}
          {renderCheckbox("subCategories", "Data structure and Algorithms")}
          {renderCheckbox("subCategories", "Programming")}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Levels:</Text>
          {renderCheckbox("levels", "All Levels")}
          {renderCheckbox("levels", "Beginner")}
          {renderCheckbox("levels", "Intermediate")}
          {renderCheckbox("levels", "Advanced")}
        </View>

{/*         <View style={styles.section}>
          <Text style={styles.sectionTitle}>Price:</Text>
          {renderCheckbox("price", "Paid")}
          {renderCheckbox("price", "Free")}
        </View> */}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Features:</Text>
          {renderCheckbox("features", "Courses")}
          {renderCheckbox("features", "Quizzes")}
          {renderCheckbox("features", "Coding Exercise")}
          {renderCheckbox("features", "Practice Tests")}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Rating:</Text>
          {renderCheckbox("rating", "4.5 & Above")}
          {renderCheckbox("rating", "4.0 & Above")}
          {renderCheckbox("rating", "3.5 & Above")}
          {renderCheckbox("rating", "3.0 & Above")}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Video Duration:</Text>
          {renderCheckbox("videoDuration", "0-2 Hours")}
          {renderCheckbox("videoDuration", "3-6 Hours")}
          {renderCheckbox("videoDuration", "7-16 Hours")}
          {renderCheckbox("videoDuration", "17+ Hours")}
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.applyButton} onPress={applyFilters}>
        <Text style={styles.applyButtonText}>Apply</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Filter;
