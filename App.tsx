import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { ColorTokens } from './constants/tokens';


import HomeScreen from './screens/HomeScreen';
import JobsScreen from './screens/JobsScreen';
import ProfileScreen from './screens/ProfileScreen';


const Tab = createBottomTabNavigator();

export default function App() {
  return (

      <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: keyof typeof Ionicons.glyphMap;

            if (route.name === 'Hem') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Jobb') {
              iconName = focused ? 'briefcase' : 'briefcase-outline';
            } else if (route.name === 'Profil') {
              iconName = focused ? 'person' : 'person-outline';
            } else {
              iconName = 'help-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: ColorTokens.pink[50],
          tabBarInactiveTintColor: ColorTokens.gray[600],
          headerStyle: {
            backgroundColor: ColorTokens.blue[800],
          },
          headerTintColor: ColorTokens.white,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })}
      >
        <Tab.Screen name="Hem" component={HomeScreen} />
        <Tab.Screen name="Jobb" component={JobsScreen} />
        <Tab.Screen name="Profil" component={ProfileScreen} />
      </Tab.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
    
  );
}
