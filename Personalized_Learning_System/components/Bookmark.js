import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { auth, db } from "../firebaseConfig";
import { collection, getDocs, doc, getDoc, onSnapshot } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import styles from "./bookmarkStyles";

const Bookmark = () => {
  const navigation = useNavigation();
  const [favoriteCourses, setFavoriteCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = auth.currentUser;
    if (!user) return; // Exit if no user is logged in
  
    console.log("Setting up onSnapshot listener...");
  
    const unsubscribe = onSnapshot(doc(db, "users", user.uid), (doc) => {
      if (doc.exists()) {
        const userData = doc.data();
        const favorites = userData.favorites || [];
  
        console.log("Favorites:", favorites);
  
        // Fetch all courses and filter based on favorites
        const fetchCourses = async () => {
          try {
            const coursesCollection = collection(db, "courses");
            const querySnapshot = await getDocs(coursesCollection);
  
            const coursesData = querySnapshot.docs
              .map((doc) => ({
                id: doc.id,
                ...doc.data(),
              }))
              .filter((course) => favorites.includes(course.id));
  
            console.log("Filtered Courses:", coursesData);
  
            setFavoriteCourses(coursesData);
            setLoading(false); // Set loading to false after data is fetched
          } catch (error) {
            console.error("Error fetching courses:", error);
            setLoading(false); // Ensure loading is set to false even if there's an error
          }
        };
  
        fetchCourses();
      } else {
        console.log("User document does not exist.");
        setLoading(false); // Set loading to false if the document doesn't exist
      }
    });
  
    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  const toggleFavorite = async (courseId) => {
    try {
      const user = auth.currentUser;
      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          const favorites = userData.favorites || [];

          const updatedFavorites = favorites.includes(courseId)
            ? favorites.filter((id) => id !== courseId)
            : [...favorites, courseId];

          await setDoc(doc(db, "users", user.uid), {
            favorites: updatedFavorites,
          }, { merge: true });

          setFavoriteCourses((prevCourses) =>
            prevCourses.filter((course) => course.id !== courseId)
          );
        }
      }
    } catch (error) {
      console.error("Error toggling favorite:", error);
    }
  };

  const renderCourseItem = ({ item }) => (
    <TouchableOpacity
      style={styles.courseCard}
      onPress={() => navigation.navigate("CourseDetails", { course: item })}
    >
      <Image source={{ uri: item.imageUrl }} style={styles.courseImage} />
      <TouchableOpacity
        style={styles.favoriteButton}
        onPress={() => toggleFavorite(item.id)}
      >
        <Feather name="heart" size={20} color="#FF3B30" />
      </TouchableOpacity>
      <View style={styles.courseContent}>
        <Text style={styles.courseTitle}>{item.title}</Text>
        <View style={styles.instructorRow}>
          <Feather name="user" size={14} color="#666666" />
          <Text style={styles.instructorText}>{item.provider}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

/*   if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  } */

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Favorites</Text>
      {favoriteCourses.length > 0 ? (
        <FlatList
          data={favoriteCourses}
          renderItem={renderCourseItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.courseList}
        />
      ) : (
        <Text style={styles.noFavoritesText}>No favorite courses yet.</Text>
      )}
    </View>
  );
};

export default Bookmark;