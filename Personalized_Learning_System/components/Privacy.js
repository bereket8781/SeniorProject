import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import styles from "./privacyStyles";

export default function Privacy() {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState("Privacy");
  const handleNavigation = (screen) => {
    setActiveTab(screen);
    navigation.navigate(screen);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Feather
            name="arrow-left"
            size={24}
            color="#000"
            onPress={() => navigation.navigate("ProfilePage")}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Privacy Policy</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.sectionTitle}>Cancelation Policy</Text>
        <Text style={styles.sectionText}>
          At EduConnect, we strive to provide a high-quality personalized
          learning experience. However, we understand that circumstances may
          arise that require users to cancel their subscriptions, course
          enrollments, or scheduled sessions. This policy outlines the
          conditions and procedures for cancellations and refunds. Users may
          cancel their subscription at any time through their account settings.
          Cancellation will prevent further billing, but users will retain
          access to the learning platform until the end of the current billing
          cycle. Refunds are not provided for partial months or unused portions
          of the subscription.
        </Text>
        <Text style={styles.sectionText}>
          If a user enrolls in a paid course, they may request a cancellation
          within [45] days of enrollment for a full refund. No refunds will be
          issued after the refund window has expired. If the course includes
          downloadable materials, refunds may only be issued if the materials
          have not been accessed.
        </Text>

        <Text style={styles.sectionTitle}>Terms & Condition</Text>
        <Text style={styles.sectionText}>
          By using our platform, you acknowledge that you have read, understood,
          and agreed to these Terms and Conditions. You also agree to comply
          with all applicable laws and regulations.
        </Text>
        <Text style={styles.sectionText}>
          To access certain features, you may need to create an account. You are
          responsible for maintaining the confidentiality of your login
          credentials. We reserve the right to suspend or terminate accounts
          that violate these Terms.
        </Text>
        <Text style={styles.sectionText}>
          Our platform uses assessments and algorithms to personalize course
          recommendations. Learning materials, exercises, and recommendations
          are for educational purposes only. We do not guarantee specific
          learning outcomes or achievements.
        </Text>
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
    </SafeAreaView>
  );
}
