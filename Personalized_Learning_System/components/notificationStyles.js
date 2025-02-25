import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#ffffff",
        paddingTop: 30,
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
      backButton: {
        padding: 8,
        marginRight: 8,
      },
      headerTitle: {
        color: "#000",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        flex: 1,
      },
    settingItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#e0e0e0",
    },
});

export default styles;