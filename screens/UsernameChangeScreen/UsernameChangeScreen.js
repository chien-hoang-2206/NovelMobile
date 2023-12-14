import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, TextInput, Button, Pressable } from "react-native";
import { useAuth } from "../../context/AuthContext";
const USERNAME_CHANGE_URL = "/api/accounts";
import axios from "../../api/axios";

import { useState } from "react";

const UsernameChangeScreen = () =>{
    const [username,setUsername]=useState('');
    const {user,setUser} = useAuth();
    console.log('user',user);
    const handleSubmit = async () => {
      axios.put(`${USERNAME_CHANGE_URL}/${user?._id}/update-username-email`, {
        username:username
      })
      .then(async(response)=>{
        if(response.data.user){
          setUser(response.data.user);
          alert('Success');
        } else{
          alert('Update Username Failed');
        }
      })
    } 
    
    return(
        <ScrollView style = {styles.container}>
            <View style = {styles.infocontainer}>
                  <Text style= {styles.label}>Username</Text>
                  <TextInput style= {styles.field} placeholder="Nhập username mới" value={username} onChangeText={(text)=>setUsername(text)}></TextInput>
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
        backgroundColor:"white",
      },
      infocontainer: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        backgroundColor: "white",
        paddingLeft: 15,
        paddingRight: 15
      },

      label:{
        fontSize:16,
        fontWeight:"bold"
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

    button:{
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'black',
      marginTop:20
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