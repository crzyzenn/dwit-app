import React from "react";
import { ActivityIndicator, FlatList, ScrollView, View } from "react-native";
import { Chip, useTheme } from "react-native-elements";
import useSWR from "swr";
import AppHeader from "../components/AppHeader";
import AppView from "../components/AppView";
import ProductCard from "../components/ProductCard";
import { $axios } from "../lib/axios";

const HomeScreen = ({ navigation }) => {
  // Fetch products from api
  const { data, isValidating, revalidate } = useSWR("/products", $axios);
  const categories = useSWR("/categories", $axios);
  const { theme } = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.white }}>
      <AppHeader name="Home" />
      {isValidating ? (
        <ActivityIndicator size="large" />
      ) : (
        <AppView>
          {/* Categories scroll view -> horizontal -> list of categories... */}
          {/* ... */}
          <ScrollView
            horizontal
            style={{
              paddingHorizontal: 10,
              paddingVertical: 10,
            }}
            showsHorizontalScrollIndicator={false}
          >
            {!categories.isValidating &&
              categories.data.map((category) => (
                // Each Category
                <Chip
                  onPress={() =>
                    navigation.navigate("CategoryProducts", {
                      category,
                    })
                  }
                  containerStyle={{
                    marginRight: 5,
                  }}
                  key={category._id}
                  title={category.name}
                />
              ))}
          </ScrollView>
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
        </AppView>
      )}
    </View>
  );
};

export default HomeScreen;
