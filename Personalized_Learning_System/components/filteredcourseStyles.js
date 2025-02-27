import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
    paddingTop: 50,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 16,
  },
  courseItem: {
    marginBottom: 16,
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
  },
  courseImage: {
    width: "100%",
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#007BFF",
  },
  courseDescription: {
    fontSize: 14,
    color: "#666",
    marginTop: 8,
  },
  courseDifficulty: {
    fontSize: 14,
    color: "#333",
    marginTop: 8,
  },
  courseDuration: {
    fontSize: 14,
    color: "#333",
    marginTop: 4,
  },
  courseProvider: {
    fontSize: 14,
    color: "#333",
    marginTop: 4,
  },
});

export default styles;