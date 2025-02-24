import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
  },
  banner: {
    position: 'relative', 
    height: 200, 
  },
  courseImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover', 
  },
  backButton: {
    position: 'absolute',
    top: 16, 
    left: 16, 
    zIndex: 1, 
    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
    borderRadius: 20, 
    padding: 8, 
  },
  courseImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  courseContent: {
    padding: 16,
  },
  courseTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  courseDescription: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
  },
  metadataContainer: {
    marginBottom: 16,
  },
  metadataItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  metadataText: {
    fontSize: 16,
    color: '#666',
    marginLeft: 8,
  },
  enrollButton: {
    backgroundColor: '#0056FF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  enrollButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
