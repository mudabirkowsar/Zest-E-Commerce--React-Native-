import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SplashScreen from '../screens/Home/SplashScreen'
import HomeScreen from '../screens/Home/HomeScreen'
import StartingScreen from '../screens/Auth/StartingScreen'
import SignupScreen from '../screens/Auth/SignupScreen'
import LoginScreen from '../screens/Auth/LoginScreen'
import CartScreen from '../screens/Cart/CartScreen'
import OrderScreen from '../screens/Home/OrderScreen'
import TabNavigation from './TabNavigation'

const Stack = createNativeStackNavigator()

export default function StackNavigation() {
  return (
    <Stack.Navigator initialRouteName='SplashScreen'
      screenOptions={{
        headerShown: false
      }} >
      <Stack.Screen name='SplashScreen' component={SplashScreen} />
      <Stack.Screen name='HomeScreen' component={HomeScreen} />
      <Stack.Screen name='StartingScreen' component={StartingScreen} />
      <Stack.Screen name='SignupScreen' component={SignupScreen} />
      <Stack.Screen name='LoginScreen' component={LoginScreen} />
      <Stack.Screen name ='CartScreen' component={CartScreen} />
      <Stack.Screen name='OrderScreen' component={OrderScreen} />
      <Stack.Screen name='TabNavigation' component={TabNavigation} />
    </Stack.Navigator>
  )
}