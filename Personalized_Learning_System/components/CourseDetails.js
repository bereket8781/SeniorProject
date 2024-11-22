import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import styles from "./courseStyles";

const CourseDetails = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState("About");

  const renderAboutContent = () => (
    <View>
      <Text style={styles.aboutText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Text>

      <View style={styles.tutorContainer}>
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/men/32.jpg" }}
          style={styles.tutorImage}
        />

        <View style={styles.tutorInfo}>
          <Text style={styles.tutorName}>Robert Green</Text>
          <Text style={styles.tutorTitle}>Design Lead</Text>
        </View>

        <View style={styles.tutorActions}>
          <TouchableOpacity style={styles.tutorAction}>
            <Feather name="mail" size={24} color="#0056FF" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.infoGrid}>
        <View style={styles.infoGridItem}>
          <Text style={styles.infoLabel}>Students</Text>
          <Text style={styles.infoValue}>158,213</Text>
        </View>

        <View style={styles.infoGridItem}>
          <Text style={styles.infoLabel}>Language</Text>
          <Text style={styles.infoValue}>English</Text>
        </View>

        <View style={styles.infoGridItem}>
          <Text style={styles.infoLabel}>Last update</Text>
          <Text style={styles.infoValue}>Oct 31, 2024</Text>
        </View>

        <View style={styles.infoGridItem}>
          <Text style={styles.infoLabel}>Subtitle</Text>
          <Text style={styles.infoValue}>English and 5 more</Text>
        </View>
      </View>
    </View>
  );

  const renderLessonsContent = () => (
    <View>
      <Text style={[styles.infoLabel, { marginBottom: 12 }]}>
        Section 1 - Introduction
      </Text>

      <View style={styles.lessonItem}>
        <View style={styles.lessonNumber}>
          <Text style={styles.lessonNumberText}>01</Text>
        </View>

        <View style={styles.lessonInfo}>
          <Text style={styles.lessonTitle}>
            Introduction to Design Thinking
          </Text>
          <Text style={styles.lessonDuration}>15:00</Text>
        </View>

        <Feather name="play-circle" size={24} color="#0056FF" />
      </View>

      <View style={styles.lessonItem}>
        <View style={styles.lessonNumber}>
          <Text style={styles.lessonNumberText}>02</Text>
        </View>

        <View style={styles.lessonInfo}>
          <Text style={styles.lessonTitle}>Empathy in Design</Text>
          <Text style={styles.lessonDuration}>20:00</Text>
        </View>

        <Feather name="lock" size={24} color="#666666" />
      </View>

      <Text style={[styles.infoLabel, { marginTop: 20, marginBottom: 12 }]}>
        Section 2 - Fundamentals
      </Text>
      <View style={styles.lessonItem}>
        <View style={styles.lessonNumber}>
          <Text style={styles.lessonNumberText}>03</Text>
        </View>
        <View style={styles.lessonInfo}>
          <Text style={styles.lessonTitle}>Ideation and Brainstorming</Text>
          <Text style={styles.lessonDuration}>25:00</Text>
        </View>
        <Feather name="lock" size={24} color="#666666" />
      </View>
      <View style={styles.lessonItem}>
        <View style={styles.lessonNumber}>
          <Text style={styles.lessonNumberText}>04</Text>
        </View>
        <View style={styles.lessonInfo}>
          <Text style={styles.lessonTitle}>Prototyping and Testing</Text>
          <Text style={styles.lessonDuration}>30:00</Text>
        </View>
        <Feather name="lock" size={24} color="#666666" />
      </View>
    </View>
  );

  const renderReviewsContent = () => (
    <View>
      <View style={styles.reviewItem}>
        <View style={styles.reviewHeader}>
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/women/68.jpg" }}
            style={styles.reviewerImage}
          />

          <View style={styles.reviewerInfo}>
            <Text style={styles.reviewerName}>Dale Thiel</Text>
            <Text style={styles.reviewData}>11 months ago</Text>
          </View>

          <View style={{ flexDirection: "row" }}>
            {[1, 2, 3, 4, 5].map((star) => (
              <Feather key={star} name="star" size={16} color="#FFD700" />
            ))}
          </View>
        </View>

        <Text style={styles.reviewText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </View>

      <View style={styles.reviewItem}>
        <View style={styles.reviewHeader}>
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/women/45.jpg" }}
            style={styles.reviewerImage}
          />

          <View style={styles.reviewerInfo}>
            <Text style={styles.reviewerName}>Tiffany Tom</Text>
            <Text style={styles.reviewData}>11 months ago</Text>
          </View>

          <View style={{ flexDirection: "row" }}>
            {[1, 2, 3, 4, 5].map((star) => (
              <Feather key={star} name="star" size={16} color="#FFD700" />
            ))}
          </View>
        </View>

        <Text style={styles.reviewText}>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
            }}
            style={styles.headerImage}
          />

          <View style={styles.headerOverlay} />

          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.navigate("HomePage")}
          >
            <Feather name="arrow-left" size={24} color="#FFFFFF" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.shareButton}>
            <Feather name="share-2" size={24} color="#FFFFFF" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.bookmarkButton}>
            <Feather name="bookmark" size={24} color="#FFFFFF" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.previewButton}>
            <Feather name="play" size={24} color="#FFFFFF" />
            <Text style={styles.previewText}>Course Preview</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>Best Seller</Text>
          </View>

          <Text style={styles.title}>Design Thinking Fundamental</Text>

          <View style={styles.courseInfo}>
            <View style={styles.infoItem}>
              <Feather name="star" size={16} color="#FFD700" />
              <Text style={styles.infoText}>4.5 (300 reviews)</Text>
            </View>

            <View style={styles.infoItem}>
              <Feather name="book-open" size={16} color="#666666" />
              <Text style={styles.infoText}>Certificate</Text>
            </View>
          </View>

          <View style={styles.tabContainer}>
            {["About", "Lessons", "Reviews"].map((tab) => (
              <TouchableOpacity
                key={tab}
                style={[styles.tab, activeTab === tab && styles.activeTab]}
                onPress={() => setActiveTab(tab)}
              >
                <Text
                  style={[
                    styles.tabText,
                    activeTab === tab && styles.activeTabText,
                  ]}
                >
                  {tab}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {activeTab === "About" && renderAboutContent()}
          {activeTab === "Lessons" && renderLessonsContent()}
          {activeTab === "Reviews" && renderReviewsContent()}
        </View>
      </ScrollView>

      <View style={{ padding: 20 }}>
        <View style={styles.footer}>
          <View style={styles.totalprice}>
            <Text style={styles.totalpriceText}>Total Price</Text>
            <Text style={styles.price}>$180.00</Text>
          </View>
          <TouchableOpacity style={styles.enrollButton}>
            <Text style={styles.enrollButtonText}>Enroll Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CourseDetails;
