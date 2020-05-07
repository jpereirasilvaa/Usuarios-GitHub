// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import DetailScreen from'./DetailScreen';
import ListFollowersScreen  from'./ListFollowersScreen';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{ title: 'Usuários do GitHub'}} component={HomeScreen} />
        <Stack.Screen name="Detail" options={{ title: 'Resultado'}} component={DetailScreen} />
        <Stack.Screen name="ListFollowersScreen" options={{ title: 'Seguidores'}} component={ListFollowersScreen } />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;