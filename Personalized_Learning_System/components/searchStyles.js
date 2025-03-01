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
    courseList: {
      paddingBottom: 16,
    },
    courseItem: {
      flexDirection: "row",
      marginBottom: 16,
      backgroundColor: "#f9f9f9",
      borderRadius: 8,
      overflow: "hidden",
      elevation: 2,
    },
    courseImage: {
      width: 100,
      height: 100,
      resizeMode: "cover",
    },
    courseDetails: {
      flex: 1,
      padding: 12,
    },
    courseTitle: {
      fontSize: 16,
      fontWeight: "bold",
      marginBottom: 4,
    },
    courseProvider: {
      fontSize: 14,
      color: "#666",
      marginBottom: 4,
    },
    courseDifficulty: {
      fontSize: 14,
      color: "#888",
    },
  });

  export default styles;