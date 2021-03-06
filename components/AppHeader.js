import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import { Header, Icon, Text, useTheme } from "react-native-elements";
import useDarkMode from "../hooks/useDarkMode";
import CartIcon from "./CartIcon";

const AppHeader = ({ name, backVisible = false, iconsVisible = true }) => {
  const { goBack, navigate } = useNavigation();
  const { theme } = useTheme();
  const { dark } = useDarkMode();
  return (
    <Header
      containerStyle={{
        paddingHorizontal: 20,
        backgroundColor: theme.colors.white,
      }}
      barStyle={dark ? "light-content" : "dark-content"}
      backgroundColor={theme.colors.white}
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
              containerStyle={{
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
              onPress={() => navigate("Search")}
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
