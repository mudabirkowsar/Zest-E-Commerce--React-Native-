import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import HomeScreen from '../screens/Home/HomeScreen'
import CartScreen from '../screens/Cart/CartScreen';
import OrderScreen from '../screens/Home/OrderScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';

export default function TabNavigation() {

  const Tab = createBottomTabNavigator()

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#1a1a2e', // Change this to your desired color
          position: 'static',
          bottom: 0,
          left: 0,
          right: 0,
          height: 65,
        },
        tabBarActiveTintColor: '#ff6600', // Active tab color
        tabBarInactiveTintColor: '#999999', // Inactive tab color
      }}
    >

      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home', headerShown: false,
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons name="home-outline" size={32} color={focused ? "#ff6600" : "#999999"} />
          ),
        }} />

      <Tab.Screen
        name="OrderScreen"
        component={OrderScreen}
        options={{
          tabBarLabel: 'Orders', headerShown: false,
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons name="calendar-outline" size={32} color={focused ? "#ff6600" : "#999999"} />
          ),
        }} />

      <Tab.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          tabBarLabel: 'Cart', headerShown: false,
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons name="cart-outline" size={32} color={focused ? "#ff6600" : "#999999"} />
          ),
        }} />

      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile', headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Fontisto name="person" size={32} color={focused ? "#ff6600" : "#999999"}  />
          ),
        }} />
    </Tab.Navigator>
  )
}