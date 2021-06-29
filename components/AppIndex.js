import {
  DefaultTheme,
  NavigationContainer,
  useTheme,
} from "@react-navigation/native";
import { StripeProvider } from "@stripe/stripe-react-native";
import React from "react";
import { ActivityIndicator, View } from "react-native";
import { StatusBar } from "react-native";
import { ThemeProvider } from "react-native-elements";
import useAuth from "../hooks/useAuth";
import useDarkMode from "../hooks/useDarkMode";
import AppTabs from "../navigation/AppTabs";
import AuthStack from "../navigation/AuthStack";
import Center from "./Center";

export default function AppIndex() {
  const { loggedIn, initialLoading } = useAuth();
  const { dark } = useDarkMode();
  const theme = {
    colors: {
      primary: dark ? "#284C94" : "#2B3240",
      secondary: "#DECC00",
    },
    Button: {
      titleStyle: {
        fontSize: 15,
      },
      containerStyle: {
        borderRadius: 10,
      },
    },
    Header: {
      containerStyle: {
        backgroundColor: "white",
      },
    },
    Text: {
      style: {
        color: dark ? "white" : "black",
      },
      h4Style: {
        fontSize: 18,
        fontWeight: "bold",
      },
    },
    Input: {
      inputStyle: {
        color: dark ? "white" : "black",
      },
      inputContainerStyle: {
        borderColor: dark ? "white" : "black",
        marginTop: 10,
      },
      labelStyle: {
        color: dark ? "white" : "black",
      },
    },
  };

  return (
    <>
      {/* <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.white}
      /> */}
      <ThemeProvider theme={theme} useDark={dark}>
        <StripeProvider publishableKey="pk_test_51J5PCLHSkxfngDrUqtTztzDp33xG21gGY1hczEiexc3JAztaWWrH2xSEDWJhkP90eQ4PTzYJ39FMC5odm5RXW2BO00csoSKUPM">
          <NavigationContainer
            theme={{
              ...DefaultTheme,
              colors: {
                ...DefaultTheme.colors,
                background: dark ? "black" : "white",
              },
            }}
          >
            {initialLoading ? (
              <Center>
                <ActivityIndicator />
              </Center>
            ) : !loggedIn ? (
              <AuthStack />
            ) : (
              <AppTabs />
            )}
          </NavigationContainer>
        </StripeProvider>
      </ThemeProvider>
    </>
  );
}
