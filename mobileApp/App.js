
import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Login} from './src/Login.js';
import {SchedulePage} from './src/SchedulerPage.js';
import {SubmitAvailabilityPage} from './src/SubmitAvailabilityPage';
import {Dashboard} from './src/Dashboard.js';
import {Register} from './src/Register.js';
import {ForgotPassword} from './src/ForgotPassword.js';
import {Settings} from './src/Settings.js';
import {ChangePassword} from './src/ChangePassword.js';

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

        <Stack.Screen
            name = "Settings"
            component = {Settings}
            options={{title: 'Settings'}}
        />

        <Stack.Screen
            name = "ChangePassword"
            component = {ChangePassword}
            options={{title: 'Change your password'}}
        />
        
        <Stack.Screen
            name = "SchedulePage"
            component = {SchedulePage}
            options={{title: 'Schedule'}}
        />
        
        <Stack.Screen
            name = "SubmitAvailabilityPage"
            component = {SubmitAvailabilityPage}
            options={{title: 'Enter Your Weekly Availability'}}
        />


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;