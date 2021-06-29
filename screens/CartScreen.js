import React from "react";
import { FlatList } from "react-native";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Image, useTheme, Button, Icon, Text } from "react-native-elements";
import AppHeader from "../components/AppHeader";
import Center from "../components/Center";
import useCart from "../hooks/useCart";

// Exercise....
// On delete select...
// Provide the user an alert
// If ok, then delete...
// If cancel, dont.!!

const CartButton = ({ title, onPress, style }) => {
  const { theme } = useTheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          paddingHorizontal: 7,
          paddingVertical: 3,
          backgroundColor: theme.colors.grey4,
          borderRadius: 5,
        },
        style,
      ]}
    >
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

const CartItem = ({ item }) => {
  const { theme } = useTheme();
  const { removeFromCart, plusItem, minusItem } = useCart();
  return (
    <View
      style={{
        marginBottom: 15,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Image
          source={{
            uri: "https://source.unsplash.com/random/300x200",
          }}
          style={{
            width: 70,
            height: 70,
            marginRight: 5,
          }}
        />
        <View>
          <Text>{item.name}</Text>
          <Text
            style={{
              color: theme.colors.black,
              fontWeight: "bold",
            }}
          >
            ${item.price}
          </Text>
        </View>
      </View>
      <View
        style={{
          alignSelf: "flex-end",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <CartButton
          title="-"
          onPress={() => minusItem(item._id)}
          style={{ marginRight: 5 }}
        />
        <Text>{item.quantity}</Text>
        <CartButton
          title="+"
          onPress={() => plusItem(item._id)}
          style={{ marginLeft: 5 }}
        />
        <Icon
          type="feather"
          name="trash"
          size={15}
          style={{ marginLeft: 5 }}
          color={theme.colors.error}
          onPress={() => removeFromCart(item._id)}
        />
      </View>
    </View>
  );
};

const CartScreen = ({ navigation: { navigate } }) => {
  const renderItem = ({ item }) => <CartItem item={item} />;
  const { theme } = useTheme();
  const { items, totalPrice } = useCart();
  return (
    <>
      <AppHeader name="Cart" backVisible />
      <View
        style={{
          flex: 1,
          paddingHorizontal: 20,
          paddingTop: 10,
          backgroundColor: theme.colors.white,
        }}
      >
        {items.length > 0 ? (
          <>
            <FlatList
              data={items}
              renderItem={renderItem}
              keyExtractor={(item) => item._id}
              showsVerticalScrollIndicator={false}
            />
            <View
              style={{
                backgroundColor: theme.colors.grey5,
                padding: 15,
                marginTop: 10,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 15,
                  color: theme.colors.black,
                }}
              >
                Total: ${totalPrice}
              </Text>
              <Button title="Checkout" onPress={() => navigate("Checkout")} />
            </View>
          </>
        ) : (
          <Center>
            <Text>Your cart looks empty!</Text>
            <Button
              title="Shop now."
              type="clear"
              onPress={() => navigate("Home")}
            />
          </Center>
        )}
      </View>
    </>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
