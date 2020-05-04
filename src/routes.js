import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';

const AppTabs = createBottomTabNavigator();

import Home from './screens/Home';
import Profile from './screens/Profile';
import Drink from './screens/Drink';

import DrinkButton from './components/DrinkButton';

const Routes = () => {
  return (
    <NavigationContainer>
      <AppTabs.Navigator
        tabBarOptions={{
          showLabel: false,
          inactiveTintColor: "#FFF",
          activeTintColor: "#0B6121",
          style: {
            backgroundColor: "#000"
          }
        }}
      >
        <AppTabs.Screen 
          name="Home" 
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="home" size={size} color={color} />
            )
          }}
        />
        <AppTabs.Screen 
          name="Drink" 
          component={Drink}
          options={{
            tabBarIcon: ({ color }) => (
              <DrinkButton />
            )
          }}
        />
        <AppTabs.Screen 
          name="Profile" 
          component={Profile} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="user-alt" size={size} color={color} />
            )
          }}
        />
      </AppTabs.Navigator>
    </NavigationContainer>
  );
}

export default Routes;

