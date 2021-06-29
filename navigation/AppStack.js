import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import React from "react";
import CartScreen from "../screens/CartScreen";
import CheckoutScreen from "../screens/CheckoutScreen";
import HomeScreen from "../screens/HomeScreen";
import PaymentScreen from "../screens/PaymentScreen";
import ProductCategoryScreen from "../screens/ProductCategoryScreen";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import SuccessScreen from "../screens/SuccessScreen";

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

    <Stack.Navigator
      initialRouteName="Home"
      headerMode="screen"
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS, // Slide to right when navigating screens on both platforms...
        header: () => null,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
      <Stack.Screen name="CategoryProducts" component={ProductCategoryScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="Checkout" component={CheckoutScreen} />
      <Stack.Screen name="Payments" component={PaymentScreen} />
      <Stack.Screen name="Success" component={SuccessScreen} />
    </Stack.Navigator>
  );
};

export default AppStack;
