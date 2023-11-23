// AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
// import LoginScreen from './LoginScreen';
// import SignupScreen from './SignupScreen';
const Stack = createStackNavigator();
function AppNavigator() {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{ headerShown: false }}
      /> */}
      {/* // TabNavigator có thể nhúng như một màn hình */}
      <Stack.Screen
        name="App"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
export default AppNavigator;
