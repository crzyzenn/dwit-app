import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Obj.
// To center provided children in the
// center of the screen...
const Center = ({ style, children }) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

export default Center;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
