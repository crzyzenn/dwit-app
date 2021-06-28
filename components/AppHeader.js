import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import { Header, Icon, Text, useTheme } from "react-native-elements";
import useCart from "../hooks/useCart";

const AppHeader = ({ name, backVisible = false }) => {
  const { goBack, navigate } = useNavigation();
  const { theme } = useTheme();
  const { items } = useCart();
  return (
    <Header
      containerStyle={{
        paddingHorizontal: 20,
      }}
      placement="left"
      leftComponent={
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {backVisible && (
            <Icon
              name="chevron-left"
              type="feather"
              color={theme.colors.black}
              size={20}
              style={{
                marginRight: 10,
              }}
              onPress={() => goBack()}
            />
          )}
          <Text
            style={{
              fontSize: 20,
              color: theme.colors.black,
              fontWeight: "bold",
            }}
          >
            {name}
          </Text>
        </View>
      }
      rightComponent={
        <View>
          <Icon
            name="shopping-cart"
            type="feather"
            size={22}
            color={items.length > 0 ? theme.colors.primary : "black"}
            onPress={() => navigate("Cart")}
          />
          <View
            style={{
              backgroundColor: theme.colors.black,
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
            }}
          >
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
      }
    />
  );
};

export default AppHeader;
