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
  courseCard: {
    width: 150,
    marginRight: 15,
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
  ratingBadge: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "#ffffff",
    borderRadius: 15,
    paddingVertical: 2,
    paddingHorizontal: 8,
  },
  ratingText: {
    fontSize: 12,
    color: "#FFB800",
    marginLeft: 4,
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
  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 4,
  },
  priceText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#0056FF",
  },
  newPriceTag: {
    fontSize: 10,
    color: "#FF3B30",
    paddingVertical: 2,
    paddingHorizontal: 4,
    backgroundColor: "#FF3B3010",
    borderRadius: 4,
  },
  mentors: {
    flexDirection: "row",
    paddingHorizontal: 20,
    marginTop: 10,
  },
  mentor: {
    alignItems: "center",
    marginRight: 15,
  },
  mentorAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  mentorName: {
    marginTop: 5,
    fontSize: 12,
    color: "#333333",
  },
  continueCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 10,
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  continueThumbnail: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  continueContent: {
    flex: 1,
    marginLeft: 10,
  },
  continueTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333333",
  },
  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  progressText: {
    fontSize: 12,
    color: "#666666",
    marginRight: 5,
  },
  progressBar: {
    flex: 1,
    height: 5,
    backgroundColor: "#E6E6E6",
    borderRadius: 3,
  },
  progressFill: {
    width: "80%", // Adjust this dynamically based on progress
    height: 5,
    backgroundColor: "#0056FF",
    borderRadius: 3,
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
