import React from "react";
import { ThemeProvider } from "react-native-elements";
import { Provider } from "react-redux";
import AppIndex from "./components/AppIndex";
import store from "./redux/store";

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
  };

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppIndex />
      </ThemeProvider>
    </Provider>
  );
}
