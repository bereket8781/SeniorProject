import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  backIcon: {
    width: 24,
    height: 24,
    color: "#666",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    flex: 1,
  },
  searchContainer: {
    paddingTop: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  searchWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  searchIcon: {
    color: "#666",
  },
  searchInput: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 8,
    fontSize: 16,
  },
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingBottom: 16,
  },
  tab: {
    paddingVertical: 8,
  },
  tabText: {
    fontSize: 16,
    color: "#666",
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#0056FF",
  },
  activeTabText: {
    color: "#0056FF",
    fontWeight: "600",
  },
  pillsContainer: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  pill: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: "#f0f0f0",
    marginRight: 8,
  },
  pillText: {
    fontSize: 14,
    color: "#666",
  },
  activePill: {
    backgroundColor: "#0056FF",
  },
  activePillText: {
    color: "#fff",
  },
  accordionContainer: {
    paddingHorizontal: 16,
  },
  accordionItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  accordionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  accordionTitle: {
    fontSize: 16,
    color: "#333",
  },
  accordionContent: {
    paddingTop: 8,
    fontSize: 14,
    color: "#666",
  },
  contactTitle: {
    flexDirection: "row",
    alignItems: "center",
  },
  contactIcon: {
    color: "#666",
    marginRight: 8,
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
    fontWeight: "bold",
    color: "#0056FF",
  },
});

export default styles;