import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
//Screen
import HomeScreen from "./Screens/HomeScreen";
import SecondPage from "./Screens/SecondPage";
import StackScreen from "./Screens/StackScreen";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "black",
        tabBarStyle: {
          paddingBottom: 5,
          backgroundColor: "#FFDC64",
          borderBlockColor: "black",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ tintColor }) => (
            <Icon name="moon" color={tintColor} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Second Page"
        component={SecondPage}
        options={{
          headerShown: false,
          tabBarIcon: ({ tintColor }) => (
            <Icon name="calendar" color={tintColor} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
