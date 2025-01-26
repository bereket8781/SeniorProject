import React from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'; // Import Feather icons
import styles from './mylessonsStyles';

const MyCourseLessons = ({ route, navigation }) => {
    const { course } = route.params;

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton}
                onPress={() => navigation.goBack()}
                >
                    <Feather name="chevron-left" size={24} />
                </TouchableOpacity>
                <Text style={styles.title}>My Courses</Text>
            </View>

            <View style={styles.searchBar}>
                <TextInput 
                   style={styles.searchInput}
                   placeholder="Search"
                />
                <View style={styles.searchIcon}>
                    <Feather name="search" size={20} color="#2563eb" />
                </View>
            </View>

            <ScrollView style={styles.content}>
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Section 01 - Introduction</Text>
                        <Text style={styles.duration}>24 Mins</Text>
                    </View>

                    <View style={styles.lessonList}>
                        <TouchableOpacity style={styles.lessonItem}>
                            <Text style={styles.lessonNumber}>01</Text>
                            <View style={styles.lessonContent}>
                                <Text style={styles.lessonTitle}>Why Using 3D Blender</Text>
                                <Text style={styles.lessonDuration}>15 Mins</Text>
                            </View>
                            <Feather name="chevron-right" size={20} color="#2563eb" />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.lessonItem}>
                            <Text style={styles.lessonNumber}>02</Text>
                            <View style={styles.lessonContent}>
                                <Text style={styles.lessonTitle}>3D Blender Installation</Text>
                                <Text style={styles.lessonDuration}>10 Mins</Text>
                            </View>
                            <Feather name="chevron-right" size={20} color="#2563eb" />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Section 02 - Graphics Design</Text>
                        <Text style={styles.duration}>125 Mins</Text>
                    </View>

                    <View style={styles.lessonList}>
                        <TouchableOpacity style={styles.lessonItem}>
                            <Text style={styles.lessonNumber}>03</Text>
                            <View style={styles.lessonContent}>
                                <Text style={styles.lessonTitle}>Take a Look Blender Interface</Text>
                                <Text style={styles.lessonDuration}>45 Mins</Text>
                            </View>
                            <Feather name="chevron-right" size={20} color="#2563eb" />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.lessonItem}>
                            <Text style={styles.lessonNumber}>04</Text>
                            <View style={styles.lessonContent}>
                                <Text style={styles.lessonTitle}>The Basics of 3D Modelling</Text>
                                <Text style={styles.lessonDuration}>20 Mins</Text>
                            </View>
                            <Feather name="chevron-right" size={20} color="#2563eb" />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.lessonItem}>
                            <Text style={styles.lessonNumber}>05</Text>
                            <View style={styles.lessonContent}>
                                <Text style={styles.lessonTitle}>Shading and lighting</Text>
                                <Text style={styles.lessonDuration}>36 Mins</Text>
                            </View>
                            <Feather name="chevron-right" size={20} color="#2563eb" />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

            <View style={styles.bottomNav}>
                <Feather name="credit-card" size={24} color="#666" />
                <TouchableOpacity style={styles.startButton}>
                    <Text style={styles.startButtonText}>Start Course Again</Text>
                    <Feather name="chevron-right" size={20} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default MyCourseLessons;
