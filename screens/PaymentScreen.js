import React, { useState } from "react";
import { Alert, StatusBar, StyleSheet, View } from "react-native";
import { Button, useTheme } from "react-native-elements";
import AppHeader from "../components/AppHeader";
import { $axios } from "../lib/axios";
import { useStripe } from "@stripe/stripe-react-native";
import useCart from "../hooks/useCart";
import useAuth from "../hooks/useAuth";

const PaymentScreen = ({ navigation: { navigate }, route }) => {
  const { items, totalPrice, clearCart } = useCart();
  const { user } = useAuth();

  const { theme } = useTheme();
  const [loading, setLoading] = useState(false);
  const { initPaymentSheet, presentPaymentSheet } = useStripe();

  const addOrder = async (paymentType) => {
    setLoading(true);
    const order = {
      items,
      totalPrice,
      user,
      paymentType,
      checkoutInfo: route.params,
    };
    try {
      await $axios.post("/orders", order);
      // After order added, clear cart and navigate to success screen...
      clearCart();
      navigate("Success");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchPaymentIntent = async () => {
    // 999 -> cents 9.99$
    try {
      const { clientSecret } = await $axios.post(
        "/stripe/create-payment-intent",
        {
          totalPrice: totalPrice * 100, // convert dollars to cents...
        }
      );
      return clientSecret;
    } catch (error) {
      console.log(error);
    }
  };

  const initializePaymentSheet = async () => {
    setLoading(true);
    const clientSecret = await fetchPaymentIntent();

    const { error } = await initPaymentSheet({
      paymentIntentClientSecret: clientSecret,
    });

    if (!error) {
      console.log("success");
      openPaymentSheet(clientSecret);
    } else {
      console.log(error);
      setLoading(false);
    }
  };

  const openPaymentSheet = async (clientSecret) => {
    const { error } = await presentPaymentSheet({ clientSecret });

    if (error) {
      Alert.alert(error.message);
      setLoading(false);
    } else {
      await addOrder(1);
    }
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <AppHeader name="Payment" backVisible />
      <View
        style={{
          flex: 1,
          paddingHorizontal: 20,
          paddingTop: 10,
          backgroundColor: theme.colors.white,
        }}
      >
        {/* Pay from card... */}
        <Button
          loading={loading}
          title="Pay now"
          onPress={initializePaymentSheet}
        />
        {/* Cash on delivery... */}
        <Button
          loading={loading}
          onPress={() => addOrder(2)}
          title="Cash on delivery"
          containerStyle={{
            marginVertical: 10,
          }}
        />
      </View>
    </>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({});
