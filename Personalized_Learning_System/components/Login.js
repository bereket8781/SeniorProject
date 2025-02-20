import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Modal,
  ScrollView,
  Alert,
} from "react-native";
import styles from "./loginStyles";
import { Ionicons } from "@expo/vector-icons";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig"; 

const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [isGoogleModalVisible, setIsGoogleModalVisible] = useState(false);
  const [isFacebookModalVisible, setIsFacebookModalVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const handleLogin = async () => {
    if (password.length < 8) {
      setPasswordError("Password should include at least 8 characters");
      return;
    } else {
      setPasswordError("");
    }

    try {
      const usersCollection = collection(db, "users");
      const querySnapshot = await getDocs(usersCollection);

      let userFound = false;

      querySnapshot.forEach((doc) => {
        const userData = doc.data();
        if (userData.username === username) {
          userFound = true;
          navigation.navigate("HomePage", { username});
/*           if (userData.password === password) { // Hash passwords in production
            navigation.navigate("HomePage");
          } else {
            Alert.alert("Login Failed", "Incorrect password. Please try again.");
          } */
        }
      });

      if (!userFound) {
        Alert.alert("User Not Found", "The username does not exist.");
      }
    } catch (error) {
      console.error("Error fetching users:", error);
      Alert.alert("Error", "Something went wrong. Please try again later.");
    }
  };

  const toggleGoogleModal = () => {
    setIsGoogleModalVisible(!isGoogleModalVisible);
  };

  const toggleFacebookModal = () => {
    setIsFacebookModalVisible(!isFacebookModalVisible);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome back!</Text>
        <Text style={styles.subtitle}>Sign in to continue!</Text>

        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#A9A9A9"
          onChangeText={setUsername}
          value={username}
        />

        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Password"
            placeholderTextColor="#A9A9A9"
            onChangeText={setPassword}
            value={password}
            secureTextEntry={!isPasswordVisible}
          />
          <TouchableOpacity
            style={styles.eyeIconContainer}
            onPress={togglePasswordVisibility}
          >
            <Ionicons
              name={isPasswordVisible ? "eye" : "eye-off"}
              size={20}
              color="#A9A9A9"
            />
          </TouchableOpacity>
        </View>

        {passwordError ? (
          <Text style={styles.errorText}>{passwordError}</Text>
        ) : null}

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Log In</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("ForgotPassword")}
          style={styles.forgotPassword}
        >
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>

        <View style={styles.orContainer}>
          <View style={styles.orLine} />
          <Text style={styles.orText}>OR</Text>
          <View style={styles.orLine} />
        </View>

        <TouchableOpacity
          style={styles.socialButton}
          onPress={toggleGoogleModal}
        >
          <Image
            source={require("../assets/images/googleIcon.jpg")}
            style={styles.socialIcon}
          />
          <Text style={styles.socialButtonText}>Log in with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.socialButton}
          onPress={toggleFacebookModal}
        >
          <Image
            source={require("../assets/images/facebookIcon.jpg")}
            style={styles.socialIcon}
          />
          <Text style={styles.socialButtonText}>Log in with Facebook</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        {/* Google Login Modal */}
        <Modal
          transparent={true}
          visible={isGoogleModalVisible}
          animationType="fade"
          onRequestClose={toggleGoogleModal}
        >
          <View style={styles.modalBackground}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>Choose an account</Text>
              <Text style={styles.modalSubtitle}>
                To continue to EduConnect
              </Text>

              <View style={styles.accountOption}>
                <Image
                  source={require("../assets/images/googleAcc.png")}
                  style={styles.socialIcon}
                />
                <View style={styles.chooseAccount}>
                  <Text style={styles.accountName}>Account Name</Text>
                  <Text style={styles.accountEmail}>email@gmail.com</Text>
                </View>
              </View>

              <TouchableOpacity style={styles.useAnotherButton}>
                <Image
                  source={require("../assets/images/otherAcc.jpg")}
                  style={styles.socialIcon}
                />
                <Text style={styles.useAnotherText}>Use another account</Text>
              </TouchableOpacity>

              <Text style={styles.modalFooter}>
                To continue, Google will share your name, email address, and
                profile picture with EduConnect.
              </Text>

              <TouchableOpacity
                style={styles.closeButton}
                onPress={toggleGoogleModal}
              >
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* Facebook Login Modal */}
        <Modal
          transparent={true}
          visible={isFacebookModalVisible}
          animationType="slide"
          onRequestClose={toggleFacebookModal}
        >
          <View style={styles.modalBackground}>
            <View style={styles.modalContainer}>
              <Image
                source={require("../assets/images/faceAcc.png")}
                style={styles.faceIcon}
              />
              <Text style={styles.modalText}>
                You previously logged in to EduConnect with Facebook as @acc123.
              </Text>
              <Text style={styles.modalText}>Would you like to continue?</Text>

              <TouchableOpacity style={styles.continueButton}>
                <Text style={styles.continueButtonText}>Continue</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={toggleFacebookModal}>
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>

              <Text style={styles.modalFooter}>
                By continuing, EduConnect will receive ongoing access to the
                information you share on Facebook.
              </Text>
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
};

export default Login;
