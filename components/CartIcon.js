import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon, useTheme } from "react-native-elements";
import useCart from "../hooks/useCart";

const CartIcon = () => {
  const { theme } = useTheme();
  const { items } = useCart();
  const { navigate } = useNavigation();
  return (
    <View>
      <Icon
        name="shopping-cart"
        type="feather"
        size={22}
        color={theme.colors.black}
        onPress={() => navigate("Cart")}
      />
      <View style={[styles.badge, { backgroundColor: theme.colors.black }]}>
        <Text
          style={{
            fontSize: 10,
            fontWeight: "bold",
            color: theme.colors.white,
          }}
        >
          {items.length}
        </Text>
      </View>
    </View>
  );
};

export default CartIcon;

const styles = StyleSheet.create({
  badge: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    width: 16,
    height: 16,
    position: "absolute",
    right: -10,
    top: -6,
    borderWidth: 2,
    borderColor: "white",
  },
});
