import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import styles from './signupStyle';

const EmailSignup = ({ navigation }) => {
    const [fullname, setFullname] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [isTermsChecked, setTermsChecked] = useState(false);
    const [isUpdatesChecked, setUpdatesChecked] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!isPasswordVisible);
    };

    const handleContinue = () => {
        if (password.length < 8) {
            setPasswordError('Password must contain at least 8 characters.');
        } else {
            setPasswordError('');
            // Add further navigation or validation logic here
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>

                <Text style={styles.title}>Enter your information</Text>

                <Text style={styles.subtitle}>Full Name</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Full Name"
                    placeholderTextColor="#A9A9A9"
                    onChangeText={setFullname}
                    value={fullname}
                />

{/*                 <Text style={styles.subtitle}>User Name</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    placeholderTextColor="#A9A9A9"
                    onChangeText={setUsername}
                    value={username}
                /> */}

{/*                 <Text style={styles.subtitle}>Gender</Text>
                <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={gender}
                        onValueChange={(itemValue) => setGender(itemValue)}
                        style={styles.picker}
                    >
                        <Picker.Item label="Select Gender" value="" />
                        <Picker.Item label="Male" value="male" />
                        <Picker.Item label="Female" value="female" />
                    </Picker>
                </View> */}

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
                    <TouchableOpacity style={styles.eyeIconContainer} onPress={togglePasswordVisibility}>
                        <Ionicons
                            name={isPasswordVisible ? 'eye' : 'eye-off'}
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
                    <TouchableOpacity style={styles.eyeIconContainer} onPress={togglePasswordVisibility}>
                        <Ionicons
                            name={isPasswordVisible ? 'eye' : 'eye-off'}
                            size={20}
                            color="#A9A9A9"
                        />
                    </TouchableOpacity>
                </View>

                {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

                {/* Terms & Conditions Checkbox */}
                <TouchableOpacity
                    style={styles.checkboxContainer}
                    onPress={() => setTermsChecked(!isTermsChecked)}
                >
                    <Ionicons
                        name={isTermsChecked ? 'checkbox' : 'square-outline'}
                        size={20}
                        color="#A9A9A9"
                    />
                    <Text style={styles.checkboxText}>
                        I agree to EduConnect's <Text style={styles.linkText}>Terms & Conditions</Text>
                    </Text>
                </TouchableOpacity>

                {/* Updates Checkbox */}
                <TouchableOpacity
                    style={styles.checkboxContainer}
                    onPress={() => setUpdatesChecked(!isUpdatesChecked)}
                >
                    <Ionicons
                        name={isUpdatesChecked ? 'checkbox' : 'square-outline'}
                        size={20}
                        color="#A9A9A9"
                    />
                    <Text style={styles.checkboxText}>
                        I'd like to receive reports on my learning & occasional updates on learning opportunities from EduConnect
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate('ProfileCompletion')}>
                    <Text style={styles.continueButtonText}>Continue</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default EmailSignup;
