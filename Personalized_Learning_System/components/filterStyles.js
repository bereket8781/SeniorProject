import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  header: {
    flexDirection: "row",

    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    paddingTop: 60,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "1A1A1A",
  },

  clearButton: {
    fontSize: 16,
    color: "#0056FF",
  },

  content: {
    flex: 1,
  },

  section: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1A1A1A",
    marginBottom: 12,
  },

  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },

  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: "#E5E5E5",
    borderRadius: 6,
    marginRight: 12,
    justifyContent: "center",
    alignItems: "center",
  },

  checkboxSelected: {
    backgroundColor: "#0056FF",
    borderColor: "#0056FF",
  },

  checkboxLabel: {
    fontSize: 16,
    color: "#1A1A1A",
  },

  applyButton: {
    backgroundColor: "#0056FF",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    margin: 20,
    borderRadius: 25,
  },

  applyButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 8,
  },
});

export default styles;
