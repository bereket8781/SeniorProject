import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Alert, Linking } from "react-native";
import { db, auth } from "../firebaseConfig"; // Import Firebase db and auth
import { collection, doc, onSnapshot, updateDoc, deleteDoc, setDoc } from "firebase/firestore"; // Import Firestore functions
import styles from "./ongoingStyles";

const OngoingCourses = ({ navigation }) => {
  const [ongoingCourses, setOngoingCourses] = useState([]);

  // Fetch ongoing courses from Firestore
  useEffect(() => {
    const userId = auth.currentUser.uid; // Get current user ID
    const userCoursesRef = collection(db, "userCourses", userId, "ongoingCourses");

    const unsubscribe = onSnapshot(userCoursesRef, (querySnapshot) => {
      const courses = [];
      querySnapshot.forEach((doc) => {
        courses.push({ id: doc.id, ...doc.data() });
      });
      setOngoingCourses(courses);
    });

    return () => unsubscribe();
  }, []);

  // Function to handle continuing a course
  const handleContinueCourse = async (course) => {
    try {
      const userId = auth.currentUser.uid; // Get current user ID
      const courseRef = doc(db, "userCourses", userId, "ongoingCourses", course.id);

      // Update progress (e.g., increment by 10% for demonstration)
      const newProgress = Math.min(course.progress + 10, 100); // Ensure progress doesn't exceed 100%
      await updateDoc(courseRef, {
        progress: newProgress,
      });

      // Redirect user to the course page
      Linking.openURL(course.url);
    } catch (error) {
      console.error("Error updating progress:", error);
      Alert.alert("Error", "Failed to update progress.");
    }
  };

  // Function to mark a course as completed
  const handleMarkComplete = async (course) => {
    try {
      const userId = auth.currentUser.uid; // Get current user ID
      const ongoingCourseRef = doc(db, "userCourses", userId, "ongoingCourses", course.id);
      navigation.navigate("Quizzes", { courseId: course.id, courseTitle: course.title, enrolledAt: course.enrolledAt });
      const completedCourseRef = doc(db, "userCourses", userId, "completedCourses", course.id);

      // Calculate time spent on the course
      const enrolledAt = course.enrolledAt.toDate(); // Convert Firestore timestamp to JavaScript Date
      const completedAt = new Date(); // Current timestamp
      const timeSpent = completedAt - enrolledAt; // Time spent in milliseconds

      // Save the completed course with time spent and progress set to 100%
      await setDoc(completedCourseRef, {
        ...course,
        userId: userId, // Save the user ID with the completed course
        progress: 100, // Set progress to 100%
        completedAt: completedAt,
        timeSpent: timeSpent,
      });

      // Remove the course from ongoingCourses
      await deleteDoc(ongoingCourseRef);

      Alert.alert("Success", "Course marked as completed!");
    } catch (error) {
      console.error("Error marking course as completed:", error);
      Alert.alert("Error", "Failed to mark course as completed.");
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {ongoingCourses.map((course) => (
          <View key={course.id} style={styles.card}>
            <Text style={styles.title}>{course.title}</Text>
            <Text style={styles.category}>{course.category}</Text>
            <Text>Progress: {course.progress}%</Text>

            {/* Continue Course Button */}
            <TouchableOpacity
              style={styles.continueButton}
              onPress={() => handleContinueCourse(course)}
            >
              <Text style={styles.continueButtonText}>Continue Course</Text>
            </TouchableOpacity>

            {/* Mark as Completed Button */}
            <TouchableOpacity
              style={styles.completeButton}
              onPress={() => handleMarkComplete(course)}
            >
              <Text style={styles.completeButtonText}>Mark as Completed</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default OngoingCourses;