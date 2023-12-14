import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, TextInput, Button, Pressable } from "react-native";
import { useAuth } from "../../context/AuthContext";

import { useState } from "react";
import factories from "../../redux/app/factory";
const UsernameChangeScreen = () => {
  const [username, setUsername] = useState('');
  const { user, setUser } = useAuth();
  const handleSubmit = async () => {
    try {
      const resp = await factories.changeUserName(user?._id, username, user?.email);
      if (resp?.user) {
        setUser(resp?.user)
        alert('Đổi thông tin thành công');
      }
    } catch (error) {
    }
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.infocontainer}>
        <Text style={styles.label}>Username</Text>
        <TextInput style={styles.field} placeholder="Nhập username mới" value={username} onChangeText={(text) => setUsername(text)}></TextInput>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSubmit} >
        <Text style={styles.textButton}>Save</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "white",
  },
  infocontainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "white",
    paddingLeft: 15,
    paddingRight: 15
  },

  label: {
    fontSize: 16,
    fontWeight: "bold"
  },

  field: {
    marginTop: 5,
    marginBottom: 5,
    borderWidth: 1,
    width: '100%',
    borderColor: '#ddd',
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 5,

  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    marginTop: 20
  },
  textButton: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
})

export default UsernameChangeScreen;