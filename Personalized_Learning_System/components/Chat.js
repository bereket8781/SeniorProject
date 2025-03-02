"use client";

import { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useNavigation, useRoute } from "@react-navigation/native";
import { db } from "../firebaseConfig"; // Import Firestore
import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  doc,
  updateDoc,
  arrayUnion,
  increment,
} from "firebase/firestore";
import styles from "./chatStyles";

// Post form component
function PostForm({ onAddPost }) {
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleSubmit = () => {
    if (content.trim() || image) {
      onAddPost({ content, image });
      setContent("");
      setImage(null);
    }
  };

  return (
    <View style={styles.postForm}>
      <View style={styles.inputContainer}>
        <TouchableOpacity onPress={pickImage} style={styles.plusIcon}>
          <Feather name="plus" size={24} color="#0056FF" />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          value={content}
          onChangeText={setContent}
          placeholder="What's on your mind?"
          multiline
        />
        <TouchableOpacity onPress={handleSubmit} style={styles.sendButton}>
          <Feather name="send" size={24} color="#0056FF" />
        </TouchableOpacity>
      </View>
      {image && <Image source={{ uri: image }} style={styles.previewImage} />}
    </View>
  );
}

// Comment section component
function CommentSection({ postId, comments, onAddComment, username }) {
  const [newComment, setNewComment] = useState("");

  const handleSubmit = async () => {
    if (newComment.trim()) {
      const comment = { author: username, content: newComment.trim() }; // Use the logged-in user's username
      await onAddComment(postId, comment); // Add comment to Firestore
      setNewComment("");
    }
  };

  return (
    <View style={styles.commentSection}>
      {comments.map((comment, index) => (
        <Text key={index} style={styles.comment}>
          <Text style={styles.commentAuthor}>{comment.author}: </Text>
          {comment.content}
        </Text>
      ))}
      <View style={styles.commentForm}>
        <TextInput
          style={styles.commentInput}
          value={newComment}
          onChangeText={setNewComment}
          placeholder="Write a comment..."
        />
        <TouchableOpacity style={styles.commentButton} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Post component
function Post({ id, author, content, image, likes, comments, onLike, onAddComment, username }) {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = async () => {
    await onLike(id, isLiked ? -1 : 1); // Update likes in Firestore
    setIsLiked(!isLiked);
  };

  const handleShare = () => {
    console.log("Sharing post:", id);
  };

  return (
    <View style={styles.post}>
      <View style={styles.postHeader}>
        <Image
          style={styles.avatar}
          source={{
            uri: `https://api.dicebear.com/6.x/initials/png?seed=${author}`,
          }}
        />
        <Text style={styles.author}>{author}</Text>
      </View>
      <Text style={styles.content}>{content}</Text>
      {image && <Image source={{ uri: image }} style={styles.postImage} />}
      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton} onPress={handleLike}>
          <Feather name="heart" size={24} color={isLiked ? "red" : "black"} />
          <Text style={styles.actionText}>{likes}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Feather name="message-circle" size={24} color="black" />
          <Text style={styles.actionText}>{comments.length}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={handleShare}>
          <Feather name="share-2" size={24} color="black" />
          <Text style={styles.actionText}>Share</Text>
        </TouchableOpacity>
      </View>
      <CommentSection
        postId={id}
        comments={comments}
        onAddComment={onAddComment}
        username={username} // Pass the logged-in user's username
      />
    </View>
  );
}

export default function Chat() {
  const route = useRoute();
  const username = route.params?.username || "Guest"; // Get the logged-in user's username
  const [posts, setPosts] = useState([]);
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState("Chat");

  // Fetch posts from Firestore on component load
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsCollection = collection(db, "posts");
        const q = query(postsCollection, orderBy("timestamp", "desc")); // Order by timestamp
        const querySnapshot = await getDocs(q);

        const postsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setPosts(postsData);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  // Add a new post to Firestore and local state
  const addPost = async ({ content, image }) => {
    try {
      const newPost = {
        author: username, // Use the logged-in user's username
        content,
        image,
        likes: 0,
        comments: [],
        timestamp: new Date(), // Add a timestamp for ordering
      };

      // Save to Firestore
      const docRef = await addDoc(collection(db, "posts"), newPost);

      // Update local state
      setPosts((prevPosts) => [{ id: docRef.id, ...newPost }, ...prevPosts]);
    } catch (error) {
      console.error("Error adding post:", error);
    }
  };

  // Update likes in Firestore
  const handleLike = async (postId, likeChange) => {
    try {
      const postRef = doc(db, "posts", postId);
      await updateDoc(postRef, {
        likes: increment(likeChange),
      });

      // Update local state
      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post.id === postId
            ? { ...post, likes: post.likes + likeChange }
            : post
        )
      );
    } catch (error) {
      console.error("Error updating likes:", error);
    }
  };

  // Add a comment to Firestore
  const handleAddComment = async (postId, comment) => {
    try {
      const postRef = doc(db, "posts", postId);
      await updateDoc(postRef, {
        comments: arrayUnion(comment),
      });

      // Update local state
      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post.id === postId
            ? { ...post, comments: [...post.comments, comment] }
            : post
        )
      );
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  const handleNavigation = (screen) => {
    setActiveTab(screen);
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Post</Text>
      </View>
      <FlatList
        ListHeaderComponent={<PostForm onAddPost={addPost} />}
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Post
            id={item.id}
            author={item.author}
            content={item.content}
            image={item.image}
            likes={item.likes}
            comments={item.comments}
            onLike={handleLike}
            onAddComment={handleAddComment}
            username={username} // Pass the logged-in user's username
          />
        )}
      />
      <View style={styles.bottomNav}>
        {[
          { icon: "home", label: "Home", screen: "HomePage" },
          { icon: "book", label: "My Course", screen: "MyCourses" },
          { icon: "bookmark", label: "Bookmark", screen: "Bookmark" },
          { icon: "message-circle", label: "Chat", screen: "Chat" },
          { icon: "user", label: "Profile", screen: "ProfilePage" },
        ].map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.navItem}
            onPress={() => handleNavigation(item.screen)}
          >
            <Feather
              name={item.icon}
              size={24}
              color={activeTab === item.screen ? "#0056FF" : "#666666"}
            />
            <Text
              style={[
                styles.navText,
                activeTab === item.screen && styles.navActive,
              ]}
            >
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}