import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Platform,
  SafeAreaView,
  Modal,
  StyleSheet,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import styles from "./learningStyles";
import { collection, doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db, auth } from "../firebaseConfig";
//import { getAuth } from "firebase/auth";

const CustomCheckbox = ({ value, onValueChange }) => (
  <TouchableOpacity
    onPress={() => onValueChange(!value)}
    style={{
      width: 24,
      height: 24,
      borderWidth: 2,
      borderColor: '#000',
      backgroundColor: value ? '#000' : '#fff',
      marginRight: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 4,
    }}
  >
    {value && <Text style={{ color: '#fff' }}>✓</Text>}
  </TouchableOpacity>
);

const LearningAssessmentForm = ({navigation}) => {
  const [formData, setFormData] = useState({
    status: "",
    goals: [],
    familiarAreas: [],
    proficiency: {
      programming: "",
      algorithms: "",
      hardware: "",
    },
    priorExperience: [],
    interests: [],
    learningPreferences: [],
    weeklyTime: "",
    primaryGoal: "",
    preferredCourses: [],
    reverseString: "",
    urlExplanation: "",
    bigOExplanation: "",
  });

  const [isModalVisible, setModalVisible] = useState(false);

  const handleInputChange = (name, value) => {
    if (name.startsWith("proficiency.")) {
      const [, field] = name.split(".");
      setFormData((prev) => ({
        ...prev,
        proficiency: {
          ...prev.proficiency,
          [field]: value,
        },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleCheckboxChange = (name, value, checked) => {
    setFormData((prev) => ({
      ...prev,
      [name]: checked
        ? [...prev[name], value]
        : prev[name].filter((item) => item !== value),
    }));
  };

  const handleSubmit = async () => {
    const userId = auth.currentUser?.uid;
    if (!userId) {
        alert("User is not authenticated.");
        return;
    }
    try {
      const assessmentId = new Date().getTime().toString();
  
      // Save the form data to Firestore
      await setDoc(doc(db, "userAssessments", assessmentId), {
        userId, 
        ...formData,
        timestamp: serverTimestamp(),
      });
  
      alert("Form submitted! Check the console for data.");
      console.log("Form data saved:", formData);
    } catch (error) {
      console.error("Error saving form data: ", error);
      alert("An error occurred while submitting the form.");
    }
  };

  const handleSkip = () => {
    setModalVisible(true); 
  };

  const handleConfirmSkip = () => {
    setModalVisible(false);
    navigation.navigate("Login"); 
  };

  const handleCancelSkip = () => {
    setModalVisible(false); 
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleSkip} style={styles.skipButton}>
          <Text style={styles.skipButtonText}>Skip</Text>
        </TouchableOpacity>
        <Text style={[styles.title, { color: '#000' }]}>Learning Assessment Form</Text>
      </View>
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>General Information</Text>
          <View style={styles.field}>
            <Text style={styles.label}>
              What is your academic or professional status
            </Text>
            <Picker
              selectedValue={formData.status}
              onValueChange={(value) => handleInputChange("status", value)}
              style={styles.picker}
            >
              <Picker.Item label="Select an option" value="" />
              <Picker.Item label="High school student" value="highSchool" />
              <Picker.Item label="University student" value="university" />
              <Picker.Item label="Working professional" value="working" />
              <Picker.Item label="Other" value="other" />
            </Picker>
          </View>

        <View style={styles.field}>
          <Text style={styles.label}>
            What are your primary goal for learning Computer Science or IT{" "}
          </Text>
          {[
            "Gain foundational knowledge",
            "Specialize in a particular field",
            "Prepare for exam or certification",
            "Improve job prospects",
            "Build specific projects",
          ].map((goal) => (
            <View key={goal} style={styles.checkboxContainer}>
              <CustomCheckbox
                value={formData.goals.includes(goal)}
                onValueChange={(newValue) =>
                  handleCheckboxChange("goals", goal, newValue)
                }
              />
              <Text style={styles.checkboxLabel}>{goal}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skill Assessment</Text>
        <View style={styles.field}>
          <Text style={styles.label}>
            Which of the following areas are you familiar with?
          </Text>
          {[
            "Programming basics",
            "Algorithms and data structure",
            "Database and SQL",
            "Web development",
            "Mobile app development",
            "Networking",
            "Cybersecurity",
            "AI/ML",
          ].map((area) => (
            <View key={area} style={styles.checkboxContainer}>
              <CustomCheckbox
                value={formData.familiarAreas.includes(area)}
                onValueChange={(newValue) =>
                  handleCheckboxChange("familiarAreas", area, newValue)
                }
              />
              <Text style={styles.checkboxLabel}>{area}</Text>
            </View>
          ))}
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>
            Rate your proficiency in the follwing area:
          </Text>
          {[
            {
              name: "programming",
              label: "Programming languages (e.g., Python, Java, C++)",
            },
            { name: "algorithms", label: "Problem-solving with algorithms" },
            {
              name: "hardware",
              label: "Understanding of computer hardware and operating systems",
            },
          ].map(({ name, label }) => (
            <View key={name} style={styles.field}>
              <Text style={styles.sublabel}>{label}</Text>
              <Picker
                selectedValue={formData.proficiency[name]}
                onValueChange={(value) =>
                  handleInputChange(`proficiency.${name}`, value)
                }
                style={styles.picker}
              >
                <Picker.Item label="Select level" value="" />
                <Picker.Item label="Beginner" value="beginner" />
                <Picker.Item label="Intermediate" value="intermediate" />
                <Picker.Item label="Advanced" value="advanced" />
              </Picker>
            </View>
          ))}
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>
            Do you have prior experience with any of these tools or platforms?
          </Text>
          {[
            "Git/GitHUb",
            "IDEs (e.g., Visual Studio Code, Intellij)",
            "Cloud platforms (ArrowUpSquare, AlignHorizontalDistributeEnd, GCP)",
            "Other",
          ].map((tool) => (
            <View key={tool} style={styles.checkboxContainer}>
              <CustomCheckbox
                value={formData.priorExperience.includes(tool)}
                onValueChange={(newValue) =>
                  handleCheckboxChange("priorExperience", tool, newValue)
                }
              />
              <Text style={styles.checkboxLabel}>{tool}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Interests and Preferences</Text>
        <View style={styles.field}>
          <Text style={styles.label}>
            Which areas of field are you most interested in?
          </Text>
          {[
            "Software Development",
            "Web Development",
            "Mobile App Development",
            "Artificial Intelligence / Machine Learning",
            "Cybersecurity",
            "Game Development",
            "Cloud COmputing",
          ].map((interest) => (
            <View key={interest} style={styles.checkboxContainer}>
              <CustomCheckbox
                value={formData.interests.includes(interest)}
                onValueChange={(newValue) =>
                  handleCheckboxChange("interests", interest, newValue)
                }
              />
              <Text style={styles.checkboxLabel}>{interest}</Text>
            </View>
          ))}
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>
            What type of learning materials do you prefer?
          </Text>
          {[
            "Live video lectures",
            "Pre-recorded tutorials",
            "Interactive exercises",
            "Written notes and documentation",
          ].map((preference) => (
            <View key={preference} style={styles.checkboxContainer}>
              <CustomCheckbox
                value={formData.learningPreferences.includes(preference)}
                onValueChange={(newValue) =>
                  handleCheckboxChange(
                    "learningPreferences",
                    preference,
                    newValue
                  )
                }
              />
              <Text style={styles.checkboxLabel}>{preference}</Text>
            </View>
          ))}
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>
            How much time can you dedicate to learning each week?
          </Text>
          <Picker
            selectedValue={formData.weeklyTime}
            onValueChange={(value) => handleInputChange("weeklyTime", value)}
            style={styles.picker}
          >
            <Picker.Item label="Select an option" value="" />
            <Picker.Item label="Less Than 5 hours" value="less5" />
            <Picker.Item label="5-10 hours" value="5-10" />
            <Picker.Item label="10-20 hours" value="10-20" />
            <Picker.Item label="20+ hours" value="20plus" />
          </Picker>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Goals and Outcomes</Text>
        <View style={styles.field}>
          <Text style={styles.label}>What is your primary learning goals?</Text>
          <Picker
            selectedValue={formData.primaryGoal}
            onValueChange={(value) => handleInputChange("primaryGoal", value)}
            style={styles.picker}
          >
            <Picker.Item label="Select an option" value="" />
            <Picker.Item
              label="Build foundational knowledge in Computer Science"
              value="foundational"
            />
            <Picker.Item
              label="Specialize in a specific field or skill"
              value="specialize"
            />
            <Picker.Item
              label="Complete project or portfolio"
              value="project"
            />
            <Picker.Item
              label="Prepare for certification exam"
              value="certifications"
            />
          </Picker>
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>
            What type of courses would you prefer to start with?
          </Text>
          {[
            "Beginner-friendly",
            "Hands-on and project-based",
            "Theory-focused",
          ].map((course) => (
            <View key={course} style={styles.checkboxContainer}>
              <CustomCheckbox
                value={formData.preferredCourses.includes(course)}
                onValueChange={(newValue) =>
                  handleCheckboxChange("preferredCourses", course, newValue)
                }
              />
              <Text style={styles.checkboxLabel}>{course}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          Initial Assessment Questions (Optional)
        </Text>
        <View style={styles.field}>
          <Text style={styles.label}>
            Write a simple program in any language to reverse a string
          </Text>
          <TextInput
            style={styles.textArea}
            multiline
            numberOfLines={4}
            onChangeText={(text) => handleInputChange("reverseString", text)}
            value={formData.reverseString}
          />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>
            Explain what happens when you type a URL into a browser and press
            Enter
          </Text>
          <TextInput
            style={styles.textArea}
            multiline
            numberOfLines={4}
            onChangeText={(text) => handleInputChange("urlExplanation", text)}
            value={formData.urlExplanation}
          />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>What does "Big-O Notation" measure?</Text>
          <TextInput
            style={styles.textArea}
            multiline
            numberOfLines={4}
            onChangeText={(text) => handleInputChange("bigOExplanation", text)}
            value={formData.bigOExplanation}
          />
        </View>
      </View>

      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => {
         handleSubmit(); // Save form data to Firestore
        navigation.navigate("HomePage"); // Navigate to the home page
        }}
      >
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>

      {/* Confirmation Modal */}
      <Modal
        transparent={true}
        animationType="slide"
        visible={isModalVisible}
        onRequestClose={handleCancelSkip}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Skip Assessment</Text>
            <Text style={styles.modalMessage}>
              By skipping this assessment, you will get a general course suggestion. Are you sure you want to skip?
            </Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity onPress={handleConfirmSkip} style={styles.modalButton}>
                <Text style={styles.modalButtonText}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleCancelSkip} style={styles.modalButton}>
                <Text style={styles.modalButtonText}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  </SafeAreaView>
);
}
export default LearningAssessmentForm;
