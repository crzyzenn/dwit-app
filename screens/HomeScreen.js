import axios from "axios";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
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
      <ScrollView>
        <ProductCard
          image="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
          title="Test Product"
          category="Headphones"
          price={199}
        />
        <ProductCard
          image="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
          title="Elephant Art Poster"
          category="Art"
          price={299}
        />
        <ProductCard
          image="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
          title="Elephant Art Poster"
          category="Art"
          price={299}
        />
        <ProductCard
          image="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
          title="Elephant Art Poster"
          category="Art"
          price={299}
        />
        <ProductCard
          image="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
          title="Elephant Art Poster"
          category="Art"
          price={299}
        />
      </ScrollView>
      <Button
        title="Go to Product Details Screen"
        onPress={() => navigation.navigate("ProductDetails")}
      />
    </Center>
  );
};

export default HomeScreen;
