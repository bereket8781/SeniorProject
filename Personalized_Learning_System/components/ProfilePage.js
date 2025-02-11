import { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, Modal } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import styles from "./profileStyles";

const ProfilePage = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState("ProfilePage");
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);

  const handleNavigation = (screen) => {
    setActiveTab(screen);
    navigation.navigate(screen);
  };

  const handleLogout = () => {
    setLogoutModalVisible(true);
  };

  const confirmLogout = () => {
    setLogoutModalVisible(false);
    navigation.replace("Login"); 
  };

  const menuItems = [
    { icon: "user", label: "Your Profile", screen: "MyProfile" },
    { icon: "settings", label: "Settings", screen: "Settings" },
    { icon: "help-circle", label: "Help Center", screen: "HelpCenter" },
    { icon: "lock", label: "Privacy Policy", screen: "Privacy" },
    { icon: "log-out", label: "Log Out", action: handleLogout }, // Updated to show modal
  ];

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
              source={{ uri: "data:image/jpeg;base64,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" }}
              style={styles.avatar}
            />
            <TouchableOpacity style={styles.editButton}>
              <Feather name="edit-2" size={16} color="#ffffff" />
            </TouchableOpacity>
          </View>
          <Text style={styles.name}>Jacob Jones</Text>
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
