import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Alert,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { auth, db } from "../firebaseConfig";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  onSnapshot,
  setDoc,
} from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import styles from "./bookmarkStyles";

const Bookmark = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState("Bookmark");
  const [favoriteCourses, setFavoriteCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [courseToRemove, setCourseToRemove] = useState(null);

  const handleNavigation = (screen) => {
    setActiveTab(screen);
    navigation.navigate(screen);
  };

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

          await setDoc(
            doc(db, "users", user.uid),
            {
              favorites: updatedFavorites,
            },
            { merge: true }
          );

          setFavoriteCourses((prevCourses) =>
            prevCourses.filter((course) => course.id !== courseId)
          );
        }
      }
    } catch (error) {
      console.error("Error toggling favorite:", error);
    }
  };

  const handleRemoveConfirmation = (courseId) => {
    setCourseToRemove(courseId);
    setShowConfirmationModal(true);
  };

  const confirmRemove = () => {
    if (courseToRemove) {
      toggleFavorite(courseToRemove);
    }
    setShowConfirmationModal(false);
    setCourseToRemove(null);
  };

  const cancelRemove = () => {
    setShowConfirmationModal(false);
    setCourseToRemove(null);
  };

  const renderCourseItem = ({ item }) => (
    <TouchableOpacity
      style={styles.courseCard}
      onPress={() => navigation.navigate("CourseDetails", { course: item })}
    >
      <Image source={{ uri: item.imageUrl }} style={styles.courseImage} />
      <TouchableOpacity
        style={styles.favoriteButton}
        onPress={() => handleRemoveConfirmation(item.id)}
      >
        <Feather name="bookmark" size={20} color="#FF3B30" />
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

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("HomePage")}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Bookmark</Text>
      </View>
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

      {/* Confirmation Modal */}
      <Modal
        visible={showConfirmationModal}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowConfirmationModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              Are you sure you want to remove this course from your bookmarks?
            </Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, styles.yesButton]}
                onPress={confirmRemove}
              >
                <Text style={styles.buttonText}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.noButton]}
                onPress={cancelRemove}
              >
                <Text style={styles.buttonText}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <View style={styles.bottomNav}>
          {[
            { icon: "home", label: "Home", screen: "HomePage" },
            { icon: "book", label: "My Course", screen: "MyCourses" },
            { icon: "bookmark", label: "Bookmark", screen: "Bookmark" },
            { icon: "message-circle", label: "Chat", screen: "Chat" },
            { icon: "user", label: "Profile", screen: "ProfilePage" },
          ].map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.navItem}
              onPress={() => handleNavigation(item.screen)}
            >
              <Feather
                name={item.icon}
                size={24}
                color={activeTab === item.screen ? "#0056FF" : "#666666"}
              />
              <Text
                style={[
                  styles.navText,
                  activeTab === item.screen && styles.navActive,
                ]}
              >
                {item.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
    </View>
  );
};

export default Bookmark;