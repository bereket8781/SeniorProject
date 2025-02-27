import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image, Linking } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./filteredcourseStyles";

const FilteredCourses = ({ route, navigation }) => {
  const { courses } = route.params;

  const handleCoursePress = (url) => {
    Linking.openURL(url).catch((err) =>
      console.error("Failed to open URL:", err)
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("HomePage")}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Filter Result</Text>
      </View>
      <FlatList
        data={courses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.courseItem}>
            <Image
              source={{ uri: item.imageUrl }}
              style={styles.courseImage}
            />
            <TouchableOpacity onPress={() => handleCoursePress(item.url)}>
              <Text style={styles.courseTitle}>{item.title}</Text>
            </TouchableOpacity>
            <Text style={styles.courseDescription}>{item.description}</Text>
            <Text style={styles.courseDifficulty}>
              Difficulty: {item.difficulty}
            </Text>
            <Text style={styles.courseDuration}>
              Duration: {item.duration} 
            </Text>
            <Text style={styles.courseProvider}>Provider: {item.provider}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default FilteredCourses;