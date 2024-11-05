import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import styles from './styles'

const SplashScreen = ({ navigation }) => {

    const swiperRef = React.useRef(null);

    const handleSkip = () => {
        if (swiperRef.current) {
            swiperRef.current.stopAutoplay();
        }
        navigation.navigate('Home');
    };

    return (
        <Swiper
           ref={swiperRef}
           loop = { true }
           dot = { <View style = { StyleSheet.dot } />}
           activeDot = { <View style = { StyleSheet.activeDot } />}
           autoplay={true}
           autoplayTimeout={2}  
           autoplayDirection={true}
        >
            <View style = { styles.splashContainer }>
                <TouchableOpacity style={styles.skipButton} onPress={() => navigation.navigate('Home')}>
                  <Text style={styles.skipText}>Skip</Text>
                </TouchableOpacity>
                <Image source = { require ('../assets/images/SplashScreen.png')} style = { styles.image } />
                <Text style = { styles.title }>Better way to learning is calling you!</Text>
                <Text style = { styles.subtitle}>Discover the best method to improve your learning experience.</Text>
                <AuthButtons navigation = { navigation } />
            </View>

            <View style = { styles.splashContainer }>
                <TouchableOpacity style={styles.skipButton} onPress={() => navigation.navigate('Home')}>
                  <Text style={styles.skipText}>Skip</Text>
                </TouchableOpacity>
                <Image source = { require ('../assets/images/SplashScreen.png')} style = { styles.image } />
                <Text style = { styles.title }>Find yourself by doing what you do</Text>
                <Text style = { styles.subtitle}>Engage with contents tailered specially for you.</Text>
                <AuthButtons navigation = { navigation } />
            </View>

            <View style = { styles.splashContainer }>
            <TouchableOpacity 
                    style={styles.skipButton} 
                    onPress={handleSkip}
                >
                    <Text style={styles.skipText}>Skip</Text>
                </TouchableOpacity>
                <Image source = { require ('../assets/images/SplashScreen.png')} style = { styles.image } />
                <Text style = { styles.title }>Its not just learning!</Text>
                <Text style = { styles.subtitle}>Commit to your goal with us, and we'll help you get there.</Text>
                <AuthButtons navigation = { navigation } />
            </View>
        </Swiper>
    );
};

// ... existing code ...

const AuthButtons = ({ navigation }) => {
    const [selectedButton, setSelectedButton] = React.useState('register');

    const handleButtonChange = () => {
        setSelectedButton(selectedButton === 'register' ? 'login' : 'register');
    };

    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity
                style={[
                    styles.button,
                    styles.registerButton,
                    { backgroundColor: selectedButton === 'register' ? '#4A90E2' : '#FFFFFF' }
                ]}
                onPress={() => {
                    handleButtonChange();
                    navigation.navigate('Register');
                }}
            >
                <Text style={[
                    styles.buttonText,
                    { color: selectedButton === 'register' ? '#FFFFFF' : '#4A90E2' }
                ]}>Register</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[
                    styles.button,
                    { backgroundColor: selectedButton === 'login' ? '#4A90E2' : '#FFFFFF' }
                ]}
                onPress={() => {
                    handleButtonChange();
                    navigation.navigate('Login');
                }}
            >
                <Text style={[
                    styles.buttonText,
                    { color: selectedButton === 'login' ? '#FFFFFF' : '#4A90E2' }
                ]}>Log In</Text>
            </TouchableOpacity>
        </View>
    );
};

// ... existing code ...

export default SplashScreen;