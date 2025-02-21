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
    { icon: "user", label: "My Profile", screen: "MyProfile" },
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
              source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgvL1falzHMx6Ad2oTvH9y1BeVbQnplBRC8A&s" }}
              style={styles.avatar}
            />
          </View>
          <Text style={styles.name}>Selamawit Yosef</Text>
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
