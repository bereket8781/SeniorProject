import { StyleSheet, Dimensions } from 'react-native';

const { width: windowWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    skipContainer: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 16,
    },
    skipButton: {
        padding: 8,
    },
    skipText: {
        fontSize: 14,
        color: '#2563EB',
    },
    swiperContainer: {
        height: 300,
        maxWidth: windowWidth || 400, // Set a fallback width
    },
    swiperContent: {
        height: '100%',
    },
    slide: {
        width: windowWidth || 400,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    navButton: {
        position: 'absolute',
        top: '50%',
        zIndex: 10,
    },
    navButtonLeft: {
        left: 10,
    },
    navButtonRight: {
        right: 10,
    },
    navButtonText: {
        fontSize: 35,
        color: '#F0F0F0',
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16,
        paddingBottom: 32,
    },
    textContainer: {
        width: '100%',
        alignItems: 'center',
        marginTop: 32,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
        textAlign: 'center',
    },
    description: {
        fontSize: 14,
        color: '#6B7280',
        marginBottom: 16,
        textAlign: 'center',
    },
    dotsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 16,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#E5E7EB',
        marginHorizontal: 4,
    },
    activeDot: {
        backgroundColor: '#2563EB',
    },
    fixedButtonsContainer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 30,
        left: 0,
        right: 0,
        paddingHorizontal: 20,
    },
    buttonContainer: {
        width: '100%',
        alignItems: 'center',
        marginTop: 32,
    },
    button: {
        width: '100%',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#4A90E2',
    },
    registerButton: {
        marginBottom: 10,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default styles;
