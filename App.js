import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import LayoutBasics from "./components/classes/LayoutBasics";
import AppTabs from "./navigation/AppTabs";

export default function App() {
  const loggedIn = true;

  return (
    <>
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
