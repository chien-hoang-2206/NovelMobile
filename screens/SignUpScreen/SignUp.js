import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from '../../api/axios';
import { useAuth } from '../../context/AuthContext';
const SignUP_URL = "/api/accounts/signup";

const SignUp = ({ navigation }) => {
  const { setUser } = useAuth();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function checkValidate() {
    if (username === '') {
      Alert('Nhập Username');
      return false;
    }
    if (password === '') {
      Alert('Nhập password');
      return false;
    }
    if (email === '') {
      Alert('Nhập email');
      return false;
    }
    return true;
  }
  const handleSignUp = async () => {
    // const isCheck = checkValidate();
    if (true) {
      try {
        const response = await axios.post(SignUP_URL, {
          name: username,
          email: email,
          password: password,
          avatarLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Avatar_icon_green.svg/1024px-Avatar_icon_green.svg.png",
          isAdmin: false
        });

        if (response.data.user) {
          // Navigate to the home screen using React Navigation
          setUser(response.data.user);
          navigation.navigate('Login'); // Replace 'Home' with the name of your home screen
        } else {
          // Sign up failed, show error alert
          setWarning(true);
        }
      } catch (error) {
        // Handle error
        // console.error(error.response?.data?.error || 'An error occurred');
        alert(error.response?.data?.error || 'An error occurred');
      }
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.linkText}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '35%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  input: {
    width: '80%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 15,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 8,
    width: '80%',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
  },
  linkText: {
    color: '#3498db',
    fontSize: 16,
    marginTop: 10,
  },
});

export default SignUp;
