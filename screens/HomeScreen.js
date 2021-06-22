import axios from "axios";
import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { Text } from "react-native";
import { Button } from "react-native-elements";
import Center from "../components/Center";
import ProductCard from "../components/ProductCard";
import useAuth from "../hooks/useAuth";
import { $axios } from "../lib/axios";

const HomeScreen = ({ navigation }) => {
  const { user } = useAuth();
  // Fetch data from api....axios...
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const categories = await $axios.get("/categories");
      setData(categories);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Center>
      <StatusBar barStyle="dark-content" />
      {/* <Text>Welcome {user.name}</Text>
      <Button title="Fetch categories" onPress={fetchData} />
      <Text>No of categories {data?.length}</Text> */}
      <ProductCard />
      <Button
        title="Go to Search Screen"
        onPress={() => navigation.navigate("Search")}
      />
    </Center>
  );
};

export default HomeScreen;
