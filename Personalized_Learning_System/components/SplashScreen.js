import styles from "./splashStyles";
import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import { Svg, Rect, Circle, Path } from "react-native-svg";

const { width } = Dimensions.get("window");

const slides = [
  {
    title: "Better way to learning is calling you!",
    description: "Impact! starts creative portfolio site at rule",
    svg: (
      <Svg viewBox="0 0 400 400" width="100%" height="100%">
        <Rect x="50" y="320" width="300" height="10" fill="#E1E4E8" rx="2" />
        <Circle cx="320" cy="100" r="15" fill="#FFB6C1" />
        <Path
          d="M100 150 C150 150, 200 100, 250 150"
          stroke="#4169E1"
          strokeWidth="40"
          fill="none"
        />
        <Rect x="150" y="200" width="100" height="120" fill="#FF69B4" rx="10" />
        <Circle cx="80" cy="280" r="10" fill="#4169E1" />
        <Path d="M180 150 L220 150 L200 120 Z" fill="#4169E1" />
      </Svg>
    ),
  },
  {
    title: "Find yourself by doing whatever you do!",
    description: "Impact! starts creative portfolio site at rule",
    svg: (
      <Svg viewBox="0 0 400 400" width="100%" height="100%">
        <Rect x="100" y="100" width="200" height="150" fill="#E1E4E8" rx="10" />
        <Circle cx="200" cy="250" r="60" fill="#FF69B4" />
        <Rect x="150" y="200" width="100" height="20" fill="#4169E1" />
        <Path
          d="M180 150 Q200 180 220 150"
          stroke="#4169E1"
          strokeWidth="8"
          fill="none"
        />
        <Circle cx="350" cy="80" r="20" fill="#FFB6C1" />
        <Circle cx="50" cy="320" r="15" fill="#4169E1" />
      </Svg>
    ),
  },
  {
    title: "It's not just learning, It's a promise!",
    description: "Impact! starts creative portfolio site at rule",
    svg: (
      <Svg viewBox="0 0 400 400" width="100%" height="100%">
        <Circle cx="200" cy="200" r="100" fill="#FF69B4" />
        <Rect x="150" y="150" width="100" height="100" fill="#4169E1" />
        <Circle cx="320" cy="120" r="30" fill="#FFB6C1" />
        <Path
          d="M100 300 Q200 250 300 300"
          stroke="#FFD700"
          strokeWidth="20"
          fill="none"
        />
        <Circle cx="80" cy="100" r="25" fill="#4169E1" />
      </Svg>
    ),
  },
];

const SplashScreen = ({ navigation }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedButton, setSelectedButton] = useState("register");

  const handleButtonChange = () => {
    setSelectedButton((prev) => (prev === "register" ? "login" : "register"));
  };

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <View style={styles.container}>
      <View style={styles.skipContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={styles.skipButton}
        >
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.swiperContainer}>
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            scrollEnabled={false}
            contentOffset={{ x: currentSlide * width, y: 0 }}
            style={styles.swiperContent}
          >
            {slides.map((slide, index) => (
              <View key={index} style={styles.slide}>
                {slide.svg}
              </View>
            ))}
          </ScrollView>
          <TouchableOpacity
            style={[styles.navButton, styles.navButtonLeft]}
            onPress={prevSlide}
          >
            <Text style={styles.navButtonText}>{"<"}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.navButton, styles.navButtonRight]}
            onPress={nextSlide}
          >
            <Text style={styles.navButtonText}>{">"}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{slides[currentSlide].title}</Text>
          <Text style={styles.description}>
            {slides[currentSlide].description}
          </Text>
          <View style={styles.dotsContainer}>
            {slides.map((_, index) => (
              <TouchableOpacity
                key={index}
                style={[styles.dot, currentSlide === index && styles.activeDot]}
                onPress={() => goToSlide(index)}
              />
            ))}
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[
                styles.button,
                styles.registerButton,
                {
                  backgroundColor:
                    selectedButton === "register" ? "#4A90E2" : "#FFFFFF",
                },
              ]}
              onPress={() => {
                handleButtonChange();
                navigation.navigate("Register");
              }}
            >
              <Text
                style={[
                  styles.buttonText,
                  {
                    color:
                      selectedButton === "register" ? "#FFFFFF" : "#4A90E2",
                  },
                ]}
              >
                Register
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.button,
                {
                  backgroundColor:
                    selectedButton === "login" ? "#4A90E2" : "#FFFFFF",
                },
              ]}
              onPress={() => {
                handleButtonChange();
                navigation.navigate("Login");
              }}
            >
              <Text
                style={[
                  styles.buttonText,
                  { color: selectedButton === "login" ? "#FFFFFF" : "#4A90E2" },
                ]}
              >
                Log In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SplashScreen;

{
  /* import React, { useState, useEffect, useCallback } from "react"
import { View, Text, TouchableOpacity, ScrollView, Dimensions } from "react-native"
import { Svg, Rect, Circle, Path } from "react-native-svg"

const { width } = Dimensions.get('window')

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  skipContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 16,
  },
  skipButton: {
    padding: 8,
  },
  skipText: {
    fontSize: 14,
    color: '#2563EB',
  },
  swiperContainer: {
    height: 300,
    maxWidth: width,
  },
  swiperContent: {
    height: '100%',
  },
  slide: {
    width: width,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navButton: {
    position: 'absolute',
    top: '50%',
    zIndex: 10,
  },
  navButtonLeft: {
    left: 10,
  },
  navButtonRight: {
    right: 10,
  },
  navButtonText: {
    fontSize: 24,
    color: '#000000',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
  textContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 16,
    textAlign: 'center',
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#E5E7EB',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#2563EB',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 32,
  },
  registerButton: {
    width: '100%',
    padding: 12,
    backgroundColor: '#2563EB',
    borderRadius: 4,
    alignItems: 'center',
  },
  registerText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginButton: {
    marginTop: 16,
  },
  loginText: {
    fontSize: 14,
    color: '#2563EB',
  },
}

const slides = [
  {
    title: "Better way to learning is calling you!",
    description: "Impact! starts creative portfolio site at rule",
    svg: (
      <Svg viewBox="0 0 400 400" width="100%" height="100%">
        <Rect x="50" y="320" width="300" height="10" fill="#E1E4E8" rx="2" />
        <Circle cx="320" cy="100" r="15" fill="#FFB6C1" />
        <Path
          d="M100 150 C150 150, 200 100, 250 150"
          stroke="#4169E1"
          strokeWidth="40"
          fill="none"
        />
        <Rect x="150" y="200" width="100" height="120" fill="#FF69B4" rx="10" />
        <Circle cx="80" cy="280" r="10" fill="#4169E1" />
        <Path
          d="M180 150 L220 150 L200 120 Z"
          fill="#4169E1"
        />
      </Svg>
    ),
  },
  {
    title: "Find yourself by doing whatever you do!",
    description: "Impact! starts creative portfolio site at rule",
    svg: (
      <Svg viewBox="0 0 400 400" width="100%" height="100%">
        <Rect x="100" y="100" width="200" height="150" fill="#E1E4E8" rx="10" />
        <Circle cx="200" cy="250" r="60" fill="#FF69B4" />
        <Rect x="150" y="200" width="100" height="20" fill="#4169E1" />
        <Path
          d="M180 150 Q200 180 220 150"
          stroke="#4169E1"
          strokeWidth="8"
          fill="none"
        />
        <Circle cx="350" cy="80" r="20" fill="#FFB6C1" />
        <Circle cx="50" cy="320" r="15" fill="#4169E1" />
      </Svg>
    ),
  },
  {
    title: "It's not just learning, It's a promise!",
    description: "Impact! starts creative portfolio site at rule",
    svg: (
      <Svg viewBox="0 0 400 400" width="100%" height="100%">
        <Circle cx="200" cy="200" r="100" fill="#FF69B4" />
        <Rect x="150" y="150" width="100" height="100" fill="#4169E1" />
        <Circle cx="320" cy="120" r="30" fill="#FFB6C1" />
        <Path
          d="M100 300 Q200 250 300 300"
          stroke="#FFD700"
          strokeWidth="20"
          fill="none"
        />
        <Circle cx="80" cy="100" r="25" fill="#4169E1" />
      </Svg>
    ),
  },
]

export default function SplashScreen({ onLogin, onRegister }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [selectedButton, setSelectedButton] = React.useState('register');

  const handleButtonChange = () => {
      setSelectedButton(selectedButton === 'register' ? 'login' : 'register');
  };

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }, [])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <View style={styles.container}>
      <View style={styles.skipContainer}>
        <TouchableOpacity onPress={onLogin} style={styles.skipButton}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.swiperContainer}>
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            scrollEnabled={false}
            contentOffset={{ x: currentSlide * width, y: 0 }}
            style={styles.swiperContent}
          >
            {slides.map((slide, index) => (
              <View key={index} style={styles.slide}>
                {slide.svg}
              </View>
            ))}
          </ScrollView>
          <TouchableOpacity
            style={[styles.navButton, styles.navButtonLeft]}
            onPress={prevSlide}
          >
            <Text style={styles.navButtonText}>{"<"}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.navButton, styles.navButtonRight]}
            onPress={nextSlide}
          >
            <Text style={styles.navButtonText}>{">"}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{slides[currentSlide].title}</Text>
          <Text style={styles.description}>{slides[currentSlide].description}</Text>
          <View style={styles.dotsContainer}>
            {slides.map((_, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.dot,
                  currentSlide === index && styles.activeDot
                ]}
                onPress={() => goToSlide(index)}
              />
            ))}
          </View>
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
                    styles.registerText,
                    { color: selectedButton === 'register' ? '#FFFFFF' : '#4A90E2' }
                ]}>Register</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[
                    styles.button,
                    styles.loginButton,
                    { backgroundColor: selectedButton === 'login' ? '#4A90E2' : '#FFFFFF' }
                ]}
                onPress={() => {
                    handleButtonChange();
                    navigation.navigate('Login');
                }}
            >
                <Text style={[
                    styles.loginText,
                    { color: selectedButton === 'login' ? '#FFFFFF' : '#4A90E2' }
                ]}>Log In</Text>
            </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}  */
}
