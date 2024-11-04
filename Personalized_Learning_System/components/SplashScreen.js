import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

const SplashScreen = ({ navigation }) => {
    return (
        <Swiper
           loop = { false }
           dot = { <View style = { StyleSheet.dot } />}
           activeDot = { <View style = { StyleSheet.activeDot } />}
        >
            <View style = { styles.splashContainer }>
                <Image source = { require ('./assets/images/SplashScreen.png')} style = { styles.image } />
                <Text style = { styles.title }>Better way to learning is calling you!</Text>
                <Text style = { styles.subtitle}>Discover the best method to improve your learning experience.</Text>
                <AuthButtons navigation = { navigation } />
            </View>

            <View style = { styles.splashContainer }>
                <Image source = { require ('./assets/images/SplashScreen.png')} style = { styles.image } />
                <Text style = { styles.title }>Find yourself by doing what you do</Text>
                <Text style = { styles.subtitle}>Engage with contents tailered specially for you.</Text>
                <AuthButtons navigation = { navigation } />
            </View>

            <View style = { styles.splashContainer }>
                <Image source = { require ('./assets/images/SplashScreen.png')} style = { styles.image } />
                <Text style = { styles.title }>Its not just learning!</Text>
                <Text style = { styles.subtitle}>Commit to your goal with us, and we'll help you get there.</Text>
                <AuthButtons navigation = { navigation } />
            </View>
        </Swiper>
    );
};

const AuthButtons = ( { navigation } ) => (
    <View style = { styles.buttonContainer }>
        <TouchableOpacity
           style = { styles.registerButton}
           onPress= { () => navigation.navigate ('Register')}
           >
            <Text style = {styles.buttonText}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity
           style = { styles.loginButton}
           onPress= { () => navigation.navigate('Login')}
           >
            <Text style = {styles.buttonText}>Log In</Text>
        </TouchableOpacity>
    </View>
);

export default SplashScreen;