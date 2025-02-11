import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "#ffffff",
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    flex: 1,
  },
  content: {
    alignItems: "center",
    marginVertical: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#ccc",
  },
  editButton: {
    position: "absolute",
    bottom: 0,
    right: "35%",
    backgroundColor: "#0066ff",
    padding: 8,
    borderRadius: 20,
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  formContainer: {
    marginTop: 10,
  },
  inputGroup: {
    marginBottom: 20,
  },
  labelContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    color: "#444",
  },
  changeLink: {
    color: "#0066ff",
    fontSize: 14,
    fontWeight: "500",
  },
  input: {
    backgroundColor: "#f5f5f5",
    padding: 14,
    borderRadius: 10,
    fontSize: 16,
    color: "#444",
  },
  selectButton: {
    backgroundColor: "#f5f5f5",
    padding: 14,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  selectButtonText: {
    fontSize: 16,
    color: "#666",
  },
  updateButton: {
    backgroundColor: "#0066ff",
    padding: 16,
    borderRadius: 30,
    alignItems: "center",
    marginVertical: 30,
  },
  updateButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
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
    
    alignItems: 'center',
    
  },
  navText: {
    fontSize: 10,
    color: '#666666',
    marginTop: 5,
  },
  navActive: {
    fontWeight: 'bold',
    color: '#0056FF', // Active text color
  },
});

export default styles;