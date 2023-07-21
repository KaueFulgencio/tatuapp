//import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import SignIn from './src/pages/SignIn'
import Navigator from './src/components/navbar/navigator'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ChatIn from './src/pages/ChatIn';

import { AuthProvider } from './src/contexts/AuthContext'


const Stack = createNativeStackNavigator();

import { createStackNavigator } from '@react-navigation/stack';

import ChatScreen from './src/components/ChatScreen';
import WelcomeScreen from './src/components/WelcomeScreen';

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomeScreen">
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{ title: 'Bem-vindo' }}
        />
        <Stack.Screen
          name="ChatScreen"
          component={ChatScreen}
          options={{ title: 'Conversas' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  }
});
