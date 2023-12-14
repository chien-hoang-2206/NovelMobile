import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useAuth } from "../../context/AuthContext";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const { user } = useAuth();

  const handleLogout = async () => {
    // Clear user data from AsyncStorage and navigate to the login screen
    await AsyncStorage.clear();
    navigation.navigate('Login'); // Replace 'Login' with the name of your login screen
  };

  const handleEmailChange = async()=>{
    navigation.navigate('Email Change');
  }

  const handlePasswordChange = async()=>{
    navigation.navigate('Password Change');
  }

  const handleUsernameChange = async()=>{
    navigation.navigate('Username Change');
  }

  return (
    <ScrollView style = {styles.container}>
      <View style = {styles.profileContainer}>
        <Image
         source={{
            uri: user?.avatarLink,
          }}
          style={styles.avatar}
        />
        <TouchableWithoutFeedback onPress={handleUsernameChange}>
          <Text style = {styles.username}>{user?.name}</Text>
        </TouchableWithoutFeedback>
      </View>
      <View style = {styles.infocontainer}>
          <TouchableWithoutFeedback style={styles.touchableWrapper} onPress={handleEmailChange}>
            <Text style= {styles.label}>Đổi Email</Text>
          </TouchableWithoutFeedback>
      
          <TouchableWithoutFeedback style={styles.touchableWrapper} onPress={handlePasswordChange}>
            <Text style= {styles.label}>Đổi Password</Text>
          </TouchableWithoutFeedback>

      </View>
      {/* Logout button */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Ionicons name="log-out-outline" color="black" size={24} />
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>  
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor:"white"
  },
  coverPhoto: {
    width: "100%",
    height: 50,
  },
  profileContainer: {
    alignItems: "center",
    backgroundColor: "white",
    marginTop: -8,
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
    marginBottom: 3,
  },
  bio: {
    fontSize: 14,
    color: "#555",
    marginBottom: 15,
    textAlign: "center",
  },
  infocontainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    gap: 5
  },
  label:{
    fontSize:16,
    fontWeight:"bold",
    borderWidth:0.5,
    textAlign:"center",
    backgroundColor:"grey",
    borderColor:"black",
    paddingTop:3,
    paddingBottom:3,
    borderRadius:30,
    color:"white"
  },
  field: {
    marginTop:5,
    marginBottom:5,
    borderWidth: 1,
    width:'100%',
    borderColor: '#ddd',
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 5, 
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    justifyContent:"center"
  },
  logoutButtonText: {
    marginLeft: 10,
    fontSize: 18,
  },
  touchableWrapper:{
    width:300,
  }
});

export default ProfileScreen;
