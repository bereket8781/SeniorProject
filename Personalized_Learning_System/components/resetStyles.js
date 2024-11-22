import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: "#FFFFFF",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 20,
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

  resetButton: {
    backgroundColor: "#1E90FF",
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: "center",
    marginTop: 20,
  },

  resetButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
