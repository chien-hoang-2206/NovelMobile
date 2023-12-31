import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './screens/HomeScreen/HomeScreen';
// import SearchScreen from './screens/SearchScreen/SearchScreen';
import ProfileScreen from './screens/ProfileScreen/ProfileScreen';
import SearchScreens from './screens/SearchScreen/Search';
import RankingScreen from './screens/RankingScreen/RankingScreen';
import Bookmark from './screens/Bookmark/Bookmark';
const Tab = createBottomTabNavigator();
export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: '',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />          
          )}}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreens}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="search" size={size} color={color} />
          ),
        }}
      />
       <Tab.Screen
        name="Ranking"
        component={RankingScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="star-rate" size={size} color={color} />          ),
        }}
      />

      <Tab.Screen
        name="Bookmark"
        component={Bookmark}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="book" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: '',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
