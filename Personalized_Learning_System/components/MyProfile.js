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
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgvL1falzHMx6Ad2oTvH9y1BeVbQnplBRC8A&s",
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
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Date Of Birth</Text>
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
