import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/Home/SplashScreen';
import SignupScreen from '../screens/Auth/SignupScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import TabNavigation from './TabNavigation';
import useAuth from '../hooks/useAuth';
import ProductDescriptionScreen from '../screens/Home/ProductDescriptionScreen';
import StartingScreen from '../screens/Auth/StartingScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  const { user } = useAuth();

  if (user) {
    // ✅ If user is logged in → show only TabNavigation
    return (
      <Stack.Navigator
        initialRouteName='TabNavigation'
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name='TabNavigation' component={TabNavigation} />
        <Stack.Screen name ="ProductDescriptionScreen" component={ProductDescriptionScreen} />
      </Stack.Navigator>
    );
  } else {
    // ❌ If no user → show Splash/Login/Signup flow
    return (
      <Stack.Navigator
        initialRouteName='SplashScreen'
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name='SplashScreen' component={SplashScreen} />
        <Stack.Screen name ='StartingScreen' component={StartingScreen} />
        <Stack.Screen name='SignupScreen' component={SignupScreen} />
        <Stack.Screen name='LoginScreen' component={LoginScreen} />
      </Stack.Navigator>
    );
  }
}
