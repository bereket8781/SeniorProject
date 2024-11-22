import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./registerStyles";

const Register = ({ navigation }) => {
  const [isGoogleModalVisible, setIsGoogleModalVisible] = useState(false);
  const [isFacebookModalVisible, setIsFacebookModalVisible] = useState(false);

  const toggleGoogleModal = () => {
    setIsGoogleModalVisible(!isGoogleModalVisible);
  };

  const toggleFacebookModal = () => {
    setIsFacebookModalVisible(!isFacebookModalVisible);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>
      <Text style={styles.subtitle}>Sign up to continue!</Text>

      <TouchableOpacity style={styles.socialButton} onPress={toggleGoogleModal}>
        <Image
          source={require("../assets/images/googleIcon.jpg")}
          style={styles.socialIcon}
        />
        <Text style={styles.socialButtonText}>Sign up with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.socialButton}
        onPress={toggleFacebookModal}
      >
        <Image
          source={require("../assets/images/facebookIcon.jpg")}
          style={styles.socialIcon}
        />
        <Text style={styles.socialButtonText}>Sign up with facebook</Text>
      </TouchableOpacity>

      <View style={styles.orContainer}>
        <View style={styles.orLine} />
        <Text style={styles.orText}>OR</Text>
        <View style={styles.orLine} />
      </View>

      <TouchableOpacity
        style={styles.socialButton}
        onPress={() => navigation.navigate("EmailSignup")}
      >
        <Text style={styles.socialButtonText}>Sign up with email</Text>
      </TouchableOpacity>

      <Text style={styles.registerFooter}>
        By signing up you are agreed with our terms and conditions!
      </Text>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Already have account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.signInText}>Sign In</Text>
        </TouchableOpacity>
      </View>

      <Modal
        transparent={true}
        visible={isGoogleModalVisible}
        animationType="fade"
        onRequestClose={toggleGoogleModal}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Choose an account</Text>
            <Text style={styles.modalSubtitle}>To continue to EduConnect</Text>

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
              You previously logged in to EduConnect with Facebook as @acc123
            </Text>
            <Text style={styles.modalText}>Would you like to continue?</Text>

            <TouchableOpacity style={styles.continueButton}>
              <Text style={styles.continueButoonText}>Continue</Text>
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
  );
};

export default Register;
