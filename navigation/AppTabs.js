import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import AppStack from "./AppStack";

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const AppTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        return {
          tabBarIcon: ({ color, size, focused }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "Settings") {
              iconName = "settings";
            }

            return (
              // <Feather
              //   name={iconName}
              //   size={focused ? 40 : size}
              //   color={color}
              // />
              <Feather name={iconName} size={size} color={color} />
            );
          },
        };
      }}
      tabBarOptions={{
        activeTintColor: "teal",
        inactiveTintColor: "#aaa",
      }}
    >
      <Tab.Screen name="Home" component={AppStack} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default AppTabs;
