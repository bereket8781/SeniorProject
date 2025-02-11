import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        backgroundColor: "#ffffff",
      },
      header: {
        backgroundColor: "#ffffff",
        padding: 20,
        paddingTop: 50,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        flexDirection: "row",
        alignItems: "center",
      },
      headerTitle: {
        color: "#000",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        flex: 1,
      },
      menuContainer: {
        marginTop: 20,
      },
      menuItem: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#f0f0f0",
      },
      menuItemLeft: {
        flexDirection: "row",
        alignItems: "center",
      },
      menuItemText: {
        marginLeft: 15,
        fontSize: 16,
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