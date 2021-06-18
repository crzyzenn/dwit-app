import React from "react";
import { Button, Text } from "react-native";
import Center from "../components/Center";

const HomeScreen = ({ navigation, route }) => {
  return (
    <Center>
      <Text>Welcome to home screen.</Text>
      <Button
        title="Go to Search Screen"
        onPress={() => navigation.navigate("Search")}
      />
    </Center>
  );
};

export default HomeScreen;
