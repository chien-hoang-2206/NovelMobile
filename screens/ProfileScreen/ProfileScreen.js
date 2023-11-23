import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useAuth } from "../../context/AuthContext";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const { user } = useAuth();

  const handleLogout = async () => {
    // Clear user data from AsyncStorage and navigate to the login screen
    await AsyncStorage.clear();
    navigation.navigate('Login'); // Replace 'Login' with the name of your login screen
  };

  return (
    <ScrollView style={styles.container}>
      {/* Cover Photo */}
      <Image
        source={{
          uri: 'cover_photo_url_here', // Replace with the actual cover photo URL
        }}
        style={styles.coverPhoto}
      />

      <View style={styles.profileContainer}>
        {/* Display user avatar */}
        <Image
          source={{
            uri: user?.avatarLink,
          }}
          style={styles.avatar}
        />

        {/* Display user information */}
        <Text style={styles.username}>{user?.name}</Text>
        <Text style={styles.bio}>Passionate about reading and exploring new worlds. 📚✨</Text>
        {/* Add more user information as needed */}

        {/* Options */}
        <View style={styles.optionsContainer}>
          <View style={styles.optionBlock}>
            <TouchableOpacity style={styles.optionButton}>
              <Ionicons name="person-outline" color="black" size={24} />
              <Text style={styles.optionText}>Manage Profile</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.optionBlock}>
            <TouchableOpacity style={styles.optionButton}>
              <Ionicons name="heart-outline" color="black" size={24} />
              <Text style={styles.optionText}>Favorite Stories</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.optionBlock}>
            <TouchableOpacity style={styles.optionButton}>
              <Ionicons name="settings-outline" color="black" size={24} />
              <Text style={styles.optionText}>Account Settings</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Additional Tasks */}
        <View style={styles.tasksContainer}>
          <View style={styles.taskBlock}>
            <TouchableOpacity style={styles.taskButton}>
              <Ionicons name="bookmark-outline" color="black" size={24} />
              <Text style={styles.taskText}>Read Later</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.taskBlock}>
            <TouchableOpacity style={styles.taskButton}>
              <Ionicons name="time-outline" color="black" size={24} />
              <Text style={styles.taskText}>History</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.taskBlock}>
            <TouchableOpacity style={styles.taskButton}>
              <Ionicons name="star-outline" color="black" size={24} />
              <Text style={styles.taskText}>Rated Stories</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Logout button */}
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Ionicons name="log-out-outline" color="black" size={24} />
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
  },
  coverPhoto: {
    width: "100%",
    height: 50,
  },
  profileContainer: {
    alignItems: "center",
    backgroundColor: "white",
    marginTop: -50,
    borderRadius: 10,
    paddingVertical: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  username: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  bio: {
    fontSize: 14,
    color: "#555",
    marginBottom: 15,
    textAlign: "center",
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginVertical: 10,
  },
  optionBlock: {
    width: "30%",
    alignItems: "center",
  },
  optionButton: {
    alignItems: "center",
  },
  optionText: {
    marginTop: 5,
    fontSize: 14,
  },
  tasksContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginVertical: 10,
  },
  taskBlock: {
    width: "30%",
    alignItems: "center",
  },
  taskButton: {
    alignItems: "center",
  },
  taskText: {
    marginTop: 5,
    fontSize: 14,
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  logoutButtonText: {
    marginLeft: 10,
    fontSize: 18,
  },
});

export default ProfileScreen;
