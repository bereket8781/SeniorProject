import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Linking,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { db, auth } from "../firebaseConfig"; // Import Firebase db and auth
import { doc, setDoc, serverTimestamp } from "firebase/firestore"; // Import Firestore functions
import styles from "./courseStyles";

const CourseDetails = ({ route, navigation }) => {
  const { course } = route.params; // Get the course data from navigation params
  const [isEnrolled, setIsEnrolled] = useState(false);

  const handleEnroll = async () => {
    try {
      const userId = auth.currentUser.uid; // Get current user ID
      const courseRef = doc(db, "userCourses", userId, "ongoingCourses", course.id.toString());

      // Save course to Firestore with a timestamp
      await setDoc(courseRef, {
        ...course,
        enrolledAt: serverTimestamp(), // Use serverTimestamp from Firebase v9
        progress: 0, // Initial progress
      });

      setIsEnrolled(true);
      Alert.alert("Success", "You have successfully enrolled in this course!");

      // Redirect user to the course URL
      Linking.openURL(course.url);
    } catch (error) {
      console.error("Error enrolling in course: ", error);
      Alert.alert("Error", "An error occurred while enrolling in this course. Please try again later.");
    }
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
          <Text style={styles.enrollButtonText}>
            {isEnrolled ? "Enrolled" : "Enroll Now"}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default CourseDetails;