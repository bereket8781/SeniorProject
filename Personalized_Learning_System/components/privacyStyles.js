import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      paddingTop: 40,
    },
    header: {
      flexDirection: "row",
      alignItems: "center",
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: "#eee",
    },
    headerTitle: {
      fontSize: 18,
      fontWeight: "bold",
      marginLeft: 16,
      textAlign: "center",
      flex: 1,
    },
    content: {
      padding: 16,
    },
    sectionTitle: {
      fontSize: 16,
      fontWeight: "bold",
      color: "#007bff",
      marginBottom: 8,
    },
    sectionText: {
      fontSize: 14,
      color: "#333",
      marginBottom: 16,
    },
    bottomNav: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#ffffff",
        paddingVertical: 10,
        borderTopWidth: 1,
        borderColor: "#E6E6E6",
        paddingHorizontal: 20,
      },
      navItem: {
        
        alignItems: 'center',
        
      },
      navText: {
        fontSize: 10,
        color: '#666666',
        marginTop: 5,
      },
      navActive: {
        fontWeight: 'bold',
        color: '#0056FF', // Active text color
      },
  });

  export default styles;