import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5", // Light gray background
    padding: 16, // Add padding around the container
    paddingTop: 50, // Add padding to the top of the container
  },
  card: {
    backgroundColor: "#FFFFFF", // White background for cards
    borderRadius: 8, // Rounded corners
    padding: 16, // Padding inside the card
    marginBottom: 16, // Space between cards
    shadowColor: "#000", // Shadow for a card-like effect
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Elevation for Android
  },
  title: {
    fontSize: 18, // Larger font size for the title
    fontWeight: "bold", // Bold text for the title
    color: "#333333", // Dark gray text color
    marginBottom: 8, // Space below the title
  },
  category: {
    fontSize: 14, // Smaller font size for the category
    color: "#666666", // Medium gray text color
    marginBottom: 12, // Space below the category
  },
  progress: {
    fontSize: 14, // Font size for progress text
    color: "#0056FF", // Blue color for progress text
    fontWeight: "500", // Medium font weight
  },
  continueButton: {
    backgroundColor: "#0056FF", // Blue background for the button
    padding: 10, // Padding inside the button
    borderRadius: 8, // Rounded corners
    alignItems: "center", // Center the text
    marginTop: 12, // Space above the button
  },
  continueButtonText: {
    color: "#FFFFFF", // White text color
    fontWeight: "bold", // Bold text
  },
  completeButton: {
    backgroundColor: "#10B981", // Green background for the button
    padding: 10, // Padding inside the button
    borderRadius: 8, // Rounded corners
    alignItems: "center", // Center the text
    marginTop: 12, // Space above the button
  },
  completeButtonText: {
    color: "#FFFFFF", // White text color
    fontWeight: "bold", // Bold text
  },
});

export default styles;