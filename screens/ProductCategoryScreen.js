import React from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import { Text, useTheme } from "react-native-elements";
import useSWR from "swr";
import AppHeader from "../components/AppHeader";
import ProductCard from "../components/ProductCard";
import { $axios } from "../lib/axios";

const ProductCategoryScreen = ({ route }) => {
  const { theme } = useTheme();
  // Fetch products from api
  const { data, isValidating, revalidate } = useSWR(
    `/products/category/${route.params.category._id}`,
    $axios
  );

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.white }}>
      <AppHeader name={route.params.category.name} backVisible />
      {isValidating ? (
        <ActivityIndicator size="large" />
      ) : (
        <View style={{ flex: 1, width: "100%", paddingHorizontal: 10 }}>
          <Text
            style={{
              marginVertical: 5,
              marginLeft: 7,
            }}
          >
            Found {data.length} products.
          </Text>
          {/* Performance wise v.good - only renders what users see on the screen. */}
          <FlatList
            numColumns={2}
            data={data}
            onRefresh={revalidate}
            refreshing={isValidating}
            showsVerticalScrollIndicator={false}
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

export default ProductCategoryScreen;
