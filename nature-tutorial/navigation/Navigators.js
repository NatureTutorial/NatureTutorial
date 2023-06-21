import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Telas
import Config from '../Screens/config';
import Feed from '../Screens/feed';
import Learning from '../Screens/learning';
import Profile from '../Screens/profile';
import World from '../Screens/world';
import LogIn from '../Screens/logIn';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyBottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, focused, size }) => {
          let iconName;

          if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'World') {
            iconName = focused ? 'globe' : 'globe-outline';
          } else if (route.name === 'Learning') {
            iconName = focused ? 'rose' : 'rose-outline';
          } else if (route.name === 'Feed') {
            iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
          } else if (route.name === 'Configurations') {
            iconName = focused ? 'cog' : 'cog-outline';
          }

          return <Ionicons name={iconName} color={color} size={size} />;
        },
        headerShown: false,
        tabBarStyle: { backgroundColor: 'rgba(0, 128, 86, 0.61)' },
      })}
      tabBarOptions={{
        activeTintColor: '#5271FF', // Cor do ícone ativo
        inactiveTintColor: '#004AAD', // Cor do ícone inativo
      }}>
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="World" component={World} />
      <Tab.Screen name="Learning" component={Learning} />
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Configurations" component={Config} />
    </Tab.Navigator>
  );
}

function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Log in" component={LogIn} />
        <Stack.Screen name="Tabs" component={MyBottomTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;
