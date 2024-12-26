import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 16,
    backgroundColor: "#FFFFFF",
  },
  backButton: {
    padding: 8,
    marginRight: 8,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#000000",
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  searchWrapper: {
    position: "relative",
    marginBottom: 16,
  },
  searchInput: {
    width: "100%",
    height: 40,
    paddingHorizontal: 16,
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
    fontSize: 14,
    color: "#666666",
  },
  searchIcon: {
    position: "absolute",
    right: 12,
    top: 10,
    backgroundColor: "#4A90FF",
    borderRadius: 6,
    padding: 4,
  },
  filterContainer: {
    flexDirection: "row",
    gap: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  filterButton: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  filterButtonCompleted: {
    backgroundColor: "#4A90FF",
  },
  filterButtonOngoing: {
    backgroundColor: "#F0F0F0",
  },
  filterTextCompleted: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "500",
  },
  filterTextOngoing: {
    color: "#666666",
    fontSize: 14,
    fontWeight: "500",
  },
  courseList: {
    paddingHorizontal: 16,
  },
  courseItem: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 12,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  courseImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    backgroundColor: "#000000",
    marginRight: 12,
  },
  courseContent: {
    flex: 1,
    justifyContent: "space-between",
  },
  courseHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  courseInfo: {
    flex: 1,
    marginRight: 8,
  },
  courseCategory: {
    fontSize: 12,
    color: "#FF6B00",
    marginBottom: 4,
  },
  courseTitle: {
    fontSize: 14,
    fontWeight: "500",
    color: "#000000",
    marginBottom: 8,
  },
  checkIcon: {
    width: 20,
    height: 20,
    tintColor: "#0C8B6C",
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
    fontSize: 12,
    fontWeight: "500",
    color: "#666666",
    marginRight: 8,
  },
  courseDuration: {
    fontSize: 12,
    color: "#666666",
  },
  certificateButton: {
    color: "#0C8B6C",
    fontSize: 12,
    fontWeight: "500",
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

export default styles;