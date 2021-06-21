import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, useTheme } from "react-native-elements";
import useAuth from "../hooks/useAuth";

// Obj.
// To center provided children in the
// center of the screen...
const Center = ({ style, children }) => {
  const { theme } = useTheme();
  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.white }, style]}
    >
      {children}
    </View>
  );
};

export default Center;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
