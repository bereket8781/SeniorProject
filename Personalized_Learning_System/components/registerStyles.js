import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingBottom: 50,
    backgroundColor: "#FFFFFF",
  },

  title: {
    marginTop: 70,
    fontSize: 28,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 10,
    textAlign: "center",
  },

  subtitle: {
    marginTop: 1,
    fontSize: 28,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 70,
    textAlign: "center",
  },

  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 50,
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    borderWidth: 1,
    borderColor: "#EEEEEE",
  },

  socialIcon: {
    width: 24,
    height: 24,
    marginRight: 12,
  },

  socialButtonText: {
    fontSize: 16,
    color: "#333333",
    fontWeight: "500",
  },

  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginVertical: 25,
  },

  orLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#EEEEEE",
  },

  orText: {
    fontSize: 14,
    color: "#999999",
    marginHorizontal: 15,
    fontWeight: "500",
    textAlign: "center",
  },

  signInText: {
    color: "#4A90E2",
    fontSize: 14,
    fontWeight: "600",
    marginLeft: 5,
    textAlign: "center",
  },

  registerFooter: {
    fontSize: 12,
    color: "#888",
    textAlign: "center",
    marginTop: 15,
    marginBottom: 20,
  },

  foooter: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  footerText: {
    color: "#666666",
    fontSize: 14,
    textAlign: "center",
  },

  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },

  modalContainer: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#FFFFFF",
    padding: 20,
    alignItems: "center",
  },

  faceIcon: {
    width: 74,
    height: 74,
    marginRight: 12,
  },

  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },

  modalSubtitle: {
    fontSize: 14,
    color: "#555",
    marginBottom: 20,
  },

  accountOption: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 50,
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    borderWidth: 1,
    borderColor: "#EEEEEE",
  },

  chooseAccount: {
    flexDirection: "column",
  },

  accountName: {
    fontSize: 16,
    fontWeight: "bold",
  },

  accountEmail: {
    fontSize: 14,
    color: "#555",
  },

  useAnotherButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 50,
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    borderWidth: 1,
    borderColor: "#EEEEEE",
  },

  useAnotherText: {
    fontSize: 16,
    color: "#4285F4",
  },

  modalText: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 15,
  },

  continueButton: {
    backgroundColor: "#4267B2",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 10,
  },

  continueButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  cancelText: {
    color: "#888",
    fontSize: 16,
    marginBottom: 15,
  },

  modalFooter: {
    fontSize: 12,
    color: "#888",
    textAlign: "center",
    marginTop: 15,
    marginBottom: 20,
  },

  closeButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
  },

  closeButtonText: {
    color: "#4285F4",
    fontSize: 16,
  },
});

export default styles;
