import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: "#F8F9FA",
          padding: 20,
          paddingTop: 50,
        },
        header: {
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 30,
        },
        headerTitle: {
          flex: 1,
          textAlign: "center",
          fontSize: 18,
          fontWeight: "bold",
          color: "#000",
        },
        inputContainer: {
          backgroundColor: "#fff",
          padding: 20,
          borderRadius: 10,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.1,
          shadowRadius: 6,
          elevation: 3,
        },
        inputWrapper: {
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#F5F5F5",
          borderRadius: 10,
          paddingHorizontal: 15,
          marginBottom: 15,
        },
        input: {
          flex: 1,
          height: 50,
          fontSize: 16,
          color: "#333",
        },
        forgotPassword: {
          textAlign: "right",
          color: "#007BFF",
          fontSize: 14,
          marginBottom: 20,
        },
        button: {
          backgroundColor: "#007BFF",
          padding: 15,
          borderRadius: 30,
          alignItems: "center",
          marginTop: 30,
        },
        buttonText: {
          color: "#fff",
          fontSize: 16,
          fontWeight: "bold",
        },
  });

export default styles;