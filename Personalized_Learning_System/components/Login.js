import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import styles from "./loginStyles";
import { Ionicons } from "@expo/vector-icons";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebaseConfig";

const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [passwordError, setPasswordError] = useState("");

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
      // Step 1: Fetch user data from the "users" collection using the username
      const usersCollection = collection(db, "users");
      const userQuery = query(usersCollection, where("username", "==", username));
      const userQuerySnapshot = await getDocs(userQuery);

      if (userQuerySnapshot.empty) {
        Alert.alert("User Not Found", "The username does not exist.");
        return;
      }

      let userData = null;
      userQuerySnapshot.forEach((doc) => {
        userData = doc.data();
      });

      console.log("User data from 'users' collection:", userData); // Debugging

      // Step 2: Fetch profile data from the "Users" collection using the email
      const UsersCollection = collection(db, "Users");
      const profileQuery = query(UsersCollection, where("email", "==", userData.email));
      const profileQuerySnapshot = await getDocs(profileQuery);

      if (profileQuerySnapshot.empty) {
        Alert.alert("Profile Not Found", "No profile data found for this user.");
        return;
      }

      let profileData = null;
      profileQuerySnapshot.forEach((doc) => {
        profileData = doc.data();
      });

      console.log("Profile data from 'Users' collection:", profileData); // Debugging

      // Step 3: Fetch profileImage from the "users" collection using the email
      const profileImageQuery = query(usersCollection, where("email", "==", userData.email));
      const profileImageQuerySnapshot = await getDocs(profileImageQuery);

      if (profileImageQuerySnapshot.empty) {
        Alert.alert("Profile Image Not Found", "No profile image found for this user.");
        return;
      }

      let profileImageData = null;
      profileImageQuerySnapshot.forEach((doc) => {
        profileImageData = doc.data();
      });

      console.log("Profile image data from 'users' collection:", profileImageData); // Debugging

      // Step 4: Navigate to HomePage with user data
      navigation.navigate("HomePage", {
        username: userData.username,
        profileImage: profileImageData.profileImage || "https://via.placeholder.com/150", // Fallback image
        fullname: profileData.fullname || "User", // Fallback name
      });
    } catch (error) {
      console.error("Error fetching user data:", error); // Debugging
      Alert.alert("Error", "Something went wrong. Please try again later.");
    }
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
          onPress={() => Alert.alert("Google Login", "Google login not implemented yet.")}
        >
          <Image
            source={require("../assets/images/googleIcon.jpg")}
            style={styles.socialIcon}
          />
          <Text style={styles.socialButtonText}>Log in with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.socialButton}
          onPress={() => Alert.alert("Facebook Login", "Facebook login not implemented yet.")}
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
      </View>
    </ScrollView>
  );
};

export default Login;