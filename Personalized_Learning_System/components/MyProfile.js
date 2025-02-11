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
import DatePicker from "react-native-date-picker";
import DropDownPicker from "react-native-dropdown-picker";
import styles from "./myproStyles";

const MyProfile = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const [genderOpen, setGenderOpen] = useState(false);
  const [gender, setGender] = useState(null);
  const [genderItems, setGenderItems] = useState([
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
  ]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Feather name="arrow-left" color="#000000" size={24}  onPress={() => navigation.navigate("ProfilePage")}/>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Your Profile</Text>
      </View>

      <View style={styles.content}>
        <Image
          source={{
            uri: "data:image/jpeg;base64,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",
          }}
          style={styles.profileImage}
        />
        <TouchableOpacity style={styles.editButton}>
          <Feather name="edit-2" color="#fff" size={24} />
        </TouchableOpacity>
      </View>

      <View style={styles.formContainer}>
        {/* Name */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            defaultValue="Jacob Jones"
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
            defaultValue="example@gmail.com"
            placeholder="Enter email"
            keyboardType="email-address"
          />
        </View>

        {/* Date Picker */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>DOB</Text>
          <TouchableOpacity
            style={styles.input}
            onPress={() => setOpenDatePicker(true)}
          >
            <Text>{date.toDateString()}</Text>
          </TouchableOpacity>
          <DatePicker
            modal
            open={openDatePicker}
            date={date}
            mode="date"
            onConfirm={(selectedDate) => {
              setOpenDatePicker(false);
              setDate(selectedDate);
            }}
            onCancel={() => setOpenDatePicker(false)}
          />
        </View>

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
            placeholder="Select Gender"
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
