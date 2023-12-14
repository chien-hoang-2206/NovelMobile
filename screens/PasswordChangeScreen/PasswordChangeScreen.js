import text from "@ant-design/react-native/lib/text";
import { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, TextInput, Button, Pressable } from "react-native";
import { useAuth } from "../../context/AuthContext";
import factories from "../../redux/app/factory";

const PasswordChangeScreen =() =>{

  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [reloadNewPassowrd, setReloadNewPassword] = useState('');
  const {user,setUser} = useAuth();
  const handleSubmit = async()=>{
    if(newPassword === reloadNewPassowrd){
      try{
        const resp = await factories.changePassword(user?._id, user?.password, newPassword);
        if ( resp?.user){
          setUser(resp?.user);
          alert('Update Success');
        }
      } catch(error){}
    } else{
      alert('Mật khẩu không khớp');
    }
  }

    return(
        <ScrollView style = {styles.container}>
            <View style = {styles.infocontainer}>
                  <Text style= {styles.label}>Mật Khẩu Cũ</Text>
                  <TextInput style= {styles.field} placeholder="Nhập mật khẩu cũ" value={oldPassword} onChangeText={(text)=>setOldPassword(text)}></TextInput>

                  <Text style= {styles.label}>Mật Khẩu Mới</Text>
                  <TextInput style= {styles.field} placeholder="Nhập mật khẩu mới" value={newPassword} onChangeText={(text)=>setNewPassword(text)}></TextInput>

                  <Text style= {styles.label}>Nhập Lại</Text>
                  <TextInput style= {styles.field} placeholder="Nhập lại mật khẩu mới" value={reloadNewPassowrd} onChangeText={(text)=> setReloadNewPassword(text)}></TextInput>
            </View>
           <TouchableOpacity style={styles.button} onPress={handleSubmit}>
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

export default PasswordChangeScreen;