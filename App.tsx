//import { StatusBar } from 'expo-status-bar';
import { StatusBar } from 'react-native';
import { StyleSheet, Text, View, Image } from 'react-native';
import SignIn from './src/pages/SignIn'
import Navigator from './src/components/navbar/navigator'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ChatIn from './src/pages/ChatIn';

import { AuthProvider } from './src/contexts/AuthContext'


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    
    <SignIn></SignIn>

  );
}

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
