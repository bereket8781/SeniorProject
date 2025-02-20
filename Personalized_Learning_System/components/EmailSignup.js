import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import styles from "./signupStyle";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import bcrypt from "react-native-bcrypt";

const EmailSignup = ({ navigation }) => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [formError, setFormError] = useState("");
  const [isTermsChecked, setTermsChecked] = useState(false);
  const [isUpdatesChecked, setUpdatesChecked] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const handleContinue = async () => {
    setFormError("");

    if (!fullname || !email || !password) {
      setFormError("Please fill in all required fields.");
      return;
    }

    if (password.length < 8) {
      setPasswordError("Password must contain at least 8 characters.");
      return;
    }

    setPasswordError("");

    try {

      const salt = bcrypt.genSaltSync(10); 
      const hashedPassword = bcrypt.hashSync(password, salt); 
      //const isPasswordValid = bcrypt.compareSync(inputPassword, hashedPassword);
   
      await addDoc(collection(db, "Users"), {
        fullname,
        email,
        password: hashedPassword, 
        updates: isUpdatesChecked,
        termsAccepted: isTermsChecked,
      });
  
      navigation.navigate("ProfileCompletion", {
        email, // Pass the email
        password, // Pass the password
      });
    } catch (error) {
      console.error("Error adding document: ", error);
      setFormError("Failed to save data. Please try again.");
    }

  };

  return (

      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Enter your information</Text>

        <Text style={styles.subtitle}>Full Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor="#A9A9A9"
          onChangeText={setFullname}
          value={fullname}
        />

        <Text style={styles.subtitle}>Email Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          placeholderTextColor="#A9A9A9"
          onChangeText={setEmail}
          value={email}
          keyboardType="email-address"
        />

        <Text style={styles.subtitle}>Create Password</Text>
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

        <Text style={styles.subtitle}>Confirm Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Confirm Password"
            placeholderTextColor="#A9A9A9"
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

        {formError ? (
          <Text style={styles.errorText}>{formError}</Text>
        ) : null}

        {/* Terms & Conditions Checkbox */}
        <TouchableOpacity
          style={styles.checkboxContainer}
          onPress={() => setTermsChecked(!isTermsChecked)}
        >
          <Ionicons
            name={isTermsChecked ? "checkbox" : "square-outline"}
            size={20}
            color="#A9A9A9"
          />
          <Text style={styles.checkboxText}>
            I agree to EduConnect's{" "}
            <Text style={styles.linkText}>Terms & Conditions</Text>
          </Text>
        </TouchableOpacity>

        {/* Updates Checkbox */}
        <TouchableOpacity
          style={styles.checkboxContainer}
          onPress={() => setUpdatesChecked(!isUpdatesChecked)}
        >
          <Ionicons
            name={isUpdatesChecked ? "checkbox" : "square-outline"}
            size={20}
            color="#A9A9A9"
          />
          <Text style={styles.checkboxText}>
            I'd like to receive reports on my learning & occasional updates on
            learning opportunities from EduConnect
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.continueButton}
          onPress={handleContinue}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
        </ScrollView>
      </View>
  
  );
};

export default EmailSignup;
