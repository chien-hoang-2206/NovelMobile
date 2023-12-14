// AppNavigator.js
import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import { Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ForgotPassword from './screens/ForgotPassword/ForgotPassword';
import { useAuth } from './context/AuthContext';
import { useNavigation } from '@react-navigation/native';
import SignUp from './screens/SignUpScreen/SignUp';
import NovelInfo from './screens/NovelInfo/NovelInfo';
import Chapter from './screens/Chapter/Chapter';
const Stack = createStackNavigator();

function AppNavigator() {
  const { user } = useAuth();
  const navigation = useNavigation();
  useEffect(() => {
    if (user?._id) {
      // User is logged in, navigate to the "App" screen
      navigation.replace = 'App';
    }
  }, [user]);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="App"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NovelInfo"
        component={NovelInfo}
        options={{
          headerShown: true,
          title: '',
        }}
      />
      <Stack.Screen
        name="Chapter"
        component={Chapter}
        options={{
          headerShown: true,
          title: '',
        }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: true,
          title: 'Your Website Name',
          headerTitleAlign: 'center',
          headerLeft: null,
          headerTitleStyle: {
            fontSize: 20,
          },
          headerTitleContainerStyle: {
            flexDirection: 'row',
            alignItems: 'center',
          },
          headerTitle: () => (
            <>
              <Ionicons name="md-logo-snapchat" size={24} color="black" />
              <Text>`  WUXIAWORLD`</Text>
            </>
          ),
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerShown: true,
          title: 'Your Website Name',
          headerTitleAlign: 'center',
          headerLeft: null,
          headerTitleStyle: {
            fontSize: 20,
          },
          headerTitleContainerStyle: {
            flexDirection: 'row',
            alignItems: 'center',
          },
          headerTitle: () => (
            <>
              <Ionicons name="md-logo-snapchat" size={24} color="black" />
              <Text>`  WUXIAWORLD`</Text>
            </>
          ),
        }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{
          headerShown: true,
          title: 'Your Website Name',
          headerTitleAlign: 'center',
          headerLeft: null,
          headerTitleStyle: {
            fontSize: 20,
          },
          headerTitleContainerStyle: {
            flexDirection: 'row',
            alignItems: 'center',
          },
          headerTitle: () => (
            <>
              <Ionicons name="md-logo-snapchat" size={24} color="black" />
              <Text>`  WUXIAWORLD`</Text>
            </>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default AppNavigator;
