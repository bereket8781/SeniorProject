import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fafb",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#ffffff",
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 16,
  },
  searchContainer: {
    padding: 16,
  },
  searchWrapper: {
    position: "relative",
    marginBottom: 16,
  },
  searchInput: {
    width: "100%",
    paddingLeft: 16,
    paddingRight: 40,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
  searchIcon: {
    position: "absolute",
    right: 12,
    top: 10,
  },
  filterContainer: {
    flexDirection: "row",
    marginBottom: 24,
  },
  filterButton: {
    flex: 1,
    padding: 8,
    borderRadius: 6,
    marginHorizontal: 4,
  },
  filterButtonCompleted: {
    backgroundColor: "#059669",
  },
  filterButtonOngoing: {
    backgroundColor: "#f3f4f6",
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
  filterTextCompleted: {
    color: "#ffffff",
    textAlign: "center",
  },
  filterTextOngoing: {
    color: "#000000",
    textAlign: "center",
  },
  courseList: {
    paddingHorizontal: 16,
  },
  courseItem: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 8,
    flexDirection: "row",
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  courseImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    backgroundColor: "#000000",
    marginRight: 16,
  },
  courseContent: {
    flex: 1,
  },
  courseHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  courseCategory: {
    fontSize: 14,
    color: "#f97316",
  },
  courseTitle: {
    fontWeight: "500",
    fontSize: 16,
  },
  courseFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },
  courseStats: {
    flexDirection: "row",
    alignItems: "center",
  },
  courseProgress: {
    fontSize: 14,
    fontWeight: "500",
    marginRight: 8,
  },
  courseDuration: {
    fontSize: 14,
    color: "#6b7280",
  },
  certificateButton: {
    color: "#059669",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: "#E6E6E6",
    paddingHorizontal: 20,
  },
  navItem: {
    alignItems: "center",
  },
  navText: {
    fontSize: 10,
    color: "#666666",
    marginTop: 5,
  },
  navActive: {
    color: "#0056FF",
    fontWeight: "bold",
  },
});

