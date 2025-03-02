import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, Modal, ActivityIndicator } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { auth, db } from "../firebaseConfig";
import { doc, getDoc, query, collection, where, getDocs } from "firebase/firestore";
import styles from "./profileStyles";

const ProfilePage = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState("ProfilePage");
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);
  const [profileImage, setProfileImage] = useState("");
  const [fullname, setFullname] = useState("");
  const [loadingProfileImage, setLoadingProfileImage] = useState(true); // Loading state for profileImage
  const [loadingFullname, setLoadingFullname] = useState(true); // Loading state for fullname

  // Fetch profileImage from "users" collection using email
  useEffect(() => {
    const fetchProfileImage = async () => {
      try {
        const user = auth.currentUser; // Get currently logged-in user
        if (user) {
          const email = user.email; // Use email as the common field
          if (email) {
            // Query the "users" collection for the document with the matching email
            const usersQuery = query(collection(db, "users"), where("email", "==", email));
            const usersQuerySnapshot = await getDocs(usersQuery);

            if (!usersQuerySnapshot.empty) {
              const usersLowerData = usersQuerySnapshot.docs[0].data();
              setProfileImage(usersLowerData.profileImage || "https://via.placeholder.com/150"); // Set profile image
            } else {
              console.log("Document does not exist in 'users' collection for email:", email); // Debugging
            }
          } else {
            console.log("No email found for the authenticated user"); // Debugging
          }
        } else {
          console.log("No authenticated user found"); // Debugging
        }
      } catch (error) {
        console.error("Error fetching profile image:", error); // Debugging
      } finally {
        setLoadingProfileImage(false); // Stop loading
      }
    };

    fetchProfileImage();
  }, []);

  // Fetch fullname from "Users" collection using email
  useEffect(() => {
    const fetchFullname = async () => {
      try {
        const user = auth.currentUser; // Get currently logged-in user
        if (user) {
          const email = user.email; // Use email as the common field
          if (email) {
            // Query the "Users" collection for the document with the matching email
            const usersQuery = query(collection(db, "Users"), where("email", "==", email));
            const usersQuerySnapshot = await getDocs(usersQuery);

            if (!usersQuerySnapshot.empty) {
              const usersData = usersQuerySnapshot.docs[0].data();
              setFullname(usersData.fullname || ""); // Set full name
            } else {
              console.log("Document does not exist in 'Users' collection for email:", email); // Debugging
            }
          } else {
            console.log("No email found for the authenticated user"); // Debugging
          }
        } else {
          console.log("No authenticated user found"); // Debugging
        }
      } catch (error) {
        console.error("Error fetching fullname:", error); // Debugging
      } finally {
        setLoadingFullname(false); // Stop loading
      }
    };

    fetchFullname();
  }, []);

  const handleNavigation = (screen) => {
    setActiveTab(screen);
    if (screen === "MyProfile") {
      navigation.navigate(screen, {
        fullname: fullname, // Pass fullname
        profileImage: profileImage, // Pass profileImage
      });
    } else {
      navigation.navigate(screen);
    }
  };

  const handleLogout = () => {
    setLogoutModalVisible(true);
  };

  const confirmLogout = () => {
    setLogoutModalVisible(false);
    navigation.replace("Login");
  };

  const menuItems = [
    { icon: "user", label: "My Profile", screen: "MyProfile" },
    { icon: "settings", label: "Settings", screen: "Settings" },
    { icon: "help-circle", label: "Help Center", screen: "HelpCenter" },
    { icon: "lock", label: "Privacy Policy", screen: "Privacy" },
    { icon: "log-out", label: "Log Out", action: handleLogout }, // Updated to show modal
  ];

  // Show loading indicator if either profileImage or fullname is still being fetched
  if (loadingProfileImage || loadingFullname) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0056FF" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Feather name="arrow-left" size={24} color="#000" onPress={() => navigation.navigate("HomePage")} />
        <Text style={styles.headerTitle}>Profile</Text>
      </View>

      <ScrollView>
        <View style={styles.profileSection}>
          <View style={styles.avatarContainer}>
            <Image
              source={{ uri: profileImage }}
              style={styles.avatar}
              onError={(e) => {
                console.error("Failed to load image:", e.nativeEvent.error); // Debugging
                setProfileImage("https://via.placeholder.com/150"); // Fallback image
              }}
            />
          </View>
          <Text style={styles.name}>{fullname}</Text>
        </View>

        <View style={styles.menuContainer}>
          {menuItems.map((item, index) => (
            <TouchableOpacity 
              key={index} 
              style={styles.menuItem} 
              onPress={() => item.screen ? handleNavigation(item.screen) : item.action()}
            >
              <View style={styles.menuItemLeft}>
                <Feather name={item.icon} size={24} color="#666" />
                <Text style={styles.menuItemText}>{item.label}</Text>
              </View>
              <Feather name="chevron-right" size={24} color="#666" />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Logout Confirmation Modal */}
      <Modal 
        visible={logoutModalVisible} 
        transparent 
        animationType="fade" 
        onRequestClose={() => setLogoutModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Logout</Text>
            <Text style={styles.modalText}>Are you sure you want to log out?</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.cancelButton} onPress={() => setLogoutModalVisible(false)}>
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.confirmButton} onPress={confirmLogout}>
                <Text style={styles.confirmText}>Yes, Logout</Text>
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

export default ProfilePage;