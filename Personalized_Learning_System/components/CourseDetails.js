import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Linking,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import styles from "./courseStyles";

const CourseDetails = ({ route, navigation }) => {
  const { course } = route.params; // Get the course data from navigation params

  const handleEnroll = () => {
    Linking.openURL(course.url); // Open the course URL in a browser
  };

  return (
    <ScrollView style={styles.container}>
      {/* Course Image */}
      <View style={styles.banner}>
        <Image source={{ uri: course.imageUrl }} style={styles.courseImage} />
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate("HomePage")}
        >
          <Feather name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Course Details */}
      <View style={styles.courseContent}>
        <Text style={styles.courseTitle}>{course.title}</Text>
        <Text style={styles.courseDescription}>{course.description}</Text>

        {/* Course Metadata */}
        <View style={styles.metadataContainer}>
          <View style={styles.metadataItem}>
            <Feather name="book" size={20} color="#666" />
            <Text style={styles.metadataText}>{course.category}</Text>
          </View>
          <View style={styles.metadataItem}>
            <Feather name="bar-chart" size={20} color="#666" />
            <Text style={styles.metadataText}>{course.difficulty}</Text>
          </View>
          <View style={styles.metadataItem}>
            <Feather name="user" size={20} color="#666" />
            <Text style={styles.metadataText}>{course.provider}</Text>
          </View>
        </View>

        {/* Enroll Button */}
        <TouchableOpacity style={styles.enrollButton} onPress={handleEnroll}>
          <Text style={styles.enrollButtonText}>Enroll Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default CourseDetails;
