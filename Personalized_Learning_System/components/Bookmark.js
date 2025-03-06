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
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import { auth, db } from "../firebaseConfig";
import { collection, getDocs, doc, getDoc, onSnapshot, setDoc } from "firebase/firestore";
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
    if (!user) return;

    const unsubscribe = onSnapshot(doc(db, "users", user.uid), async (doc) => {
      if (doc.exists()) {
        const userData = doc.data();
        const favorites = userData.favorites || [];

        try {
          const querySnapshot = await getDocs(collection(db, "courses"));
          const coursesData = querySnapshot.docs
            .map(doc => ({ id: doc.id, ...doc.data() }))
            .filter(course => favorites.includes(course.id));

          setFavoriteCourses(coursesData);
        } catch (error) {
          console.error("Error fetching courses:", error);
        }
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const toggleFavorite = async (courseId) => {
    try {
      const user = auth.currentUser;
      if (!user) return;

      const userDoc = await getDoc(doc(db, "users", user.uid));
      if (!userDoc.exists()) return;

      const userData = userDoc.data();
      const favorites = userData.favorites || [];
      const updatedFavorites = favorites.includes(courseId)
        ? favorites.filter(id => id !== courseId)
        : [...favorites, courseId];

      await setDoc(doc(db, "users", user.uid), { favorites: updatedFavorites }, { merge: true });
      setFavoriteCourses(prev => prev.filter(course => course.id !== courseId));
    } catch (error) {
      console.error("Error toggling favorite:", error);
    }
  };

  // ... keep handleRemoveConfirmation, confirmRemove, cancelRemove the same

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
    <View style={{ flex: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
      >
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
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
            <Text style={styles.noFavoritesText}>
              {loading ? "Loading..." : "No favorite courses yet."}
            </Text>
          )}

          {/* Keep the Modal component the same */}
        </View>
      </KeyboardAvoidingView>

      {/* Fixed Navigation Bar */}
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
