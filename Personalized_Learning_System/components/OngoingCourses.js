import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Alert, Linking } from "react-native";
import { db, auth } from "../firebaseConfig";
import { collection, doc, onSnapshot, updateDoc, deleteDoc, setDoc } from "firebase/firestore";
import styles from "./ongoingStyles";

const OngoingCourses = ({ navigation }) => {
  const [ongoingCourses, setOngoingCourses] = useState([]);

  useEffect(() => {
    const userId = auth.currentUser.uid;
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

  const handleContinueCourse = async (course) => {
    try {
      const userId = auth.currentUser.uid;
      const courseRef = doc(db, "userCourses", userId, "ongoingCourses", course.id);
      const newProgress = Math.min(course.progress + 10, 100);
      await updateDoc(courseRef, { progress: newProgress });
      
      // Always open course URL regardless of progress
      Linking.openURL(course.url);
    } catch (error) {
      console.error("Error continuing course:", error);
      Alert.alert("Error", "Failed to continue course.");
    }
  };

  const handleMarkComplete = async (course) => {
    try {
      // First navigate to quiz
      navigation.navigate("Quizzes", { 
        courseId: course.id, 
        courseTitle: course.title, 
        enrolledAt: course.enrolledAt 
      });

      // Then mark as complete after quiz completion
      // (This should be moved to execute after successful quiz completion)
      const userId = auth.currentUser.uid;
      const ongoingCourseRef = doc(db, "userCourses", userId, "ongoingCourses", course.id);
      const completedCourseRef = doc(db, "userCourses", userId, "completedCourses", course.id);

      const enrolledAt = course.enrolledAt?.toDate?.() || new Date();
      const completedAt = new Date();
      const timeSpent = completedAt - enrolledAt;

      await setDoc(completedCourseRef, {
        ...course,
        userId,
        progress: 100,
        completedAt,
        timeSpent: timeSpent,
      });

      await deleteDoc(ongoingCourseRef);
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

            <TouchableOpacity
              style={styles.continueButton}
              onPress={() => handleContinueCourse(course)}
            >
              <Text style={styles.continueButtonText}>Continue Course</Text>
            </TouchableOpacity>

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