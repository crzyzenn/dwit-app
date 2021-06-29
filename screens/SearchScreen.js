import React, { useState } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import { Text, useTheme } from "react-native-elements";
import { Input } from "react-native-elements/dist/input/Input";
import AppHeader from "../components/AppHeader";
import AppView from "../components/AppView";
import Center from "../components/Center";
import ProductCard from "../components/ProductCard";
import { $axios } from "../lib/axios";

const SearchScreen = ({ navigation }) => {
  // Fetch products from api
  const { theme } = useTheme();
  const [search, setSearch] = useState("");

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const searchProducts = async () => {
    try {
      setLoading(true);
      const data = await $axios.get(`/products/search/${search}`);
      setData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.white }}>
      <AppHeader name="Search" iconsVisible={false} />
      <AppView>
        <Input
          placeholder="Search products..."
          keyboardType="web-search"
          clearButtonMode="while-editing"
          onChangeText={(val) => setSearch(val)}
          returnKeyType="search"
          onSubmitEditing={searchProducts}
        />
        {loading ? (
          <ActivityIndicator size="large" />
        ) : data.length > 0 ? (
          <FlatList
            numColumns={2}
            data={data}
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
        ) : (
          <Center>
            <Text>No products found. Please try another query.</Text>
          </Center>
        )}
      </AppView>
    </View>
  );
};

export default SearchScreen;
