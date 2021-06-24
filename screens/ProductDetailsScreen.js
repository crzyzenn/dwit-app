import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Icon, Image, Text, useTheme } from "react-native-elements";
import useSWR from "swr";
import AppHeader from "../components/AppHeader";
import Loading from "../components/Loading";
import { $axios } from "../lib/axios";

const ProductDetailsScreen = ({ route }) => {
  const productId = route.params._id;
  const { theme } = useTheme();

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
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
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
              <Button
                title="Add to cart"
                icon={
                  <Icon
                    name="shopping-cart"
                    type="feather"
                    color={theme.colors.white}
                    size={15}
                    containerStyle={{
                      marginLeft: 7,
                    }}
                  />
                }
                iconRight
              />
            </View>
            <Text>{data.description}</Text>
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({});

export default ProductDetailsScreen;
