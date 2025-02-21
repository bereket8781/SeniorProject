import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  Platform,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import DropDownPicker from "react-native-dropdown-picker";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import styles from "./myproStyles";

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
      quality: 1,
    });
  
    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

const MyProfile = ({navigation}) => {
   const [showDatePicker, setShowDatePicker] = useState(false);
   const [birthdate, setBirthdate] = useState(new Date());
   const [profileImage, setProfileImage] = useState("");
  const [genderOpen, setGenderOpen] = useState(false);
  const [gender, setGender] = useState(null);
  const [genderItems, setGenderItems] = useState([
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
  ]);

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || birthdate;
    setShowDatePicker(false);
    setBirthdate(currentDate);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Feather name="arrow-left" color="#000000" size={24}  onPress={() => navigation.navigate("ProfilePage")}/>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Your Profile</Text>
      </View>

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

      <View style={styles.formContainer}>
        {/* Name */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            defaultValue="Selamawit Yosef"
            placeholder="Enter your name"
          />
        </View>

        {/* Phone Number */}
        <View style={styles.inputGroup}>
          <View style={styles.labelContainer}>
            <Text style={styles.label}>Phone Number</Text>
          </View>
          <TextInput
            style={styles.input}
            defaultValue="+251 912 345 678"
            placeholder="Enter your phone number"
          />
        </View>

        {/* Email */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            defaultValue="Selam@gmail.com"
            placeholder="Enter email"
            keyboardType="email-address"
          />
        </View>

        {/* Date Picker */}
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
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Gender</Text>
          <DropDownPicker
            open={genderOpen}
            value={gender}
            items={genderItems}
            setOpen={setGenderOpen}
            setValue={setGender}
            setItems={setGenderItems}
            placeholder="Female"
            style={styles.selectButton}
            textStyle={styles.selectButtonText}
            dropDownContainerStyle={{ backgroundColor: "#fff" }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default MyProfile;
