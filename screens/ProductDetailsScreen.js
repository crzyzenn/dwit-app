import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Center from "../components/Center";

const ProductDetailsScreen = ({ navigation }) => {
  return (
    <Center style={styles.searchContainer}>
      <Text>Product description....</Text>
    </Center>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: "teal",
  },
});

export default ProductDetailsScreen;
