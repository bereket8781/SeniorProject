import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { launchImageLibrary } from "react-native-image-picker";
import { Ionicons } from "@expo/vector-icons";
import styles from "./profileStyles";
import { db, auth } from "../firebaseConfig"; 
import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";

const ProfileCompletion = ({ route, navigation }) => {
  const { email, password } = route.params;
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [birthdate, setBirthdate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [error, setError] = useState("");

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || birthdate;
    setShowDatePicker(false);
    setBirthdate(currentDate);
  };

  const openImagePicker = () => {
    launchImageLibrary({ mediaType: "photo" }, (response) => {
      if (response.assets) {
        setProfileImage(response.assets[0].uri);
      }
    });
  };

  const handleCreateAccount = async () => {
    setError("");

    if (!username || !gender) {
      setError("Username and Gender are required fields.");
      return;
    }

    try {
      // Create user in Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const userId = userCredential.user.uid;

      // Save additional data to Firestore
      await setDoc(doc(db, "users", userId), {
        username,
        email,
        phoneNumber,
        gender,
        birthdate: birthdate.toISOString(),
        profileImage,
      });

     // Alert.alert("Success", "Account created successfully!");
      navigation.navigate("LearningAssessmentForm");
    } catch (error) {
      setError(error.message);
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
              source={require("../assets/images/faceAcc.png")}
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
          style={styles.input}
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
        >
          <Text style={styles.createButtonText}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ProfileCompletion;
