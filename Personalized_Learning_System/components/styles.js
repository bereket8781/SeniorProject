import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },

    swiperContainer: {
        flex: 1,
    },

    slideContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },

    arrowWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20,
    },

    imageContainer: {
        flex: 1,
        alignItems: 'center',
    },

    image: {
        width: '100%',
        height: undefined,
        aspectRatio: 1,
        resizeMode: 'contain',
    },

    arrowButton: {
        padding: 10,
 
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
        color: '#333',
    },

    subtitle: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 10,
        color: '#666',
        paddingHorizontal: 20,
    },

    skipButton: {
        position: 'absolute',
        top: 40,
        right: 20,
        zIndex: 1,
    },

    skipText: {
        fontSize: 16,
        color: '#4A90E2',
    },

/*     dotsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

        bottom: 120,
        width: '100%',
    },

    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#D8D8D8',
        marginHorizontal: 4,
    }, */

    activeDot: {
        backgroundColor: '#4A90E2',
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