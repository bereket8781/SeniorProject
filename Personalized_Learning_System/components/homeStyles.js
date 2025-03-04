import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    backgroundColor: "#0056FF",
    padding: 20,
    paddingTop: 50,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  greeting: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  greetingText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
  },
  subGreetingText: {
    fontSize: 16,
    color: "#ffffff",
    marginTop: 4,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    marginTop: 20,
    padding: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#333333",
    marginLeft: 10,
  },
  filterButton: {
    marginLeft: 10,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333",
  },
  seeAll: {
    fontSize: 14,
    color: "#0056FF",
  },
  categories: {
    flexDirection: "row",
    paddingHorizontal: 20,
    marginTop: 10,
  },
  category: {
    alignItems: "center",
    marginRight: 15,
  },
  categoryIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  categoryText: {
    marginTop: 5,
    fontSize: 14,
    color: "#333333",
  },
  courseRow: {
    flexDirection: "row",
    paddingHorizontal: 20,
    marginTop: 10,
  },
  courseGrid: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  
  courseCard: {
    flex: 1,
    margin: 10,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  
  courseImage: {
    width: "100%",
    height: 100,
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
    padding: 10,
  },
  courseTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333333",
  },
  instructorRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  instructorText: {
    fontSize: 12,
    color: "#666666",
    marginLeft: 4,
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
