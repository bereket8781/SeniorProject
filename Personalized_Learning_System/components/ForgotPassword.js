import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './forgotStyles';

const ForgotPassword = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [showError, setShowError] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleSendEmail = () => {
        setShowError(false);  // Hide error message (optional)
        setIsModalVisible(true);  // Show modal
    };

    const closeModal = () => {
        setIsModalVisible(false);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.title}>Enter your email</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="abc@gmail.com"
                    placeholderTextColor="#A9A9A9"
                    onChangeText={setEmail}
                    value={email}
                />
                <Ionicons name="eye" size={20} color="#A9A9A9" style={styles.eyeIcon} />
            </View>

            {showError && (
                <Text style={styles.errorText}>
                    The email address you provided is not associated with your account
                </Text>
            )}

            <TouchableOpacity style={styles.sendButton} onPress={handleSendEmail}>
                <Text style={styles.sendButtonText}>send email</Text>
            </TouchableOpacity>

            {/* Modal for "Check Your Email" popup */}
            <Modal
                transparent={true}
                visible={isModalVisible}
                animationType="fade"
                onRequestClose={closeModal}
            >
                <View style={styles.modalBackground}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalTitle}>Check your email</Text>
                        <Text style={styles.modalSubtitle}>We've sent a password recovery instruction to your email</Text>
                        <Image source={require('../assets/images/SplashScreen.png')} style={styles.modalImage} />
                        
                        <TouchableOpacity style={styles.openEmailButton} onPress={() => navigation.navigate('ResetPass')}>
                            <Text style={styles.openEmailButtonText}>Open email app</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity onPress={closeModal}>
                            <Text style={styles.laterText}>Will do it later</Text>
                        </TouchableOpacity>

                        <Text style={styles.modalFooter}>
                            Didn’t get any email? Check your spam folder or try again with a valid email.
                        </Text>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default ForgotPassword;
