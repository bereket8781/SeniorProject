import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },

  content: {
    justifyContent: "center",
    alignItems: "center",
  },

  puzzelPiece: {
    width: 450,
    height: 450,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.1,
  },

  logo: {
    width: 80,
    height: 80,
    marginBottom: 16,
  },

  title: {
    marginTop: -20,
    color: "#2563EB",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 8,
  },

  subtitle: {
    color: "#2563EB",
    fontSize: 14,
    letterSpacing: 1.5,
  },
});

export default styles;
