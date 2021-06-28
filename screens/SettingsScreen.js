import React from "react";
import { SafeAreaView } from "react-native";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { Platform, StatusBar } from "react-native";
import { Text } from "react-native";
import { Button, ListItem } from "react-native-elements";
import { Icon } from "react-native-elements/dist/icons/Icon";
import Center from "../components/Center";
import useAuth from "../hooks/useAuth";

const SettingsScreen = () => {
  const { logout, loading } = useAuth();
  const settingsItems = [
    {
      title: "Logout",
      icon: "logout",
      onPress: () => logout(),
    },
    // {
    //   title: "Dark Mode",
    //   icon: "dark",
    // },
  ];
  return (
    // Safe Area View -> iOS only...
    <SafeAreaView style={styles.droidSafeArea}>
      {settingsItems.map((item, i) => (
        <ListItem key={i} bottomDivider onPress={item.onPress}>
          <Icon name={item.icon} />
          <ListItem.Content>
            <ListItem.Title>{item.title}</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      ))}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  droidSafeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default SettingsScreen;
