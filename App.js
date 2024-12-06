import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupSceen'; 
import HomeScreen from './screens/HomeScreen'; 
import TestDriveScreen from "./screens/TestDriveScreen";
import CarFilterScreen from "./screens/CarFilterScreen";
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="TestDrive" component={TestDriveScreen}/>
        <Stack.Screen name="CarFilter" component={CarFilterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


