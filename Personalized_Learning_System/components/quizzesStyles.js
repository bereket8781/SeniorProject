import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 16,
    },
    quizContainer: {
      marginBottom: 16,
    },
    question: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 8,
    },
    option: {
      padding: 12,
      marginVertical: 4,
      backgroundColor: "#f0f0f0",
      borderRadius: 8,
    },
    selectedOption: {
      backgroundColor: "#c0c0c0",
    },
    optionText: {
      fontSize: 16,
    },
    submitButton: {
      padding: 16,
      backgroundColor: "#007bff",
      borderRadius: 8,
      alignItems: "center",
      marginTop: 16,
    },
    submitButtonText: {
      color: "#fff",
      fontSize: 18,
      fontWeight: "bold",
    },
  });

  export default styles;