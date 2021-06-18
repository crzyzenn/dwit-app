import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import SettingsScreen from "../screens/SettingsScreen";

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    // React example..
    // <BrowserRouter>
    //   <Switch>
    //     <Route href="/login">
    //       <HomeScreen />
    //     </Route>
    //     <Route href="/register">
    //       <HomeScreen />
    //     </Route>
    //     <Route href="/products">
    //       <HomeScreen />
    //     </Route>
    //     <Route href="/categories">
    //       <HomeScreen />
    //     </Route>
    //   </Switch>
    // </BrowserRouter>

    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};

export default AppStack;
