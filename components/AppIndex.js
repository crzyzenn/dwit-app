import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StatusBar } from "react-native";
import { ActivityIndicator } from "react-native";
import { ThemeProvider } from "react-native-elements";
import useAuth from "../hooks/useAuth";
import AppTabs from "../navigation/AppTabs";
import AuthStack from "../navigation/AuthStack";
import Center from "./Center";

const theme = {
  Input: {
    containerStyle: {
      paddingHorizontal: 0,
    },
  },
  Text: {
    style: {
      fontWeight: "bold",
    },
  },
};

export default function AppIndex() {
  const { loggedIn, loading, dark } = useAuth();
  console.log(dark);

  return (
    <ThemeProvider theme={theme} useDark={dark}>
      <StatusBar barStyle={dark ? "light-content" : "dark-content"} />
      <NavigationContainer>
        {/* Render auth stack if logged in , else app tabs... */}
        {loading ? (
          <Center>
            <ActivityIndicator />
          </Center>
        ) : !loggedIn ? (
          <AuthStack />
        ) : (
          <AppTabs />
        )}
      </NavigationContainer>
    </ThemeProvider>
  );
}
