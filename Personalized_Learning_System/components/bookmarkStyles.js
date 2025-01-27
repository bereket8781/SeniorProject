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
  categoriesContainer: {
    paddingVertical: 16,
  },
  categoriesScroll: {
    paddingHorizontal: 16,
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    backgroundColor: "#F3F4F6",
  },
  categoryButtonActive: {
    backgroundColor: "#2563EB",
  },
  categoryText: {
    color: "#4B5563",
    fontSize: 14,
  },
  categoryTextActive: {
    color: "#FFFFFF",
  },
  courseList: {
    flex: 1,
    padding: 16,
  },
  courseCard: {
    flexDirection: "row",
    padding: 12,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  courseImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  courseInfo: {
    flex: 1,
    marginLeft: 12,
  },
  courseHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: "500",
    flex: 1,
  },
  bookmarkIcon: {
    width: 20,
    height: 20,
    color: "#2563EB",
  },
  instructorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  instructorAvatar: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#E5E7EB",
    marginRight: 8,
  },
  instructorName: {
    fontSize: 14,
    color: "#6B7280",
  },
  courseFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },
  coursePrice: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2563EB",
  },
  bestSeller: {
    fontSize: 12,
    color: "#F97316",
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