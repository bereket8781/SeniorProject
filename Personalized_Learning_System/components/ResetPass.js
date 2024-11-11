import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './resetStyles';

const ResetPass = ( { navigation }) => {
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const [passwordError, setPasswordError] = useState('');

    const togglePasswordVisibility = () => {
        setPasswordVisible(!isPasswordVisible);
    };

    const handleReset = () => {
        if (password.length < 8) {
            setPasswordError('Password must contain atleast 8 characters.');
        } else {
            setPasswordError('');
        }

/*         if(newPass != repeatPass){
            setPasswordError('Passwords must match');
        } else {
            setPasswordError('');
        } */
    };

    return(
        <View style = {styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>

            <Text style = {styles.title}>Enter new password</Text>

            <View style = {styles.passwordContainer}>
                <TextInput 
                    style = {styles.passwordInput}
                    placeholder="enter new password"
                    placeholderTextColor="#A9A9A9"
                    onChangeText={setPassword}
                    value={password}
                    secureTextEntry= {!isPasswordVisible}
                />

                <TouchableOpacity style = {styles.eyeIconContainer} onPress={togglePasswordVisibility}>
                    <Ionicons 
                         name={isPasswordVisible ? 'eye' : 'eye-off'}
                         size={20}
                         color="#A9A9A9"
                    />
                </TouchableOpacity>
            </View>

            <Text style = {styles.title}>Comfirm password</Text>

            <View style = {styles.passwordContainer}>
                <TextInput 
                    style = {styles.passwordInput}
                    placeholder="Confirm password"
                    placeholderTextColor="#A9A9A9"
                    onChangeText={setPassword}
                    value={password}
                    secureTextEntry= {!isPasswordVisible}
                />

                <TouchableOpacity style = {styles.eyeIconContainer} onPress={togglePasswordVisibility}>
                    <Ionicons 
                         name={isPasswordVisible ? 'eye' : 'eye-off'}
                         size={20}
                         color="#A9A9A9"
                    />
                </TouchableOpacity>
            </View>
            
            {passwordError ? <Text style = {styles.errorText}>{passwordError}</Text> : null}

            <TouchableOpacity style = {styles.resetButton} onPress={() => navigation.navigate('Login')} >
                <Text style = {styles.resetButtonText}>Reset</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ResetPass;