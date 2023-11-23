// TabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
// import RankingScreen from './RankingScreen';
// import CategoryScreen from './CategoryScreen';
// import ProfileScreen from './ProfileScreen';
import HomeScreen from './screens/HomeScreen/HomeScreen';
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
            <Ionicons  name="book-sharp"  color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={HomeScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="search" size={size}color={color} />
          ),
        }}
      />
      
      <Tab.Screen
        name="Bookmark"
        component={HomeScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="book"  color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={HomeScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
      {/* <Tab.Screen name="Ranking" component={RankingScreen} /> */}
      {/* <Tab.Screen name="Category" component={CategoryScreen} /> */}
      {/* <Tab.Screen name="Profile" component={ProfileScreen} /> */}
    </Tab.Navigator>
  );
}
