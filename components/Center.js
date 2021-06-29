import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "react-native-elements";

// Obj.
// To center provided children in the
// center of the screen...
const Center = ({ style, children }) => {
  const { theme } = useTheme();
  return (
    <View
      style={[styles.container, style, { backgroundColor: theme.colors.white }]}
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
