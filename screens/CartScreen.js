import React from "react";
import { FlatList } from "react-native";
import { TouchableOpacity } from "react-native";
import { StatusBar } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { Image, useTheme, Button, Icon } from "react-native-elements";
import AppHeader from "../components/AppHeader";

// Cart items format....
const items = [
  {
    id: 1,
    name: "product name",
    image: "product image",
    price: 99,
    quantity: 5,
  },
  {
    id: 2,
    name: "product name",
    image: "product image",
    price: 99,
    quantity: 5,
  },
  {
    id: 3,
    name: "product name",
    image: "product image",
    price: 99,
    quantity: 5,
  },
  {
    id: 4,
    name: "product name",
    image: "product image",
    price: 99,
    quantity: 5,
  },
  {
    id: 5,
    name: "product name",
    image: "product image",
    price: 99,
    quantity: 5,
  },
];

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
              color: theme.colors.primary,
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
        <CartButton title="-" style={{ marginRight: 5 }} />
        <Text>{item.quantity}</Text>
        <CartButton title="+" style={{ marginLeft: 5 }} />
        <Icon
          type="feather"
          name="trash"
          size={15}
          style={{ marginLeft: 5 }}
          color={theme.colors.error}
        />
      </View>
    </View>
  );
};

const CartScreen = () => {
  const renderItem = ({ item }) => <CartItem item={item} />;
  const { theme } = useTheme();
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <AppHeader name="Cart" backVisible />
      <View
        style={{
          flex: 1,
          paddingHorizontal: 20,
          paddingTop: 10,
          backgroundColor: theme.colors.white,
        }}
      >
        <FlatList
          data={items}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
        <View
          style={{
            backgroundColor: theme.colors.grey5,
            padding: 20,
            marginTop: 10,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 15,
              color: theme.colors.searchBg,
            }}
          >
            Total: $500
          </Text>
        </View>
      </View>
    </>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
