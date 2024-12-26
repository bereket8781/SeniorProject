import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
    },
    header: {
        backgroundColor: "#0056ff",
        padding: 20,
        paddingTop: 50,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    scrollView: {
        flex: 1,
        width: '100%',
      },
    contentContainer: {
        paddingBottom: 80,
        paddingHorizontal: 16,
      },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    section: {
        marginBottom: 20,
        padding: 15,
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    field: {
        marginBottom: 15,
    },
    label: {
        fontSize: 16,
        fontWeight:'bold',
        marginBottom: 5,
        color: '#444',
    },
    sublabel: {
        fontSize: 14,
        marginBottom: 5,
        color: '#666'
    },
    picker: {
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    checkboxLabel: {
        marginLeft: 8,
        fontSize: 16,
        color: '#333',
    },
    textArea: {
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        fontSize: 16,
        height: 100,
        textAlignVertical: 'top',
    },
    submitButton: {
        backgroundColor: '#0056FF',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 40,
    },
    submitButtonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default styles;