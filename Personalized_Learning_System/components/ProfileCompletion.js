import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  ActivityIndicator,
  Alert,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";
import styles from "./completeproStyles";
import { db, auth } from "../firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";

const ProfileCompletion = ({ route, navigation }) => {
  const { email, password } = route.params;
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [birthdate, setBirthdate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || birthdate;
    setShowDatePicker(false);
    setBirthdate(currentDate);
  };

  const openImagePicker = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access media library is required!");
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  const convertImageToBase64 = async (uri) => {
    try {
      const response = await fetch(uri);
      const blob = await response.blob();
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
    } catch (error) {
      console.error("Error converting image to Base64:", error);
      throw error;
    }
  };

  const handleCreateAccount = async () => {
    setError("");

    if (!username || !gender) {
      setError("Username and Gender are required fields.");
      return;
    }

    try {
      setUploading(true);

      // Convert profile image to Base64
      let profileImageBase64 = null;
      if (profileImage) {
        profileImageBase64 = await convertImageToBase64(profileImage);
      }

      // Create user account
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      // Send verification email
      await sendEmailVerification(userCredential.user);

      // Save user data to Firestore
      const userId = userCredential.user.uid;
      await setDoc(doc(db, "users", userId), {
        username,
        email,
        phoneNumber,
        gender,
        birthdate: birthdate.toISOString(),
        profileImage: profileImageBase64,
        emailVerified: false,
        createdAt: new Date().toISOString()
      });

      // Show success alert
      Alert.alert(
        "Verify Account Creation",
        "A verification email has been sent to your email address. Please verify your email to continue.",
        [
          {
            text: "OK",
            onPress: () => navigation.navigate("LearningAssessmentForm")
          }
        ]
      );
    } catch (error) {
      console.error("Account creation failed:", error);
      setError(error.message);
      Alert.alert("Error", error.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>

        <Text style={styles.title}>Complete your profile</Text>
        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        <Text style={styles.subtitle}>
          Don't worry, only you can see your personal data. No one else will be
          able to see it.
        </Text>

        <TouchableOpacity
          style={styles.profilePictureContainer}
          onPress={openImagePicker}
        >
          {profileImage ? (
            <Image
              source={{ uri: profileImage }}
              style={styles.profilePicture}
            />
          ) : (
            <Ionicons name="person-circle-outline" size={100} color="#ccc" />
          )}
          <Ionicons
            name="camera"
            size={20}
            color="blue"
            style={styles.cameraIcon}
          />
        </TouchableOpacity>

        <Text style={styles.label}>User Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your username"
          value={username}
          onChangeText={setUsername}
        />

        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter phone number"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
        />

        <Text style={styles.label}>Birth Date</Text>
        <TouchableOpacity
          style={styles.inputDate}
          onPress={() => setShowDatePicker(true)}
        >
          <Text>{birthdate.toDateString()}</Text>
        </TouchableOpacity>

        {showDatePicker && (
          <DateTimePicker
            value={birthdate}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        )}

        <Text style={styles.label}>Gender</Text>
        <View style={styles.dropdown}>
          <Picker
            selectedValue={gender}
            onValueChange={(itemValue) => setGender(itemValue)}
            mode="dropdown"
          >
            <Picker.Item label="Select" value="" />
            <Picker.Item label="Male" value="male" />
            <Picker.Item label="Female" value="female" />
          </Picker>
        </View>

        <TouchableOpacity
          style={styles.createButton}
          onPress={handleCreateAccount}
          disabled={uploading}
        >
          {uploading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.createButtonText}>Create Account</Text>
          )}
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ProfileCompletion;