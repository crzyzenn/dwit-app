import React from "react";
import { ActivityIndicator } from "react-native";
import { Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { ListItem, useTheme, Icon, Switch } from "react-native-elements";
import useAuth from "../hooks/useAuth";
import useDarkMode from "../hooks/useDarkMode";

const SettingsScreen = () => {
  const { logout, loading, user } = useAuth();
  const { setDarkMode, dark } = useDarkMode();
  const { theme } = useTheme();
  const settingsItems = [
    {
      title: "Dark Mode",
      type: "feather",
      icon: "sun",
    },
    {
      title: "Logout",
      icon: "logout",
      type: "simplelineicons",
      onPress: () => logout(),
    },
  ];
  return (
    // Safe Area View -> iOS only...
    <SafeAreaView
      style={[styles.droidSafeArea, { backgroundColor: theme.colors.white }]}
    >
      <ListItem bottomDivider>
        <Icon name="user" type="feather" color={theme.colors.black} />
        <ListItem.Content>
          <ListItem.Title>{user.name}</ListItem.Title>
          <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
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
              color={theme.colors.primary}
            />
          )}
          {item.title === "Logout" && loading && <ActivityIndicator />}
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
