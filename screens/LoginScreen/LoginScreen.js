import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
const LOGIN_URL = "/api/accounts/login";

import axios from '../../api/axios'
import { useAuth } from '../../context/AuthContext';
const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useAuth();
  const handleSubmit = () => {
    axios
      .post(LOGIN_URL, {
        email: username,
        password: password,
      })
      .then(async (response) => {

        if (response.data.user) {
          setUser(response.data.user);
          navigation.navigate('App');
        } else {
          alert('Login failed');
        }
      })
      .catch((error) => {
        alert(error.response?.data?.error || 'An error occurred');
      });
  };
  const handleLoginWithGoogle = () => {
    // Implement login with Google logic here
    console.log('Login with Google');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.googleButton} onPress={handleLoginWithGoogle}>
        <AntDesign name="google" size={24} color="#111" style={styles.googleLogo} />
        <Text style={styles.buttonTextGG}>Login with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.linkText}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.linkText}>Sign Up</Text>
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
  buttonTextGG: {
    color: '#111',
    textAlign: 'center',
    fontWeight: 'bold',
    paddingBottom: 5,
    paddingLeft: 10,
    fontSize: 24,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    width: '80%',
    marginBottom: 20,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  googleLogo: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  linkText: {
    color: '#3498db',
    fontSize: 16,
    marginTop: 10,
  },
});

export default LoginScreen;
