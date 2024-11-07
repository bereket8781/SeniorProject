import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Modal } from 'react-native';
import styles from "./loginStyles";
import { Ionicons } from '@expo/vector-icons';


const Login = ( { navigation }) => {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ isPasswordVisible, setPasswordVisible ] = useState(false);
    const [ passwordError, setPasswordError ] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);

const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
};

    const togglePasswordVisibility = () => {
        setPasswordVisible(!isPasswordVisible);
    };

    const handleLogin = () => {
        if(password.length < 8) {
            setPasswordError('Password should include atleast 8 characters');
        } else {
            setPasswordError('');
        }
    };

    return (
        <View style = { StyleSheet.container }>
            <Text style = { styles.title }>Welcome back!</Text>
            <Text style = { styles.subtitle }>Sign in to continue!</Text>


            <TextInput
              style = { styles.input }
              placeholder = "Username"
              placeholderTextColor = "#A9A9A9"
              onChangeText = {setUsername}
              value = {username}
            />

        <View style = {styles.passwordContainer}>
            <TextInput
              style = { styles.passwordInput}
              placeholder = "password"
              placeholderTextColor = "#A9A9A9"
              onChangeText = {setPassword}
              value = {password}
              secureTextEntry = {!isPasswordVisible}
            />
        
    
            <TouchableOpacity style = { styles.eyeIconContainer} onPress={togglePasswordVisibility}>
                <Ionicons
                  name = {isPasswordVisible ? 'eye' : 'eye-off'}
                  size = {20}
                  color = "#A9A9A9"
                />
            </TouchableOpacity>

        </View>

        {passwordError ? <Text style = {styles.errorText}>{passwordError}</Text> : null}

            <TouchableOpacity style = {styles.loginButton} onPress={handleLogin}>
                <Text style = {styles.loginButtonText}>Log In</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => alert ("Forgot Password?")} style = {styles.forgotPassword}>
                <Text style = {styles.forgotPasswordText}>Forgot Password</Text>
            </TouchableOpacity>
            
            <View style={styles.orContainer}>
                <View style={styles.orLine} />
                <Text style={styles.orText}>OR</Text>
                <View style={styles.orLine} />
            </View>

            <TouchableOpacity style = {styles.socialButton} onPress={toggleModal}>
                <Image source = {require ('../assets/images/googleIcon.jpg')} style = {styles.socialIcon} />
                <Text style = {styles.socialButtonText}>Log in with Google</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.socialButton}>
                <Image source = {require ('../assets/images/facebookIcon.jpg')} style = {styles.socialIcon} />
                <Text style = {styles.socialButtonText}>Log in with Facebook</Text>
            </TouchableOpacity>

            <View style={styles.footer}>
          
                <Text style={styles.footerText}>Don't have an account?</Text>
                <TouchableOpacity>
                    <Text style={styles.signUpText}>Sign Up</Text>
                </TouchableOpacity>
          
        </View>

        <Modal
    transparent={true}
    visible={isModalVisible}
    animationType="fade"
    onRequestClose={toggleModal}
>
    <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Choose an account</Text>
            <Text style={styles.modalSubtitle}>To continue to EduConnect</Text>

            <View style={styles.accountOption}>
            <Image source = {require ('../assets/images/googleAcc.png')} style = {styles.socialIcon} />
            <View style = { styles.chooseAccount}>
                <Text style={styles.accountName}>Account Name</Text>
                <Text style={styles.accountEmail}>email@gmail.com</Text>
                </View>
            </View>

            <TouchableOpacity style={styles.useAnotherButton}>
            <Image source = {require ('../assets/images/otherAcc.jpg')} style = {styles.socialIcon} />
                <Text style={styles.useAnotherText}>Use another account</Text>
            </TouchableOpacity>

            <Text style={styles.modalFooter}>
                To continue, Google will share your name, email address, and profile picture with EduConnect.
            </Text>

            <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
                <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
        </View>
    </View>
</Modal>


        </View>
    );
};

export default Login;