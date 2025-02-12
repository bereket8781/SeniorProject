"use client";

import { useState } from "react";
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
import { useNavigation } from "@react-navigation/native";
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
        {/* Plus icon inside input */}
        <TouchableOpacity onPress={pickImage} style={styles.plusIcon}>
          <Feather name="plus" size={24} color="#0056FF" />
        </TouchableOpacity>

        {/* Input Field */}
        <TextInput
          style={styles.input}
          value={content}
          onChangeText={setContent}
          placeholder="What's on your mind?"
          multiline
        />

        {/* Send button */}
        <TouchableOpacity onPress={handleSubmit} style={styles.sendButton}>
          <Feather name="send" size={24} color="#0056FF" />
        </TouchableOpacity>
      </View>

      {/* Image Preview */}
      {image && <Image source={{ uri: image }} style={styles.previewImage} />}
    </View>
  );
}

// Comment section component
function CommentSection({ comments, onAddComment }) {
  const [newComment, setNewComment] = useState("");

  const handleSubmit = () => {
    if (newComment.trim()) {
      onAddComment({ author: "Current User", content: newComment.trim() });
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
function Post({
  id,
  author,
  content,
  image,
  likes: initialLikes,
  comments: initialComments,
}) {
  const [likes, setLikes] = useState(initialLikes);
  const [comments, setComments] = useState(initialComments);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setLikes(isLiked ? likes - 1 : likes + 1);
    setIsLiked(!isLiked);
  };

  const handleShare = () => {
    console.log("Sharing post:", id);
  };

  const addComment = (newComment) => {
    setComments([...comments, newComment]);
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
      <CommentSection comments={comments} onAddComment={addComment} />
    </View>
  );
}

// Mock data
const mockPosts = [
  {
    id: 1,
    author: "Alice",
    content: "Hello, Circle!",
    likes: 5,
    comments: [{ author: "Bob", content: "Hi Alice!" }],
  },
  {
    id: 2,
    author: "Bob",
    content: "React is awesome!",
    likes: 10,
    comments: [],
  },
  {
    id: 3,
    author: "Charlie",
    content: "Check out this cool UI!",
    likes: 15,
    comments: [],
  },
];

export default function Chat() {
  const [posts, setPosts] = useState(mockPosts);
  const [page, setPage] = useState(1);
  const navigation = useNavigation(); 
  const [activeTab, setActiveTab] = useState("Chat"); // New state to track active tab

  const loadMorePosts = () => {
    const newPosts = mockPosts.slice(page * 3, (page + 1) * 3);
    setPosts([...posts, ...newPosts]);
    setPage(page + 1);
  };

  const addPost = ({ content, image }) => {
    const newPost = {
      id: posts.length + 1,
      author: "Current User",
      content,
      image,
      likes: 0,
      comments: [],
    };
    setPosts([newPost, ...posts]);
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
        onEndReached={loadMorePosts}
        onEndReachedThreshold={0.1}
        renderItem={({ item }) => (
          <Post
            id={item.id}
            author={item.author}
            content={item.content}
            image={item.image}
            likes={item.likes}
            comments={item.comments}
          />
        )}
      />

      {/* Bottom Navigation Bar */}
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
