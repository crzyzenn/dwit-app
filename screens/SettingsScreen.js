import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Center from "../components/Center";

const SettingsScreen = () => {
  return (
    <Center style={styles.searchContainer}>
      <Text>Go through your settings</Text>
    </Center>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: "orange",
  },
});

export default SettingsScreen;
