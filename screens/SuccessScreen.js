import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { Text, useTheme } from "react-native-elements";
import { Button } from "react-native-elements/dist/buttons/Button";
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
        type="clear"
        title="Return to home."
        onPress={() => navigate("Home")}
      />
    </Center>
  );
};

export default SuccessScreen;

const styles = StyleSheet.create({});
