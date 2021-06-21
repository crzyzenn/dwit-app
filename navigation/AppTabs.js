import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import AppStack from "./AppStack";
import SettingsScreen from "../screens/SettingsScreen";
import { colors, useTheme } from "react-native-elements";

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
    </View>
  );
}

const AppTabs = () => {
  const { theme } = useTheme();
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
          tabBarVisible: true,
        };
      }}
      tabBarOptions={{
        activeTintColor: theme.colors.black,
        inactiveTintColor: "gray",
        style: {
          backgroundColor: theme.colors.white,
        },
      }}
    >
      <Tab.Screen name="Home" component={AppStack} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default AppTabs;
