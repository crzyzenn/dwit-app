import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import useAuth from "../hooks/useAuth";
import AppTabs from "../navigation/AppTabs";
import AuthStack from "../navigation/AuthStack";

export default function AppIndex() {
  const { loggedIn } = useAuth();

  return (
    <NavigationContainer>
      {/* Render auth stack if logged in , else app tabs... */}
      {!loggedIn ? <AuthStack /> : <AppTabs />}
    </NavigationContainer>
  );
}
