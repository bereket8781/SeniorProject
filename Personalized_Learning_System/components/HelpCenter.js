"use client"

import { useState } from "react"
import { View, Text, TouchableOpacity, TextInput, ScrollView, SafeAreaView } from "react-native"
import Feather from "react-native-vector-icons/Feather"
import { useNavigation } from "@react-navigation/native";
import styles from "./helpStyles"

export default function HelpCenter() {
    const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState("faq")
  const [expandedFaq, setExpandedFaq] = useState(null)
  const [expandedContact, setExpandedContact] = useState(null)

  const handleNavigation = (screen) => {
    setActiveTab(screen);
    navigation.navigate(screen);
  };

  const toggleFaq = (id) => {
    setExpandedFaq(expandedFaq === id ? null : id)
  }

  const toggleContact = (id) => {
    setExpandedContact(expandedContact === id ? null : id)
  }

  const renderFaqItem = (id, question, answer) => (
    <TouchableOpacity style={styles.accordionItem} onPress={() => toggleFaq(id)} activeOpacity={0.7}>
      <View style={styles.accordionHeader}>
        <Text style={styles.accordionTitle}>{question}</Text>
        <Feather name={expandedFaq === id ? "chevron-down" : "chevron-right"} size={20} style={styles.chevron} />
      </View>
      {expandedFaq === id && <Text style={styles.accordionContent}>{answer}</Text>}
    </TouchableOpacity>
  )

  const renderContactItem = (id, title, content, iconName) => (
    <TouchableOpacity style={styles.accordionItem} onPress={() => toggleContact(id)} activeOpacity={0.7}>
      <View style={styles.accordionHeader}>
        <View style={styles.contactTitle}>
          <Feather name={iconName} size={20} style={styles.contactIcon} />
          <Text style={styles.accordionTitle}>{title}</Text>
        </View>
        <Feather name={expandedContact === id ? "chevron-down" : "chevron-right"} size={20} style={styles.chevron} />
      </View>
      {expandedContact === id && <Text style={styles.accordionContent}>{content}</Text>}
    </TouchableOpacity>
  )

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
        <Feather name="arrow-left" size={24} color="#000"  onPress={() => navigation.navigate("ProfilePage")}/>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Help Center</Text>
      </View>

      {/* Search */}
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <Feather name="search" size={20} style={styles.searchIcon} />
          <TextInput style={styles.searchInput} placeholder="Search" placeholderTextColor="#666" />
        </View>
      </View>

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === "faq" && styles.activeTab]}
          onPress={() => setActiveTab("faq")}
        >
          <Text style={[styles.tabText, activeTab === "faq" && styles.activeTabText]}>FAQ</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === "contact" && styles.activeTab]}
          onPress={() => setActiveTab("contact")}
        >
          <Text style={[styles.tabText, activeTab === "contact" && styles.activeTabText]}>Contact Us</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        {activeTab === "faq" ? (
          <View>
            {/* Category Pills */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.pillsContainer}>
              <TouchableOpacity style={[styles.pill, styles.activePill]}>
                <Text style={styles.activePillText}>All</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.pill}>
                <Text style={styles.pillText}>Services</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.pill}>
                <Text style={styles.pillText}>General</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.pill}>
                <Text style={styles.pillText}>Account</Text>
              </TouchableOpacity>
            </ScrollView>

            {/* FAQ Items */}
            <View style={styles.accordionContainer}>
              {renderFaqItem("offline", "Can I access my courses offline?", "Yes, you can download course materials and access them offline. This is great for learning on the go, especially when you don't have an internet connection.")}
              {renderFaqItem("enroll", "How do I enroll in a course?", 'Browse our course catalog and click the "Enroll" button on any course.')}
              {renderFaqItem("progress", "Is there a way to track my progress?", "Yes, you can track your progress through your dashboard.")}
              {renderFaqItem("support", "How do I reach out for help or support?", "You can contact us through various channels listed in our Contact Us section.")}
              {renderFaqItem("security", "Is my data safe and secure?", "We take data security seriously and use industry-standard encryption.")}
            </View>
          </View>
        ) : (
          <View style={styles.accordionContainer}>
            {renderContactItem("customer-service", "Customer Service", "Our customer service team is available 24/7.", "headphones")}
            {renderContactItem("whatsapp", "WhatsApp", "(480) 555-0103", "phone")}
            {renderContactItem("website", "Website", "Visit our website for more information.", "globe")}
          </View>
        )}
      </ScrollView>

      {/* Bottom Navigation */}
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
  )
}
