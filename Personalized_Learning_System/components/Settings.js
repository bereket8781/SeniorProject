import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";
import styles from "./settingsStyles";

const Settings = ({navigation}) => {
    const [activeTab, setActiveTab] = useState("Settings");
    const handleNavigation = (screen) => {
        setActiveTab(screen);
        navigation.navigate(screen);
      };

      const menuItems = [
        { icon: "user", label: "Notification Settings", screen: "Notification"},
        { icon: "settings", label: "Password Manager", screen: "Password" },
        { icon: "help-circle", label: "Delete Account", screen: "Delete-Account" },
      ];

      return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Feather name="arrow-left" size={24} color="#000"  onPress={() => navigation.navigate("ProfilePage")}/>
                <Text style={styles.headerTitle}>Settings</Text>
            </View>

            <ScrollView>
                <View style={styles.menuContainer}>
                {menuItems.map((item, index) => (
               <TouchableOpacity 
               key={index} 
               style={styles.menuItem} 
               onPress={() => item.screen && handleNavigation(item.screen)}
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
      )
    
}

export default Settings;