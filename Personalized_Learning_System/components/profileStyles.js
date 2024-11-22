import { CameraIcon } from "lucide-react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },

  backButton: {
    marginTop: 30,
    alignSelf: "flex-start",
    marginBottom: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },

  subtitle: {
    fontSize: 14,
    color: "gray",
    textAlign: "center",
    marginVertical: 10,
  },

  profilePictureContainer: {
    alignSelf: "center",
    marginVertical: 20,
    position: "relative",
  },

  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  CameraIcon: {
    position: "absolute",
    bottom: 0,
    right: -10,
  },

  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },

  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 25,
    padding: 10,
    marginTop: 5,
  },

  dropdown: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 25,
    marginTop: 5,
  },

  createButton: {
    backgroundColor: "#007bff",
    borderRadius: 25,
    padding: 15,
    marginTop: 20,
    alignItems: "center",
  },

  createButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default styles;
