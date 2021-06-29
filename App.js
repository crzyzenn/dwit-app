import React from "react";
import { Provider } from "react-redux";
import AppIndex from "./components/AppIndex";
import store from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <AppIndex />
    </Provider>
  );
}
