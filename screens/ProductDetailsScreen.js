import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { Header, Icon, useTheme } from "react-native-elements";
import Center from "../components/Center";

const ProductDetailsScreen = ({ navigation, route }) => {
  const { theme } = useTheme();
  const productId = route.params._id;
  console.log(productId);
  // /products/${id}
  return (
    <>
      <Header
        placement="left"
        leftComponent={
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Icon
              name="chevron-left"
              type="feather"
              color={theme.colors.black}
              size={20}
              style={{
                marginRight: 10,
              }}
              onPress={() => navigation.goBack()}
            />
            <Text
              style={{
                fontSize: 20,
                color: theme.colors.black,
                fontWeight: "bold",
              }}
            >
              Product Details
            </Text>
          </View>
        }
      />
      {/* <Center style={styles.searchContainer}>
        <Text>Product description....</Text>
      </Center> */}
    </>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: "teal",
  },
});

export default ProductDetailsScreen;
