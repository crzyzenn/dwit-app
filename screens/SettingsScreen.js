import React from "react";
import { Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { ListItem, useTheme } from "react-native-elements";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { Switch } from "react-native-elements/dist/switch/switch";
import useAuth from "../hooks/useAuth";
import useDarkMode from "../hooks/useDarkMode";

const SettingsScreen = () => {
  const { logout } = useAuth();
  const { setDarkMode, dark } = useDarkMode();
  const { theme } = useTheme();
  const settingsItems = [
    {
      title: "Logout",
      icon: "logout",
      type: "simplelineicons",
      onPress: () => logout(),
    },
    {
      title: "Dark Mode",
      type: "feather",
      icon: "sun",
    },
  ];
  return (
    // Safe Area View -> iOS only...
    <SafeAreaView
      style={[styles.droidSafeArea, { backgroundColor: theme.colors.white }]}
    >
      {settingsItems.map((item, i) => (
        <ListItem key={i} bottomDivider onPress={item.onPress}>
          <Icon
            name={item.icon}
            type={item.type || ""}
            color={theme.colors.black}
          />
          <ListItem.Content>
            <ListItem.Title>{item.title}</ListItem.Title>
          </ListItem.Content>
          {item.title === "Dark Mode" && (
            <Switch
              value={dark}
              onValueChange={(val) => setDarkMode(val)}
              color="orange"
            />
          )}
        </ListItem>
      ))}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  droidSafeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
  },
});

export default SettingsScreen;
