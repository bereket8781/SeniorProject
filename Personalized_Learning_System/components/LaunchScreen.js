import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './launchStyles';

const LaunchScreen = ({ navigation }) => {
   useEffect (() => {
        const timer = setTimeout(() => {
            navigation.replace('SplashScreen');
        }, 9000);

        return () => clearTimeout(timer);
    }, [navigation]); 

    return (
        <View style = {styles.container}>
            <View style = {styles.content}>
                <Image
                    source={require('../assets/images/banner.png')}
                    style = {styles.puzzelPiece}
                    resizeMode="contain"
                />

                <Image 
                    source={require('../assets/images/logo.jpg')}
                    style = {styles.logo}
                    resizeMode="contain"
                />

                <Text style = {styles.title}>EduConnect</Text>

                <Text style = {styles.subtitle}>LEARN FROM HOME</Text>
            </View>
        </View>
    );
};

export default LaunchScreen;