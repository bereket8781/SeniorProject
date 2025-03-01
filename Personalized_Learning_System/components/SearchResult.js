import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./searchStyles";

const SearchResult = ({ route }) => {
    const { courses } =  route.params;
    const navigation = useNavigation();

    const renderCourseItem = ({ item }) => (
        <TouchableOpacity
            style={styles.courseItem}
            onPress={() => navigation.navigate("CourseDetails", { course: item })}
        >
            <Image source={{ uri: item.imageUrl }} style={styles.courseImage} />
            <View style={styles.courseDetails}>
                
                <Text style={styles.courseTitle}>{item.title}</Text>
                <Text style={styles.courseProvider}>{item.provider}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("HomePage")}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Search Result</Text>
      </View>
            <FlatList
                data={courses}
                renderItem={renderCourseItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.courseList}
            />
        </View>
    );
};

export default SearchResult;