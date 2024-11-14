import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from './filterStyles';

const Filter = ({ navigation }) => {

    const [filters, setFilters] = useState({
        subCategories: ['Web Development'],
        levels: ['Beginner', 'Intermediate'],
        price: ['Paid'],
        features: [],
        rating: [],
        videoDuration: [],
    });

    const toggleFilter = (category, item) => {
        setFilters(prevFilters => {
            const updatedCategory = prevFilters[category].includes(item)
            ? prevFilters[category].filter(i => i !== item)
            : [...prevFilters[category], item];
            return { ...prevFilters, [category]: updatedCategory };
        });
    };

    const renderCheckbox = (category, item) => {
        const isSelected = filters[category].includes(item);
        return (
            <TouchableOpacity
              style = {styles.checkboxContainer}
              onPress={() => toggleFilter(category, item)}
            >
                <View style = {[styles.checkbox, isSelected && styles.checkboxSelected]}>
                    {isSelected && <Feather name = "check" size={18} color = "#FFFFFF" />}
                </View>
                <Text style = {styles.checkboxLabel}>{item}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style = {styles.container}>
            <View style = {styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('HomePage')}>
                    <Feather name = "arrow-left" size={24} color = "1A1A1A" />
                </TouchableOpacity>
                <Text style = {styles.headerTitle}>Filter</Text>
                <TouchableOpacity>
                    <Text style = {styles.clearButton}>Clear</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style = {styles.content}>
                <View style = {styles.section}>
                    <Text style = {styles.sectionTitle}>Sub Categories:</Text>
                    {renderCheckbox('subCategories', '3D Design')}
                    {renderCheckbox('subCategories', 'Web Development')}
                    {renderCheckbox('subCategories', '3D Animation')}
                    {renderCheckbox('subCategories', 'Graphic Design')}
                    {renderCheckbox('subCategories', 'SEO & Marketing')}
                    {renderCheckbox('subCategories', 'Arts & Humanities')}
                    {renderCheckbox('subCategories', 'Data structure & Algorithms')}
                </View>

                <View style = {styles.section}>
                    <Text style = {styles.sectionTitle}>Levels:</Text>
                    {renderCheckbox('levels', 'All Levels')}
                    {renderCheckbox('levels', 'Beginner')}
                    {renderCheckbox('levels', 'Intermediate')}
                    {renderCheckbox('levels', 'Expert')}
                </View>

                <View style ={styles.section}>
                    <Text style = {styles.sectionTitle}>Price:</Text>
                    {renderCheckbox('price', 'Paid')}
                    {renderCheckbox('price', 'Free')}
                </View>

                <View style = {styles.section}>
                    <Text style = {styles.sectionTitle}>Features:</Text>
                    {renderCheckbox('features', 'All Caption')}
                    {renderCheckbox('features', 'Quizzes')}
                    {renderCheckbox('features', 'CCoding Exercise')}
                    {renderCheckbox('features', 'Practice Tests')}
                </View>

                <View style = {styles.section}>
                    <Text style = {styles.sectionTitle}>Rating:</Text>
                    {renderCheckbox('rating', '4.5 & Above')}
                    {renderCheckbox('rating', '4.0 & Above')}
                    {renderCheckbox('rating', '3.5 & Above')}
                    {renderCheckbox('rating', '3.0 & Above')}
                </View>

                <View style = {styles.section}>
                    <Text style ={styles.sectionTitle}>Video Duration:</Text>
                    {renderCheckbox('videoDuration', '0-2 Hours')}
                    {renderCheckbox('videoDuration', '3-6 Hours')}
                    {renderCheckbox('videoDuration', '7-16 Hours')}
                    {renderCheckbox('videoDuration', '17+ Hours')}
                </View>
            </ScrollView>

            <TouchableOpacity style = {styles.applyButton} onPress={() => navigation.navigate('HomePage')}>
                <Text style = {styles.applyButtonText}>Apply</Text>
            </TouchableOpacity>
        </View>
    )
};

export default Filter;