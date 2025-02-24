import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { db } from '../firebaseConfig'; // Import db from firebaseConfig.js
import { collection, query, where, getDocs } from 'firebase/firestore';
import styles from './categorycoursesStyles';

const CategoryCourses = ({ route, navigation }) => {
  const { categoryName } = route.params; // Get the category name from navigation params
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        // Query Firestore for courses matching the category
        const coursesCollection = collection(db, 'courses');
        const q = query(coursesCollection, where('category', '==', categoryName));
        const querySnapshot = await getDocs(q);

        const coursesData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setCourses(coursesData);
      } catch (error) {
        console.error('Error fetching courses: ', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [categoryName]);

  const renderCourseItem = ({ item }) => (
    <TouchableOpacity
      style={styles.courseItem}
      onPress={() => navigation.navigate('CourseDetails', { course: item })}
    >
      <Image source={{ uri: item.imageUrl }} style={styles.courseImage} />
      <View style={styles.courseDetails}>
        <Text style={styles.courseTitle}>{item.title}</Text>
        <Text style={styles.courseProvider}>{item.provider}</Text>
        <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
           <Text style={styles.courseUrl}>{item.url}</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.categoryTitle}>{categoryName} Courses</Text>
      <FlatList
        data={courses}
        renderItem={renderCourseItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.courseList}
      />
    </View>
  );
};

export default CategoryCourses;