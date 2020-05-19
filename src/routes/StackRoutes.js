import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import CheckAge from '../screens/CheckAge';
import PhoneForm from '../screens/PhoneForm';
import CodeForm from '../screens/CodeForm';
import CpfForm from '../screens/CpfForm';
import UserDataForm from '../screens/UserDataForm';

import TabsRoutes from './TabsRoutes'; 

const StackRoutes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator 
        initialRouteName="TabsRoutes"
        headerMode="none"
      >
        <AppStack.Screen name="CheckAge" component={CheckAge}/>
        <AppStack.Screen name="PhoneForm" component={PhoneForm}/>
        <AppStack.Screen name="CodeForm" component={CodeForm}/>
        <AppStack.Screen name="CpfForm" component={CpfForm}/>
        <AppStack.Screen name="UserDataForm" component={UserDataForm}/>
        
        <AppStack.Screen name="TabsRoutes" component={TabsRoutes}/>
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

export default StackRoutes;

