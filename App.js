import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Picker } from '@react-native-picker/picker';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupSceen'; 
import HomeScreen from './screens/HomeScreen'; 
import TestDriveScreen from "./screens/TestDriveScreen";
import CarFilterScreen from "./screens/CarFilterScreen";
import CarDetails1Screen from "./screens/CarDetails1Screen";
import CarDetails2Screen from "./screens/CarDetails2Screen";
import CarDetails3Screen from "./screens/CarDetails3Screen";
import BookingsScreen from './screens/BookingsScreen';
import EditBookingScreen from './screens/EditBookingScreen';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="TestDrive" component={TestDriveScreen} />
        <Stack.Screen name="CarFilter" component={CarFilterScreen} />
        <Stack.Screen name="CarDetails1" component={CarDetails1Screen}/>
        <Stack.Screen name="CarDetails2" component={CarDetails2Screen} />
        <Stack.Screen name="CarDetails3" component={CarDetails3Screen} />
        <Stack.Screen name="Bookings" component={BookingsScreen} />
        <Stack.Screen name="EditBooking" component={EditBookingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
