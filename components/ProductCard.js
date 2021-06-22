import React from "react";
import { StyleSheet, View } from "react-native";
import { Image, Text, useTheme } from "react-native-elements";

const ProductCard = ({ category, title, price, image }) => {
  const { theme } = useTheme();
  return (
    <View style={styles.productContainer}>
      <Image
        source={{
          uri: image,
        }}
        style={{ width: 200, height: 200 }}
      />
      <Text h4 style={styles.titleStyle}>
        {title}
      </Text>
      <Text>{category}</Text>
      <Text h3 style={[styles.price, { color: theme.colors.primary }]}>
        ${price}
      </Text>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  productContainer: {
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginVertical: 3,
  },
  titleStyle: { fontWeight: "bold", marginTop: 15 },
  price: { fontWeight: "bold" },
});
