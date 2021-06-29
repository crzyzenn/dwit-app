import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import { Header, Icon, Text, useTheme } from "react-native-elements";
import CartIcon from "./CartIcon";

const AppHeader = ({ name, backVisible = false, iconsVisible = true }) => {
  const { goBack } = useNavigation();
  const { theme } = useTheme();
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
        iconsVisible && (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Icon
              name="search"
              size={25}
              containerStyle={{
                marginRight: 5,
              }}
            />
            <CartIcon />
          </View>
        )
      }
    />
  );
};

export default AppHeader;
