import React from "react";
import { StyleSheet, View } from "react-native";
import { Image, Text } from "react-native-elements";
import useSWR from "swr";
import AppHeader from "../components/AppHeader";
import Loading from "../components/Loading";
import { $axios } from "../lib/axios";

const ProductDetailsScreen = ({ navigation, route }) => {
  const productId = route.params._id;

  const { data, isValidating } = useSWR(`/products/${productId}`, $axios);

  return (
    <>
      <AppHeader name="Product Details" backVisible />
      {isValidating ? (
        <Loading />
      ) : (
        <View style={{ flex: 1 }}>
          <Image
            style={{
              width: "100%",
              height: 350,
            }}
            source={{
              uri: "https://source.unsplash.com/random/500x500",
              // uri: data.image,
            }}
          />
          {/* Details container */}
          <View
            style={{
              padding: 20,
            }}
          >
            <Text
              h4
              style={{
                marginBottom: 10,
              }}
            >
              {data.name}
            </Text>
            <Text>{data.description}</Text>
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({});

export default ProductDetailsScreen;
