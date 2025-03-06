import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity, Alert } from "react-native";
import { db, auth } from "../firebaseConfig";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import styles from "./quizzesStyles";

const Quizzes = ({ route, navigation }) => {
  const { courseId, courseTitle } = route.params;
  const [quizzes, setQuizzes] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchQuizzes = async () => {
      const courseRef = doc(db, "courses", courseId);
      const courseDoc = await getDoc(courseRef);
      if (courseDoc.exists()) {
        setQuizzes(courseDoc.data().quizzes || []);
      }
    };
    fetchQuizzes();
  }, [courseId]);

  const handleAnswerSelect = (questionIndex, selectedAnswer) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: selectedAnswer,
    }));
  };

  const handleSubmitQuiz = async () => {
    let correctAnswers = 0;
    quizzes.forEach((quiz, index) => {
      if (userAnswers[index] === quiz.answer) correctAnswers++;
    });

    const totalQuestions = quizzes.length;
    const quizScore = totalQuestions > 0 ? (correctAnswers / totalQuestions) * 100 : 0;
    setScore(quizScore);

    const courseRef = doc(db, "courses", courseId);
    const courseDoc = await getDoc(courseRef);

    if (courseDoc.exists()) {
      const courseData = courseDoc.data();
      const enrolledAt = courseData.enrolledAt || null;
      const enrolledAtDate = enrolledAt?.toDate?.() || new Date();
      const completedAtDate = new Date();
      const timeSpent = completedAtDate - enrolledAtDate;

      const userId = auth.currentUser.uid;
      const completedCourseRef = doc(db, "userCourses", userId, "completedCourses", courseId);

      await setDoc(completedCourseRef, {
        courseId,
        courseTitle,
        quizScore,
        enrolledAt: enrolledAt || serverTimestamp(),
        completedAt: completedAtDate,
        userId,
        progress: 100,
        timeSpent,
      });

      Alert.alert("Quiz Submitted", `Your score: ${quizScore.toFixed(2)}%`);
      navigation.navigate("MyCourses");
    } else {
      Alert.alert("Error", "Course details not found.");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{courseTitle} Quiz</Text>
      {quizzes.map((quiz, index) => (
        <View key={index} style={styles.quizContainer}>
          <Text style={styles.question}>{quiz.question}</Text>
          {quiz.options.map((option, optionIndex) => (
            <TouchableOpacity
              key={optionIndex}
              style={[
                styles.option,
                userAnswers[index] === option && styles.selectedOption,
              ]}
              onPress={() => handleAnswerSelect(index, option)}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmitQuiz}>
        <Text style={styles.submitButtonText}>Submit Quiz</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Quizzes;
