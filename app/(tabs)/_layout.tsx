import { Tabs } from 'expo-router';
import Icon from '../../components/icon/Icon';
import { iconMap } from '../../components/icon/iconMap';
import { ColorTokens } from '../../constants/tokens';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: ColorTokens.blue[800],
        tabBarInactiveTintColor: ColorTokens.gray[600],
        
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: '',
          tabBarIcon: ({ focused }) => (
            <Icon
              {...iconMap.home}
              size="md"
              color={focused ? 'primary' : 'secondary'}
              filled={focused}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="intervju"
        options={{
          title: 'Intervju',
          tabBarIcon: ({ focused }) => (
            <Icon
              {...iconMap.videokamera}
              size="md"
              color={focused ? 'primary' : 'secondary'}
              filled={focused}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profil"
        options={{
          title: 'Profil',
          tabBarIcon: ({ focused }) => (
            <Icon
              {...iconMap.profile}
              size="md"
              color={focused ? 'primary' : 'secondary'}
              filled={focused}
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
}
