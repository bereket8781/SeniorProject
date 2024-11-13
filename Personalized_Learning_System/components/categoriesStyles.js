import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const iconSize = 50; // Adjust this to resize the icons as needed

export default StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor: '#F8F9FA',
    },
    header: {
        marginTop: 30,
        flexDirection: 'column',
        paddingHorizontal: 16,
        paddingTop: 20,
    },
    headerTitle: {
        marginTop: 30,
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginLeft: 10,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 16,
        marginVertical: 20,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 8,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        color: '#333',
        paddingHorizontal: 8,
    },
    searchButton: {
        backgroundColor: '#007BFF',
        padding: 8,
        borderRadius: 8,
    },
    categoriesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingBottom: 20,
    },
    categoryItem: {
        width: width / 3 - 20, // Adjust for spacing between items
        alignItems: 'center',
        marginVertical: 15,
    },
    categoryIcon: {
        width: iconSize,
        height: iconSize,
        resizeMode: 'contain',
        marginBottom: 8,
    },
    categoryText: {
        fontSize: 14,
        color: '#333',
        textAlign: 'center',
    },
});
