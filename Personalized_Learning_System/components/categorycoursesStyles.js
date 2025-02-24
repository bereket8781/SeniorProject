import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#fff",
        paddingTop: 50,
    },
    categoryTitle: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
    },
    courseList: {
        paddingBottom: 16,
    },
    courseItem: {
        flexDirection: 'row',
        marginBottom: 16,
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        overflow: 'hidden',
        elevation: 2,
    },
    courseImage: {
        width: 100,
        height: 100,
        resizeMode: 'cover',
    },
    courseDetails: {
        padding: 12,
        flex: 1,
    },
    courseTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    courseProvider: {
        fontSize: 14,
        color: '#666',
        marginBottom: 4,
    },
    courseUrl: {
        color: 'blue',
        textDecorationLine: 'underline',
        fontSize: 14,
      },
});

export default styles;