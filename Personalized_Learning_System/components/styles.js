import { StyleSheet } from "react-native";

export default StyleSheet.create ({
    splashContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#F0F04FF',
    },

    image: {
        width: 250,
        height: 250,
        resizeMode: 'contain',
        marginBottom: 30,
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#4F4D8C',
        textAlign: 'center',
        marginBottom: 10,
    },

    subtitle: {
        fontSize: 16,
        color: '#8A8AB5',
        textAlign: 'center',
        marginHorizontal: 20,
        marginBottom: 40,
    },

    buttonContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    registerButton: {
        flex: 1,
        backgroundColor: '#4A90E2',
        paddingVertical: 15,
        borderRadius: 8,
        marginRight: 10,
        alignItems: 'center',
    },

    loginButton: {
        flex: 1,
        backgroundColor: '#F5A623',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
    },

    buttonText: {
        color: '#FFFFFF',
        fontWeight: '600',
    },

    dot: {
        backgroundColor: '#E1E3F2',
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 3,
    },

    activeDot: {
        backgroundColor: '#4A90E2',
        width: 19,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 3,
    },

});