// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/
import "react-native-gesture-handler";

import * as React from "react";
import { StyleSheet } from "react-native";
import { BlurView } from 'expo-blur';

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./pages/HomeScreen";
import DetailsScreen from "./pages/DetailsScreen";
import ProfileScreen from "./pages/ProfileScreen";
import CartScreen from "./pages/CartScreen";
import ListingScreen from "./pages/ListingScreen";





const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false
        // headerTransparent: true,
        // headerTintColor: "#000",
        // headerTitleStyle: { fontWeight: "bold" },
        // headerBackground: () => (
        //   <BlurView tint="light" intensity={70} style={StyleSheet.absoluteFill} />
        // ),
        // headerRadius: 10,
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Home Page" }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{ title: "Details Page" }}
        
      />
      <Stack.Screen
        name="Listing"
        component={ListingScreen}
      />

    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: "Profile" }}
      />
    </Stack.Navigator>
  );
}

function CartStack() {
  return (
    <Stack.Navigator
      initialRouteName="Cart"
      screenOptions={{
        headerShown: false
        
      }}

    >
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{ title: "Cart Page" }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{ title: "Details Page" }}
      />
      {/* <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: "Profile Page" }}
      /> */}
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      
      <Tab.Navigator
        initialRouteName="HomeStack"
        tabBarOptions={{
          activeTintColor: "#3B1CFF",
          style: {
            position: 'absolute', 
            opacity: 0.8,
            borderTopRightRadius:25,
            borderTopLeftRadius:25
          },
        }}
        screenContainerStyle ={{opacity:1, backgroundColor:"#000"}}
      >
        <Tab.Screen
          name="ProfileStack"
          component={ProfileStack}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name="CartStack"
          component={CartStack}
          options={{
            tabBarLabel: "Cart",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cart-outline" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
     
      
    </NavigationContainer>
  );
}
export default App;

