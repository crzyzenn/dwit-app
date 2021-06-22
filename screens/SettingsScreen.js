import React from "react";
import { Text } from "react-native";
import { Button } from "react-native-elements";
import Center from "../components/Center";
import useAuth from "../hooks/useAuth";

const SettingsScreen = () => {
  const { logout, loading } = useAuth();
  return (
    <Center>
      <Text>Go through your settings</Text>
      <Button title="Logout" loading={loading} onPress={logout} />
    </Center>
  );
};

export default SettingsScreen;
