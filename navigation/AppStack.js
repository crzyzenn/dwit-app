import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Button, Header, Text, useTheme, Icon } from "react-native-elements";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import SettingsScreen from "../screens/SettingsScreen";
import { Feather } from "@expo/vector-icons";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import useAuth from "../hooks/useAuth";

const Stack = createStackNavigator();

const AppStack = () => {
  const { theme } = useTheme();
  const { navigate } = useNavigation();
  const { user } = useAuth();
  return (
    // React example..
    // <BrowserRouter>
    //   <Switch>
    //     <Route href="/login">
    //       <HomeScreen />
    //     </Route>
    //     <Route href="/register">
    //       <HomeScreen />
    //     </Route>
    //     <Route href="/products">
    //       <HomeScreen />
    //     </Route>
    //     <Route href="/categories">
    //       <HomeScreen />
    //     </Route>
    //   </Switch>
    // </BrowserRouter>

    <Stack.Navigator
      screenOptions={{
        header: () => (
          <Header
            containerStyle={{
              paddingHorizontal: 20,
            }}
            backgroundColor={theme.colors.white}
            // leftComponent={{ icon: "menu", color: theme.colors.black }}
            leftComponent={
              <>
                <Text
                  style={{
                    color: theme.colors.black,
                    fontSize: 20,
                    marginBottom: 2,
                  }}
                >
                  Home
                </Text>
                <Text style={{ color: theme.colors.black, fontWeight: "500" }}>
                  {user.name}
                </Text>
              </>
            }
            rightComponent={
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <Icon
                  name="search"
                  type="feather"
                  size={20}
                  containerStyle={{
                    marginRight: 5,
                  }}
                  onPress={() => navigate("Search")}
                />
                <Icon name="shopping-cart" type="feather" size={20} />
              </View>
            }
            rightContainerStyle={{
              alignSelf: "center",
            }}
          />
        ),
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};

export default AppStack;
