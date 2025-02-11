import { StyleSheet } from 'react-native';

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
    headerText: {
      color: "#ffffff",
      fontSize: 24,
      fontWeight: "bold",
    },
    postForm: {
        padding: 10,
        backgroundColor: "#fff",
        borderRadius: 10,
        marginBottom: 10,
      },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 25,
        paddingVertical: 8,
        paddingHorizontal: 12,
        backgroundColor: "#f9f9f9",
      },
      plusIcon: {
        marginRight: 10,
      },
      input: {
        flex: 1,
        fontSize: 16,
        paddingVertical: 5,
      },
      sendButton: {
        marginLeft: 10,
      },
    buttonText: {
      color: "#ffffff",
      fontWeight: "bold",
    },
    post: {
      padding: 15,
      borderBottomWidth: 1,
      borderBottomColor: "#e0e0e0",
    },
    postHeader: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 10,
    },
    avatar: {
      width: 40,
      height: 40,
      borderRadius: 20,
      marginRight: 10,
    },
    author: {
      fontWeight: "bold",
    },
    content: {
      marginBottom: 10,
    },
    actions: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 10,
    },
    actionButton: {
      flexDirection: "row",
      alignItems: "center",
    },
    actionText: {
      marginLeft: 5,
    },
    commentSection: {
      marginTop: 10,
    },
    comment: {
      marginBottom: 5,
    },
    commentAuthor: {
      fontWeight: "bold",
    },
    commentForm: {
      flexDirection: "row",
      marginTop: 10,
    },
    commentInput: {
      flex: 1,
      borderWidth: 1,
      borderColor: "#e0e0e0",
      borderRadius: 5,
      padding: 5,
      marginRight: 10,
    },
    commentButton: {
      backgroundColor: "#0056FF",
      padding: 5,
      borderRadius: 5,
      justifyContent: "center",
    },
    postImage: {
        width: "100%",
        height: 200,
        borderRadius: 10,
        marginVertical: 10,
      },
      previewImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginTop: 10,
        alignSelf: "center",
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
  })

  export default styles;