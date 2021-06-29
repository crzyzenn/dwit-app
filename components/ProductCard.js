import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, View } from "react-native";
import { Image, Text, useTheme } from "react-native-elements";

const ProductCard = ({ _id, category, title, price, image }) => {
  const { theme } = useTheme();
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigate("ProductDetails", {
          _id,
        })
      }
      style={[
        styles.baseContainer,
        {
          borderColor: theme.colors.grey4,
          backgroundColor: theme.colors.white,
        },
      ]}
    >
      <View>
        <Image
          source={{
            uri: image,
          }}
          style={{ width: "100%", height: 140, marginBottom: 10 }}
        />
        <Text style={styles.titleStyle}>{title}</Text>
        <Text style={styles.categoryName}>{category}</Text>
        <Text style={[styles.price, { color: theme.colors.primary }]}>
          ${price}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  baseContainer: {
    flex: 1,
    width: "50%",
    margin: 5,
    padding: 10,
    borderWidth: 1,
    borderRadius: 15,
  },
  titleStyle: { fontWeight: "bold", marginTop: 15, fontSize: 13 },
  price: { fontWeight: "bold", fontSize: 20 },
});
