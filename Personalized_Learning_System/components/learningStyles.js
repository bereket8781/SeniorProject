import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5", // Light gray background for a modern look
  },
  header: {
    backgroundColor: "#ffffff", // Vibrant blue header
    padding: 20,
    paddingTop: 50,
    //paddingTop: Platform.OS === "ios" ? 50 : 20, // Adjust for iOS and Android
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8, // Adds shadow for Android
    flexDirection: "row", // Align items horizontally
    alignItems: "center", // Center items vertically
    justifyContent: "space-between", // Space between title and skip button
  },
  skipButton: {
    backgroundColor: "#ffffff", // White background for contrast
    padding: 10,
    borderRadius: 25, // Rounded corners
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  skipButtonText: {
    color: "#0056FF", // Blue text to match the header
    fontWeight: "bold",
  },
  scrollView: {
    flex: 1,
    width: "100%",
  },
  contentContainer: {
    paddingTop: 20,
    paddingBottom: 80,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff", // White text for contrast
    textAlign: "center",
    flex: 1, // Allow the title to take up remaining space
  },
  section: {
    marginBottom: 20,
    padding: 20,
    backgroundColor: "#ffffff", // White background for sections
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333333", // Dark gray for headings
  },
  field: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "600", // Semi-bold for labels
    marginBottom: 10,
    color: "#444444", // Medium gray for labels
  },
  sublabel: {
    fontSize: 14,
    marginBottom: 5,
    color: "#666666", // Light gray for sublabels
  },
  picker: {
    backgroundColor: "#f0f0f0", // Light gray background for picker
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd", // Light border for picker
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "#f9f9f9", // Light background for checkboxes
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#eee", // Very light border
  },
  checkboxLabel: {
    marginLeft: 10,
    fontSize: 16,
    color: "#333333", // Dark gray for checkbox labels
  },
  textArea: {
    borderColor: "#ddd", // Light border for text areas
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    height: 120,
    textAlignVertical: "top",
    backgroundColor: "#f9f9f9", // Light background for text areas
  },
  submitButton: {
    backgroundColor: "#0056FF", // Vibrant blue for the submit button
    padding: 15,
    borderRadius: 25, // Rounded corners
    alignItems: "center",
    marginTop: 20,
    marginBottom: 40,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  submitButtonText: {
    color: "#ffffff", // White text for contrast
    fontSize: 18,
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#ffffff", // White background for modal
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333333", // Dark gray for modal title
  },
  modalMessage: {
    textAlign: "center",
    marginBottom: 20,
    color: "#666666", // Medium gray for modal message
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  modalButton: {
    flex: 1,
    padding: 12,
    alignItems: "center",
    backgroundColor: "#0056FF", // Vibrant blue for modal buttons
    borderRadius: 10,
    marginHorizontal: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  modalButtonText: {
    color: "#ffffff", // White text for modal buttons
    fontWeight: "bold",
  },
});

export default styles;