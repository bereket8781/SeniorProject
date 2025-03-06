"use client";

import { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useNavigation, useRoute } from "@react-navigation/native";
import { db } from "../firebaseConfig";
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

function CommentSection({ postId, comments, onAddComment, username }) {
  const [newComment, setNewComment] = useState("");

  const handleSubmit = async () => {
    if (newComment.trim()) {
      const comment = { author: username, content: newComment.trim() };
      await onAddComment(postId, comment);
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

function Post({ id, author, content, image, likes, comments, onLike, onAddComment, username }) {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = async () => {
    await onLike(id, isLiked ? -1 : 1);
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
        username={username}
      />
    </View>
  );
}

export default function Chat() {
  const route = useRoute();
  const username = route.params?.username || "Guest";
  const [posts, setPosts] = useState([]);
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState("Chat");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsCollection = collection(db, "posts");
        const q = query(postsCollection, orderBy("timestamp", "desc"));
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

  const addPost = async ({ content, image }) => {
    try {
      const newPost = {
        author: username,
        content,
        image,
        likes: 0,
        comments: [],
        timestamp: new Date(),
      };

      const docRef = await addDoc(collection(db, "posts"), newPost);
      setPosts((prevPosts) => [{ id: docRef.id, ...newPost }, ...prevPosts]);
    } catch (error) {
      console.error("Error adding post:", error);
    }
  };

  const handleLike = async (postId, likeChange) => {
    try {
      const postRef = doc(db, "posts", postId);
      await updateDoc(postRef, {
        likes: increment(likeChange),
      });

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

  const handleAddComment = async (postId, comment) => {
    try {
      const postRef = doc(db, "posts", postId);
      await updateDoc(postRef, {
        comments: arrayUnion(comment),
      });

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
    <View style={{ flex: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
      >
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
                username={username}
              />
            )}
            contentContainerStyle={styles.flatListContent}
          />
        </View>
      </KeyboardAvoidingView>

      {/* Fixed Navigation Bar */}
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
