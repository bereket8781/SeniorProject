import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  // Container
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5", // Light gray background
    paddingTop: 50, // Add padding to the top of the container
  },

  // Header
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#FFFFFF", // White background
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0", // Light gray border
  },
  backButton: {
    marginRight: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000", // Black text
  },

  // Search Container
  searchContainer: {
    padding: 16,
    backgroundColor: "#FFFFFF", // White background
  },
  searchWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0F0F0", // Light gray background
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#333333", // Dark gray text
  },
  searchIcon: {
    fontSize: 20,
    color: "#666666", // Medium gray icon
  },

  // Filter Container
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  filterButton: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 4,
  },
  filterButtonCompleted: {
    backgroundColor: "#10B981", // Green background for completed filter
  },
  filterButtonOngoing: {
    backgroundColor: "#3B82F6", // Blue background for ongoing filter
  },
  filterTextCompleted: {
    color: "#FFFFFF", // White text
    fontWeight: "bold",
  },
  filterTextOngoing: {
    color: "#FFFFFF", // White text
    fontWeight: "bold",
  },

  // Course List
  courseList: {
    padding: 16,
  },
  courseItem: {
    backgroundColor: "#FFFFFF", // White background
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: "#000", // Shadow for a card-like effect
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Elevation for Android
  },
  courseImage: {
    height: 150,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    overflow: "hidden",
  },
  courseContent: {
    padding: 16,
  },
  courseHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  courseCategory: {
    fontSize: 14,
    color: "#666666", // Medium gray text
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333", // Dark gray text
  },
  courseFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  courseStats: {
    flexDirection: "row",
    alignItems: "center",
  },
  courseProgress: {
    fontSize: 14,
    color: "#0056FF", // Blue text
    marginRight: 8,
  },
  courseDuration: {
    fontSize: 14,
    color: "#666666", // Medium gray text
  },
  certificateButton: {
    fontSize: 14,
    color: "#10B981", // Green text
    fontWeight: "bold",
  },

  // Bottom Navigation
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 12,
    backgroundColor: "#FFFFFF", // White background
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0", // Light gray border
  },
  navItem: {
    alignItems: "center",
  },
  navText: {
    fontSize: 12,
    color: "#666666", // Medium gray text
    marginTop: 4,
  },
  navActive: {
    color: "#0056FF", // Blue text for active tab
  },
});

export default styles;