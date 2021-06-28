import React from "react";
import { Alert, StyleSheet, View } from "react-native";
import { Button, Icon, Image, Text, useTheme } from "react-native-elements";
import useSWR from "swr";
import AppHeader from "../components/AppHeader";
import Loading from "../components/Loading";
import useCart from "../hooks/useCart";
import { $axios } from "../lib/axios";

const ProductDetailsScreen = ({ route }) => {
  const productId = route.params._id;
  const { data, isValidating } = useSWR(`/products/${productId}`, $axios);

  const { theme } = useTheme();
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart(data);
    Alert.alert("Success.", `${data.name} has been added to your cart.`);
  };

  return (
    <>
      <AppHeader name="Product Details" backVisible />
      {isValidating ? (
        <Loading />
      ) : (
        <View style={{ flex: 1 }}>
          <Image
            style={styles.image}
            source={{
              uri: "https://source.unsplash.com/random/500x500",
              // uri: data.image,
            }}
          />
          {/* Details container */}
          <View style={styles.detailsContainer}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text h4 style={styles.title}>
                {data.name}
              </Text>
              <Button
                title="Add to cart"
                onPress={handleAdd}
                icon={
                  <Icon
                    name="shopping-cart"
                    type="feather"
                    color={theme.colors.white}
                    size={15}
                    containerStyle={styles.iconContainer}
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

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 10,
  },
  iconContainer: {
    marginLeft: 7,
  },
});

export default ProductDetailsScreen;
