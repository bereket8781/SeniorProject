import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from './categoriesStyles';

const AllCategories = ({ navigation }) => {
    const categories = [
        {name: '3D Design', icon: require('../assets/images/3Ddesign.png') },
        {name: 'Graphic Design', icon: require('../assets/images/graphicDesign.png') },
        {name: 'Web Development', icon: require('../assets/images/webDev.png') },
        {name: 'SEO & Marketing', icon: require('../assets/images/search.png') },
        {name: 'Finance & Accounting', icon: require('../assets/images/budget.png') },
        {name: 'Personal Development', icon: require('../assets/images/personalDev.png') },
        {name: 'Office Productivity', icon: require('../assets/images/settings.png') },
        {name: 'HR Management', icon: require('../assets/images/hr.png') },
        {name: 'Data Structures & Algorithm', icon: require('../assets/images/algorithm.png') },
    ];

    return (
        <View style = {styles.container}>
            <View style = {styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('HomePage')}>
                    <Feather name = "arrow-left" size={24} color="#333" />
                </TouchableOpacity>

                <Text style = {styles.headerTitle}>All Categories</Text>
            </View>

            <View style = {styles.searchContainer}>
                <TextInput
                   style = {styles.searchInput}
                   placeholder="Search"
                   placeholderTextColor="#666"
                />

                <TouchableOpacity style = {styles.searchButton}>
                    <Feather name = "search" size={20} color = "white" />
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle = {styles.categoriesContainer}>
                {categories.map((category, index) => (
                    <View key = {index} style = {styles.categoryItem}>
                        <Image source={category.icon} style = {styles.categoryIcon} />
                        <Text style = {styles.categoryText}>{category.name}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

export default AllCategories;