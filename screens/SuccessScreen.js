import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { Text, useTheme, Button } from "react-native-elements";
import Center from "../components/Center";

const SuccessScreen = ({ navigation: { navigate } }) => {
  const { theme } = useTheme();
  return (
    <Center
      style={{
        backgroundColor: theme.colors.white,
      }}
    >
      <Text
        h2
        h2Style={{
          fontWeight: "bold",
        }}
      >
        Success!
      </Text>
      <Text>Your order has been placed.</Text>
      <Button
        containerStyle={{
          marginTop: 10,
        }}
        type="solid"
        title="Return to home."
        onPress={() => navigate("Home")}
      />
    </Center>
  );
};

export default SuccessScreen;

const styles = StyleSheet.create({});
