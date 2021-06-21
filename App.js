import React from "react";
import { Provider } from "react-redux";
import AppIndex from "./components/AppIndex";
import store from "./redux/store";

export default function App() {
  // ... can i redux store values fetch here???
  // 2 navigators...
  // 1. Auth
  // 2. User Flow...
  return (
    <Provider store={store}>
      <AppIndex />
    </Provider>
  );
}
