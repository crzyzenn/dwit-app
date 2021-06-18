import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
import AppStack from "./navigation/AppStack";
import AppTabs from "./navigation/AppTabs";
import HomeScreen from "./screens/HomeScreen";
import SearchScreen from "./screens/SearchScreen";
import SettingsScreen from "./screens/SettingsScreen";
import LayoutBasics from "./components/classes/LayoutBasics";

// eslint..
export default function App() {
  const loggedIn = false;

  return (
    <>
      {/* <InputBasics /> */}
      {/* <Calculator /> */}
      {/* <HomeScreen /> */}
      {/* <SearchScreen /> */}
      {/* <SettingsScreen /> */}

      {!loggedIn ? (
        <LayoutBasics />
      ) : (
        <NavigationContainer>
          <AppTabs />
        </NavigationContainer>
      )}
    </>
  );
}

const styles = StyleSheet.create({});
