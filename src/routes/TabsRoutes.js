import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';

const AppTabs = createBottomTabNavigator();

import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Drink from '../screens/Drink';
import Partners from '../screens/Partners';

const TabsRoutes = () => {
  return (
    <NavigationContainer independent={true}>
      <AppTabs.Navigator
        tabBarOptions={{
          showLabel: false,
          inactiveTintColor: "#FFF",
          activeTintColor: "#FF8000",
          keyboardHidesTabBar: true,
          style: {
            position: "absolute",
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
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="beer" size={size} color={color} />
            )
          }}
        />
        <AppTabs.Screen 
          name="Partners" 
          component={Partners} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="store" size={size} color={color} />
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

export default TabsRoutes;