import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import Svg, { Path } from 'react-native-svg';
import styles from './styles';

const SplashScreen = ({ navigation }) => {


    const swiperRef = React.useRef(null);
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const handleSkip = () => {
        if (swiperRef.current) {
            swiperRef.current.stopAutoplay();
        }
        navigation.navigate('Home');
    };

    const handleArrowClick = (isLeft) => {
        if (swiperRef.current) {
            swiperRef.current.scrollBy(isLeft ? -1 : 1);
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.skipButton} 
                onPress={handleSkip}
            >
                <Text style={styles.skipText}>Skip</Text>
            </TouchableOpacity>

            <Swiper
                ref={swiperRef}
                loop={true}
                autoplay={true}
                autoplayTimeout={3}
                showsButtons={false}
                onIndexChanged={(index) => setCurrentIndex(index)}
                style={styles.swiperContainer}
            >
                <View style={styles.slideContainer}>
                    <View style={styles.arrowWrapper}>
                        <TouchableOpacity onPress={() => handleArrowClick(true)}>
                            <View style={styles.arrowButton}>
                                <Svg height="50" width="40" viewBox="0 0 24 24">
                                    <Path
                                        d="M15 18l-6-6 6-6"
                                        stroke="#4A90E2"
                                        strokeWidth="2"
                                        fill="none"
                                    />
                                </Svg>
                            </View>
                        </TouchableOpacity>

                        <View style={styles.imageContainer}>
                            <Image 
                                source={require('../assets/images/SplashScreen.png')} 
                                style={styles.image} 
                            />
                        </View>

                        <TouchableOpacity onPress={() => handleArrowClick(false)}>
                            <View style={styles.arrowButton}>
                                <Svg height="50" width="40" viewBox="0 0 24 24">
                                    <Path
                                        d="M9 18l6-6-6-6"
                                        stroke="#4A90E2"
                                        strokeWidth="2"
                                        fill="none"
                                    />
                                </Svg>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.title}>Better way to learning is calling you!</Text>
                    <Text style={styles.subtitle}>Discover the best method to improve your learning experience.</Text>
                </View>

                <View style={styles.slideContainer}>
                    <View style={styles.arrowWrapper}>
                        <TouchableOpacity onPress={() => handleArrowClick(true)}>
                            <View style={styles.arrowButton}>
                                <Svg height="50" width="40" viewBox="0 0 24 24">
                                    <Path
                                        d="M15 18l-6-6 6-6"
                                        stroke="#4A90E2"
                                        strokeWidth="2"
                                        fill="none"
                                    />
                                </Svg>
                            </View>
                        </TouchableOpacity>

                        <View style={styles.imageContainer}>
                            <Image 
                                source={require('../assets/images/SplashScreen.png')} 
                                style={styles.image} 
                            />
                        </View>

                        <TouchableOpacity onPress={() => handleArrowClick(false)}>
                            <View style={styles.arrowButton}>
                                <Svg height="50" width="40" viewBox="0 0 24 24">
                                    <Path
                                        d="M9 18l6-6-6-6"
                                        stroke="#4A90E2"
                                        strokeWidth="2"
                                        fill="none"
                                    />
                                </Svg>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.title}>Find yourself by doing what you do</Text>
                    <Text style={styles.subtitle}>Engage with contents tailered specially for you.</Text>
                </View>

                <View style={styles.slideContainer}>
                    <View style={styles.arrowWrapper}>
                        <TouchableOpacity onPress={() => handleArrowClick(true)}>
                            <View style={styles.arrowButton}>
                                <Svg height="50" width="40" viewBox="0 0 24 24">
                                    <Path
                                        d="M15 18l-6-6 6-6"
                                        stroke="#4A90E2"
                                        strokeWidth="2"
                                        fill="none"
                                    />
                                </Svg>
                            </View>
                        </TouchableOpacity>

                        <View style={styles.imageContainer}>
                            <Image 
                                source={require('../assets/images/SplashScreen.png')} 
                                style={styles.image} 
                            />
                        </View>

                        <TouchableOpacity onPress={() => handleArrowClick(false)}>
                            <View style={styles.arrowButton}>
                                <Svg height="50" width="40" viewBox="0 0 24 24">
                                    <Path
                                        d="M9 18l6-6-6-6"
                                        stroke="#4A90E2"
                                        strokeWidth="2"
                                        fill="none"
                                    />
                                </Svg>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.title}>Its not just learning!</Text>
                    <Text style={styles.subtitle}>Commit to your goal with us, and we'll help you get there.</Text>
                </View>
            </Swiper>

{/*             <View style={styles.dotsContainer}>
                {[0, 1, 2].map((index) => (
                    <View 
                        key={index}
                        style={[
                            styles.dot,
                            currentIndex === index && styles.activeDot
                        ]}
                    />
                ))}
            </View> */}

            <View style={styles.fixedButtonsContainer}>
                <AuthButtons navigation={navigation} />
            </View>
        </View>
    );
};




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




export default SplashScreen;