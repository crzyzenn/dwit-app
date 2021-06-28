import React from "react";
import { ThemeProvider } from "react-native-elements";
import { Provider } from "react-redux";
import AppIndex from "./components/AppIndex";
import store from "./redux/store";
import { StripeProvider } from "@stripe/stripe-react-native";

export default function App() {
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
      h4Style: {
        fontSize: 18,
        fontWeight: "bold",
      },
    },
  };

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StripeProvider publishableKey="pk_test_51J5PCLHSkxfngDrUqtTztzDp33xG21gGY1hczEiexc3JAztaWWrH2xSEDWJhkP90eQ4PTzYJ39FMC5odm5RXW2BO00csoSKUPM">
          <AppIndex />
        </StripeProvider>
      </ThemeProvider>
    </Provider>
  );
}
