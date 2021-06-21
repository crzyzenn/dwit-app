import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import InputBasics from "../components/classes/InputBasics";
import LoginScreen from "../screens/LoginScreen";

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        options={{ header: () => null }}
        name="Login"
        component={LoginScreen}
      />
      <Stack.Screen name="Register" component={InputBasics} />
    </Stack.Navigator>
  );
};

export default AuthStack;
