import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack';

import { AppProvider } from './src/contexts/AppContext';

import WelcomeScreen from './src/components/WelcomeScreen';
import ProfileScreen from './src/components/ProfileScreen';
import ChatScreen from './src/components/ChatScreen';
import AddContactScreen from './src/components/AddContactScreen';
import ConfigScreen from './src/components/ConfigScreen';
import SignInScreen from './src/components/SignInScreen';
import ChatUserScreen from './src/components/ChatUserScreen';

const Stack = createStackNavigator();

const App = () => {
 
  return (
    <AppProvider> 
      <NavigationContainer>
        <Stack.Navigator initialRouteName="WelcomeScreen">
          <Stack.Screen
            name="WelcomeScreen"
            component={WelcomeScreen}
            options={{ title: 'Bem-vindo' , headerTintColor: 'black'}}
          />

      <Stack.Screen
            name="SignInScreen"
            component={SignInScreen}
            options={{ title: 'Registre-se' }}
          />

          <Stack.Screen
            name="AddContactScreen"
            component={AddContactScreen}
            options={{ title: 'Adicionar Contato' }}
          />
          <Stack.Screen
            name="ChatScreen"
            component={ChatScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="ProfileScreen"
            component={ProfileScreen}
            options={{ title: 'Perfil' }}
          />

          <Stack.Screen
            name="ConfigScreen"
            component={ConfigScreen}
            options={{ title: 'Configurações' }}
          />
          <Stack.Screen
            name="ChatUserScreen"
            component={ChatUserScreen}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;
