import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { ColorTokens } from './constants/tokens';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import InterviewScreen from './screens/InterviewScreen';
import Icon from './components/icon/Icon';
import { iconMap } from './components/icon/iconMap';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            // Map route to iconMap key
            let iconKey: keyof typeof iconMap = 'home';
            if (route.name === 'Hem') iconKey = 'home';
            else if (route.name === 'Intervju') iconKey = 'videokamera';
            else if (route.name === 'Profil') iconKey = 'profile';

            // use 'md' for tabBar icons
            const iconSize: 'md' = 'md';
            const iconColor = focused ? 'primary' : 'secondary';

            return <Icon {...iconMap[iconKey]} size={iconSize} color={iconColor} filled={focused} focused={focused} />;
          },
          tabBarActiveTintColor: ColorTokens.blue[800],
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
        <Tab.Screen name="Intervju" component={InterviewScreen} />
        <Tab.Screen name="Profil" component={ProfileScreen} />
      </Tab.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}
