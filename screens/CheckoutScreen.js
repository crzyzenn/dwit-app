import { Formik } from "formik";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Icon, Input, Text, useTheme } from "react-native-elements";
import * as yup from "yup";
import AppHeader from "../components/AppHeader";
import useCart from "../hooks/useCart";

const validationSchema = yup.object({
  address: yup.string().required(),
  contact: yup.string().required(), // TODO -> custom validation can be done here...to check if the mobile number's length is exactly 10 digits.
});

const CheckoutScreen = ({ navigation: { navigate } }) => {
  const { theme } = useTheme();
  const { totalPrice } = useCart();
  return (
    <>
      <AppHeader name="Checkout" backVisible />
      <View
        style={{
          flex: 1,
          paddingHorizontal: 20,
          paddingTop: 10,
          backgroundColor: theme.colors.white,
        }}
      >
        <Text style={{ fontWeight: "bold" }}>Subtotal: ${totalPrice}</Text>
        <Formik
          initialValues={{
            address: "",
            contact: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(val) => navigate("Payments", val)}
        >
          {({ errors, touched, handleChange, handleBlur, handleSubmit }) => (
            <View
              style={{
                marginTop: 20,
              }}
            >
              <Input
                label="Shipping Address"
                placeholder="Eg: Hattisar, Kathmandu"
                containerStyle={{
                  paddingHorizontal: 0,
                }}
                onChangeText={handleChange("address")}
                onBlur={handleBlur("address")}
                errorMessage={touched.address && errors.address}
              />
              <Input
                label="Mobile Number"
                placeholder="980-xxxxxxx"
                containerStyle={{
                  paddingHorizontal: 0,
                }}
                onChangeText={handleChange("contact")}
                onBlur={handleBlur("contact")}
                errorMessage={touched.contact && errors.contact}
              />
              <Button
                title="Next"
                onPress={handleSubmit}
                icon={
                  <Icon
                    type="ionicon"
                    name="chevron-forward-outline"
                    color={theme.colors.white}
                    style={{
                      marginLeft: 5,
                    }}
                    size={20}
                  />
                }
                iconRight
              />
            </View>
          )}
        </Formik>
      </View>
    </>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({});
