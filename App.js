import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import LayoutBasics from "./components/classes/LayoutBasics";
import AppTabs from "./navigation/AppTabs";
import AuthStack from "./navigation/AuthStack";

export default function App() {
  const loggedIn = false;

  // 2 navigators...
  // 1. Auth
  // 2. User Flow...
  return (
    <>
      <NavigationContainer>
        {/* Render auth stack if logged in , else app tabs... */}
        {!loggedIn ? <AuthStack /> : <AppTabs />}
      </NavigationContainer>
    </>
  );
}
