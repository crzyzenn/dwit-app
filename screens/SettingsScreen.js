import React from "react";
import { StyleSheet, Text } from "react-native";
import { Button } from "react-native-elements";
import Center from "../components/Center";
import useAuth from "../hooks/useAuth";

const SettingsScreen = () => {
  const { logout, toggleDarkMode } = useAuth();
  return (
    <Center>
      <Text style={{ color: "white" }} adjustsFontSizeToFit>
        Go through your settings
      </Text>
      <Button title="Logout" onPress={logout} />
      <Button title="toggle theme" onPress={toggleDarkMode} />
    </Center>
  );
};

export default SettingsScreen;
