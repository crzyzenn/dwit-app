import React from "react";
import { Button, Text } from "react-native";
import Center from "../components/Center";
import useAuth from "../hooks/useAuth";
import { $axios } from "../lib/axios";

const HomeScreen = ({ navigation, route }) => {
  const { user } = useAuth();

  const fetchProducts = async () => {
    const products = await $axios.get("/products");
    console.log(products);
  };

  return (
    <Center>
      <Text>Welcome {user.name}</Text>
      <Button title="Fetch Products" onPress={fetchProducts} />
      <Button
        title="Go to Search Screen"
        onPress={() => navigation.navigate("Search")}
      />
    </Center>
  );
};

export default HomeScreen;
