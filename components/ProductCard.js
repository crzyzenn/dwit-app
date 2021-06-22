import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "react-native-elements";

const ProductCard = () => {
  return (
    <View>
      <Text>
        <Image
          source={{
            uri: "https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
          }}
          style={{ width: 200, height: 200 }}
        />
      </Text>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({});
