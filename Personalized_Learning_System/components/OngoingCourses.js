import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import styles from "./ongoingStyles";

const CourseCard = ({ title, category, progress, timeLeft, lessons, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.card}>
      <View style={styles.thumbnail} />
      <View style={styles.content}>
        <Text style={styles.category}>{category}</Text>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.progressContainer}>
          <View style={[styles.progressBar, { width: `${progress}%` }]} />
        </View>
        <View style={styles.meta}>
          <Text style={styles.metaText}>⭐ {(progress / 20).toFixed(1)}</Text>
          <Text style={styles.metaText}>{timeLeft}</Text>
          <Text style={styles.metaText}>{lessons}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )

const OngoingCourses = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState("MyCourses");

  const handleNavigation = (screen) => {
    setActiveTab(screen);
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.navigate("HomePage")}
          style={styles.backButton}
        >
          <Feather name="chevron-left" color="#000000" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Courses</Text>
      </View>

      <ScrollView>
        <View style={styles.searchContainer}>
          <View style={styles.searchWrapper}>
            <TextInput placeholder="Search for..." style={styles.searchInput} />
            <Feather name="search" style={styles.searchIcon} />
          </View>

          <View style={styles.filterContainer}>
            <TouchableOpacity
              style={[styles.filterButton, styles.filterButtonCompleted]}
              onPress={() => navigation.navigate('MyCourses')}
            >
              <Text style={styles.filterTextCompleted}>Completed</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.filterButton, styles.filterButtonOngoing]}
            >
              <Text style={styles.filterTextOngoing}>Ongoing</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.courseList}>
          <CourseCard
            category="UI/UX Design"
            title="Intro to UI/UX Design"
            progress={44}
            timeLeft="3 hrs 40 Mins"
            lessons="12/25"
            onPress={() => navigation.navigate("OngoingLessons", { courseTitle: "Intro to UI/UX" })}
          />
          <CourseCard
            category="Web Development"
            title="WordPress website Dev.."
            progress={39}
            timeLeft="1 hrs 58 Mins"
            lessons="12/31"
            onPress={() => navigation.navigate("OngoingLessons", { courseTitle: "WordPress website Dev.." })}
          />
          <CourseCard
            category="UI/UX Design"
            title="3D Blender and UI/UX"
            progress={55}
            timeLeft="2 hrs 46 Mins"
            lessons="56/98"
            onPress={() => navigation.navigate("OngoingLessons", { courseTitle: "3D Blender and UI/UX" })}
          />
          <CourseCard
            category="Datastructure and Algorithm"
            title="Intro to Datastructure"
            progress={20}
            timeLeft="1 hrs 58 Mins"
            lessons="12/31"
            onPress={() => navigation.navigate("OngoingLessons", { courseTitle: "Intro to Datastructure" })}
          />
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        {[
          { icon: "home", label: "Home", screen: "Home" },
          { icon: "book", label: "My Course", screen: "MyCourses" },
          { icon: "bookmark", label: "Bookmark", screen: "Bookmark" },
          { icon: "message-circle", label: "Chat", screen: "Chat" },
          { icon: "user", label: "Profile", screen: "Profile" },
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

export default OngoingCourses;
