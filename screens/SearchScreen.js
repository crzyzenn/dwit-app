import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Center from "../components/Center";

const SearchScreen = ({ navigation }) => {
  return (
    <Center style={styles.searchContainer}>
      <Text>Search anything you want!!</Text>
      <Button
        title="Go to Settings Screen"
        onPress={() => navigation.navigate("Settings")}
      />
    </Center>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: "teal",
  },
});

export default SearchScreen;
