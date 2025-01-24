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
    backgroundColor: "#F0F0F0",
  },
  filterButtonOngoing: {
    backgroundColor: "#4A90FF",
  },
  filterTextCompleted: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "500",
  },
  filterTextOngoing: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "500",
  },
  courseList: {
    flex: 1,
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    flexDirection: "row",
    gap: 12,
  },
  thumbnail: {
    width: 80,
    height: 80,
    backgroundColor: "#000",
    borderRadius: 8,
  },
  content: {
    flex: 1,
  },
  category: {
    color: "#FF6B00",
    fontSize: 12,
    marginBottom: 4,
  },
  title: {
    fontSize: 14,
    marginBottom: 8,
    fontWeight: "500",
  },
  progressContainer: {
    height: 4,
    backgroundColor: "#E5E7EB",
    borderRadius: 2,
    marginBottom: 8,
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#FF6B00",
    borderRadius: 2,
  },
  meta: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  metaText: {
    fontSize: 12,
    color: "#6B7280",
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