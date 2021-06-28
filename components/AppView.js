import React from "react";
import { View } from "react-native";

const AppView = ({ children }) => {
  return (
    <View style={{ flex: 1, width: "100%", paddingHorizontal: 10 }}>
      {children}
    </View>
  );
};

export default AppView;
