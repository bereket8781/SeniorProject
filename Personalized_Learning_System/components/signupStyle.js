import { StyleSheet } from "react-native";

export default StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 0,
  },

  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: "#FFFFFF",
  },

  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#F8F8F8",
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 16,
    color: "#333333",
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#EEEEEE",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 20,
    color: "#000000",
  },

  subtitle: {
    fontSize: 18,
    marginTop: 10,
    marginBottom: 20,
    color: "#000000",
  },

  pickerContainer: {
    borderWidth: 1,
    borderColor: "#A9A9A9",
    borderRadius: 5,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  picker: {
    height: 50,
    color: "#000000",
  },

  passwordContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F8F8F8",
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#EEEEEE",
    paddingHorizontal: 15,
    marginBottom: 10,
  },

  passwordInput: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: "#333333",
  },

  eyeIconContainer: {
    position: "absolute",
    right: 15,
  },

  errorText: {
    color: "#FF4D4D",
    fontSize: 14,
    alignSelf: "flex-start",
    marginBottom: 15,
    marginLeft: 10,
  },

  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  checkboxText: {
    marginLeft: 8,
    color: "#A9A9A9",
    fontSize: 14,
  },
  linkText: {
    color: "#1E90FF", // or any other color for the hyperlink style
    textDecorationLine: "underline",
  },

  continueButton: {
    backgroundColor: "#1E90FF",
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },

  continueButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
