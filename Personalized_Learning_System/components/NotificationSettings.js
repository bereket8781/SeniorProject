import React, { useState } from "react";
import { View, Text, Switch, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import styles from "./notificationStyles";

const NotificationSettings = ( { navigation }) => {
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);
  const [isVibrateEnabled, setIsVibrateEnabled] = useState(true);
  const [isGeneralNotificationEnabled, setIsGeneralNotificationEnabled] =
    useState(true);
  const [isAppUpdateEnabled, setIsAppUpdateEnabled] = useState(true);
  const [isNewServiceEnabled, setIsNewServiceEnabled] = useState(true);
  const [isNewTipsEnabled, setIsNewTipsEnabled] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Settings")}
          style={styles.backButton}
        >
          <Feather name="arrow-left" color="#000000" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notification Settings</Text>
      </View>
      <View style={styles.settingItem}>
        <Text>Sound</Text>
        <Switch value={isSoundEnabled} onValueChange={setIsSoundEnabled} />
      </View>
      <View style={styles.settingItem}>
        <Text>Vibrate</Text>
        <Switch value={isVibrateEnabled} onValueChange={setIsVibrateEnabled} />
      </View>
      <View style={styles.settingItem}>
        <Text>General Notification</Text>
        <Switch
          value={isGeneralNotificationEnabled}
          onValueChange={setIsGeneralNotificationEnabled}
        />
      </View>
      <View style={styles.settingItem}>
        <Text>App Update</Text>
        <Switch
          value={isAppUpdateEnabled}
          onValueChange={setIsAppUpdateEnabled}
        />
      </View>
      <View style={styles.settingItem}>
        <Text>New Service Avaliable</Text>
        <Switch
          value={isNewServiceEnabled}
          onValueChange={setIsNewServiceEnabled}
        />
      </View>
      <View style={styles.settingItem}>
        <Text>New Tips Available</Text>
        <Switch value={isNewTipsEnabled} onValueChange={setIsNewTipsEnabled} />
      </View>
    </View>
  );
};

export default NotificationSettings;
