import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingTop: 50,
        paddingBottom: 16,
        backgroundColor: "#FFFFFF",
    },
    backButton: {
        padding: 8,
        marginRight: 8,
    },
    title:{
        fontSize: 16,
        fontWeight: "500",
        color: "#1a1a1a",
        marginLeft: 8,
    },
    searchBar: {
        position: 'relative',
        marginHorizontal: 20,
        marginBottom: 32,
    },
    searchInput: {
        width: '100%',
        padding: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#eaeaea",
        fontSize: 14,
        backgroundColor: "#f8f8f8",
    },

    searchIcon: {
        position: 'absolute',
        right: 12,
        top: '50%',
        transform: [{ translateY: -10 }],
    },

    content: {
        flex: 1,
        paddingHorizontal: 20,
    },

    section: {
        marginBottom: 32,
    },

    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },

    sectionTitle: {
        fontSize: 14,
        fontWeight: '600',
        color: '#1a1a1a',
    },

    duration: {
        fontSize: 12,
        color: '#2563eb',
        marginLeft: 8,
    },

    lessonList: {
        gap: 16,
    },

    lessonItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        borderRadius: 8,
        backgroundColor: '#ffffff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
    },

    lessonNumber: {
        fontSize: 14,
        fontWeight: '500',
        color: '#666',
        width: 24,
    },

    lessonContent: {
        flex: 1,
    },

    lessonTitle: {
        fontSize: 14,
        fontWeight: '500',
        color: '#1a1a1a',
        marginBottom: 4,
    },

    lessonDuration: {
        fontSize: 12,
        color: '#666',
    },

    bottomNav: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#ffffff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: -1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
    },

    startButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 100,
        backgroundColor: '#2563eb',
        borderRadius: 24,
    },

    startButtonText: {
        color: '#ffffff',
        fontSize: 14,
        fontWeight: '500',
        marginLeft: 8,
    },
});

export default styles;