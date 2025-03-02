import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
  ActivityIndicator,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { auth, db } from "../firebaseConfig";
import { query, collection, where, getDocs } from "firebase/firestore";
import styles from "./myproStyles";

const openImagePicker = async (setProfileImage) => {
  let permissionResult =
    await ImagePicker.requestMediaLibraryPermissionsAsync();

  if (permissionResult.granted === false) {
    alert("Permission to access media library is required!");
    return;
  }

  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  if (!result.canceled) {
    setProfileImage(result.assets[0].uri);
  }
};

const MyProfile = ({ navigation, route }) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [birthdate, setBirthdate] = useState(new Date());
  const [profileImage, setProfileImage] = useState("");
  const [fullname, setFullname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = auth.currentUser; // Get currently logged-in user
        if (user) {
          const email = user.email; // Use email as the common field
          if (email) {
            // Query the "users" collection for the document with the matching email
            const usersQuery = query(collection(db, "users"), where("email", "==", email));
            const usersQuerySnapshot = await getDocs(usersQuery);

            if (!usersQuerySnapshot.empty) {
              const userData = usersQuerySnapshot.docs[0].data();

              // Set all user data
              setProfileImage(userData.profileImage || "https://via.placeholder.com/150");
              setPhoneNumber(userData.phoneNumber || "");
              setEmail(userData.email || "");
              setGender(userData.gender || null);

              // Convert birthdate string to Date object (if stored as a string in Firestore)
              if (userData.birthdate) {
                setBirthdate(new Date(userData.birthdate));
              }
            }
          }
        }
      } catch (error) {
        // Handle error silently
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    const fetchFullname = async () => {
      try {
        const user = auth.currentUser; // Get currently logged-in user
        if (user) {
          const email = user.email; // Use email as the common field
          if (email) {
            // Query the "Users" collection for the document with the matching email
            const usersQuery = query(collection(db, "Users"), where("email", "==", email));
            const usersQuerySnapshot = await getDocs(usersQuery);

            if (!usersQuerySnapshot.empty) {
              const usersData = usersQuerySnapshot.docs[0].data();
              setFullname(usersData.fullname || ""); // Set full name
            }
          }
        }
      } catch (error) {
        // Handle error silently
      }
    };

    fetchFullname();
  }, []);

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || birthdate;
    setShowDatePicker(false);
    setBirthdate(currentDate);
  };

  const handleUpdateProfile = () => {
    // Handle profile update silently
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0056FF" />
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.navigate("ProfilePage")}
          >
            <Feather name="arrow-left" color="#000000" size={24} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Your Profile</Text>
        </View>

        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <TouchableOpacity
            style={styles.profilePictureContainer}
            onPress={() => openImagePicker(setProfileImage)}
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

          <View style={styles.formContainer}>
            {/* Name */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Name</Text>
              <TextInput
                style={styles.input}
                value={fullname}
                onChangeText={setFullname}
                placeholder="Enter your name"
              />
            </View>

            {/* Phone Number */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Phone Number</Text>
              <TextInput
                style={styles.input}
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                placeholder="Enter your phone number"
                keyboardType="phone-pad"
              />
            </View>

            {/* Email */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="Enter email"
                keyboardType="email-address"
                editable={false} // Email should not be editable
              />
            </View>

            {/* Date Picker */}
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

            {/* Gender Dropdown */}
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
          </View>
          <TouchableOpacity style={styles.button} onPress={handleUpdateProfile}>
            <Text style={styles.buttonText}>Update Profile</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

export default MyProfile;