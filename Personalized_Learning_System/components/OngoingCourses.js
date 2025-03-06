import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Alert, Linking, AppState } from "react-native";
import { db, auth } from "../firebaseConfig";
import { collection, doc, onSnapshot, updateDoc, deleteDoc, setDoc } from "firebase/firestore";
import styles from "./ongoingStyles";

const OngoingCourses = ({ navigation }) => {
  const [ongoingCourses, setOngoingCourses] = useState([]);
  const [pendingCourse, setPendingCourse] = useState(null);

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

  useEffect(() => {
    const handleAppStateChange = async (nextAppState) => {
      if (nextAppState === 'active' && pendingCourse) {
        try {
          const userId = auth.currentUser.uid;
          const courseRef = doc(db, "userCourses", userId, "ongoingCourses", pendingCourse.id);
          const newProgress = Math.min(pendingCourse.currentProgress + 10, 100);
          
          await updateDoc(courseRef, { progress: newProgress });
          //Alert.alert("Progress Updated", `Your progress is now ${newProgress}%`);
        } catch (error) {
          console.error("Error updating progress:", error);
          Alert.alert("Error", "Failed to update course progress.");
        } finally {
          setPendingCourse(null);
        }
      }
    };

    const subscription = AppState.addEventListener('change', handleAppStateChange);
    return () => subscription.remove();
  }, [pendingCourse]);

  const handleContinueCourse = (course) => {
    try {
      setPendingCourse({
        id: course.id,
        currentProgress: course.progress
      });
      Linking.openURL(course.url);
    } catch (error) {
      console.error("Error opening course:", error);
      Alert.alert("Error", "Could not open course link.");
    }
  };

  const handleMarkComplete = async (course) => {
    try {
      navigation.navigate("Quizzes", { 
        courseId: course.id, 
        courseTitle: course.title, 
        enrolledAt: course.enrolledAt 
      });

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
        timeSpent,
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