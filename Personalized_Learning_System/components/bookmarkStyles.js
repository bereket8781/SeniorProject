import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  courseList: {
    paddingBottom: 16,
  },
  courseCard: {
    marginBottom: 16,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    overflow: "hidden",
  },
  courseImage: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
  },
  favoriteButton: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 20,
    padding: 8,
  },
  courseContent: {
    padding: 12,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  instructorRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  instructorText: {
    fontSize: 14,
    color: "#666666",
    marginLeft: 4,
  },
  noFavoritesText: {
    fontSize: 16,
    color: "#666666",
    textAlign: "center",
    marginTop: 16,
  },
});

export default styles;