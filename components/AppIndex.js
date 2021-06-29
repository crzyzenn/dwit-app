import { NavigationContainer, useTheme } from "@react-navigation/native";
import { StripeProvider } from "@stripe/stripe-react-native";
import React from "react";
import { StatusBar } from "react-native";
import { ThemeProvider } from "react-native-elements";
import useAuth from "../hooks/useAuth";
import useDarkMode from "../hooks/useDarkMode";
import AppTabs from "../navigation/AppTabs";
import AuthStack from "../navigation/AuthStack";

export default function AppIndex() {
  const { loggedIn } = useAuth();
  const { dark } = useDarkMode();
  const theme = {
    colors: {
      // primary: "",
    },
    Button: {
      titleStyle: {
        fontSize: 15,
      },
      containerStyle: {
        // borderRadius: 20,
      },
    },
    Header: {
      containerStyle: {
        backgroundColor: "white",
      },
    },
    Text: {
      // style: {
      //   color: dark ? "white" : "black",
      // },
      h4Style: {
        fontSize: 18,
        fontWeight: "bold",
      },
    },
  };

  return (
    <ThemeProvider theme={theme} useDark={dark}>
      <StatusBar barStyle={dark ? "light-content" : "dark-content"} />
      <StripeProvider publishableKey="pk_test_51J5PCLHSkxfngDrUqtTztzDp33xG21gGY1hczEiexc3JAztaWWrH2xSEDWJhkP90eQ4PTzYJ39FMC5odm5RXW2BO00csoSKUPM">
        <NavigationContainer>
          {/* Render auth stack if logged in , else app tabs... */}
          {!loggedIn ? <AuthStack /> : <AppTabs />}
        </NavigationContainer>
      </StripeProvider>
    </ThemeProvider>
  );
}
