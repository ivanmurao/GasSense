import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

import Home from '../navbuttons/HomeScreen';
import TrackerScreen from '../navbuttons/TrackerScreen';
import Notifications from '../navbuttons/NotificationsScreen';
import Profile from '../navbuttons/ProfileScreen';

import HomeIcon from '../assets/HomeIcon.png';
import TrackerIcon from '../assets/TrackerIcon.png';
import NotificationIcon from '../assets/NotificationIcon.png';
import ProfileIcon from '../assets/ProfileIcon.png';

const Tab = createBottomTabNavigator();

const LandingPage = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          paddingTop: 10,  
          height: 50,
          elevation: 50,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Image source={HomeIcon} style={{ tintColor: color, width: size, height: size }} />
          ),
        }}
      />
      <Tab.Screen
        name="Tracker"
        component={TrackerScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Image source={TrackerIcon} style={{ tintColor: color, width: size, height: size }} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Image source={NotificationIcon} style={{ tintColor: color, width: size, height: size }} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Image source={ProfileIcon} style={{ tintColor: color, width: size, height: size }} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default LandingPage;
