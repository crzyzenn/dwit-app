import React from "react";
import {
  ActivityIndicator,
  FlatList,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import useSWR from "swr";
import AppHeader from "../components/AppHeader";
import Center from "../components/Center";
import ProductCard from "../components/ProductCard";
import { $axios } from "../lib/axios";

const HomeScreen = ({ navigation }) => {
  // Fetch products from api
  const { data, isValidating, revalidate } = useSWR("/products", $axios);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <AppHeader name="Home" />
      {isValidating ? (
        <ActivityIndicator size="large" />
      ) : (
        <View style={{ flex: 1, width: "100%", paddingHorizontal: 10 }}>
          {/* Performance wise v.good - only renders what users see on the screen. */}
          <FlatList
            numColumns={2}
            data={data}
            onRefresh={revalidate}
            refreshing={isValidating}
            renderItem={({ item }) => {
              return (
                <ProductCard
                  _id={item._id}
                  title={item.name}
                  // image={item.image}
                  image={`https://source.unsplash.com/random/500x50${Math.floor(
                    Math.random() * 100
                  )}`}
                  category={item.category?.name}
                  price={item.price}
                />
              );
            }}
            keyExtractor={(item) => item._id}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  productsContainer: {
    flex: 1,
    width: "100%",
    flexWrap: "wrap",
    flexDirection: "row",
  },
});

export default HomeScreen;
