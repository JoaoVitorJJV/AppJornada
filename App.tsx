import React from 'react';
import { Text, View } from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Cadastrar from './src/screens/Cadastro';
import Logar from './src/screens/Logar';
import TrilhaHardSkill from './src/screens/Trilha';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen
          options={{
            headerShown: false
          }}
          name="Logar"
          component={Logar}
        />
        <Stack.Screen
          options={{
            headerShown: false
          }}
          name="Cadastro"
          component={Cadastrar}
        />
        <Stack.Screen
          options={{
            headerShown: false
          }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          name="Home"
          options={{
            headerShown: false
          }}
          component={Home}
        />
         <Stack.Screen
          name="TrilhaHS"
          options={{
            headerShown: false
          }}
          component={TrilhaHardSkill}
        />
      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default App