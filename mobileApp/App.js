
import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Login} from './src/Login.js';
import {SchedulePage} from './src/SchedulerPage.js';
import {Dashboard} from './src/Dashboard.js';
import {Register} from './src/Register.js';
import {ForgotPassword} from './src/ForgotPassword.js';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
            name = "Home"
            component = {Login}
            options={{title: 'Welcome'}}
        />

        <Stack.Screen
            name = "Register"
            component = {Register}
            options={{title: 'Register'}}
        />

        <Stack.Screen
            name = "Dashboard"
            component = {Dashboard}
            options={{title: 'Dashboard'}}
        />

        <Stack.Screen
            name = "ForgotPassword"
            component = {ForgotPassword}
            options={{title: 'Reset Password'}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;