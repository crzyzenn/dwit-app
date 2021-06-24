import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import CartScreen from "../screens/CartScreen";
import HomeScreen from "../screens/HomeScreen";
import ProductCategoryScreen from "../screens/ProductCategoryScreen";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";

const Stack = createStackNavigator();

const AppStack = () => {
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

    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        options={{
          header: () => null,
        }}
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen
        options={{
          header: () => null,
        }}
        name="ProductDetails"
        component={ProductDetailsScreen}
      />
      <Stack.Screen
        options={{
          header: () => null,
        }}
        name="CategoryProducts"
        component={ProductCategoryScreen}
      />
      <Stack.Screen
        options={{
          header: () => null,
        }}
        name="Cart"
        component={CartScreen}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
