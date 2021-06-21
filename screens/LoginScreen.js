import { Input, Button, Text } from "react-native-elements";
import { Field, Form, Formik } from "formik";
import React from "react";
import { TextInput } from "react-native";
import Center from "../components/Center";
import * as yup from "yup";
import { $axios } from "../lib/axios";

// Inputfield -> custom ..
// button -> custom..

// Setup...axios

const validationSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const LoginScreen = ({ navigation }) => {
  const handleLogin = async (values) => {
    try {
      const data = await $axios.post("/ph-auth/products", values);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Center
      style={{
        paddingHorizontal: 20,
      }}
    >
      <Text
        h4
        style={{
          marginBottom: 20,
        }}
      >
        Login
      </Text>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleLogin}
        validationSchema={validationSchema}
      >
        {({
          handleBlur,
          handleChange,
          handleSubmit,
          touched,
          errors,
          values,
        }) => (
          // <Form>
          <>
            <Input
              placeholder="youremail@gmail.com"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              errorMessage={touched.email && !!errors.email && errors.email}
            />
            <Input
              placeholder="Password"
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              secureTextEntry={true}
              value={values.password}
              errorMessage={
                touched.password && !!errors.password && errors.password
              }
            />
            <Button
              containerStyle={{
                marginTop: 20,
              }}
              titleStyle={{
                fontSize: 14,
              }}
              onPress={handleSubmit}
              title="Login"
            />
          </>
          // </Form>
        )}
      </Formik>
      <Button
        titleStyle={{
          fontSize: 14,
        }}
        type="clear"
        title="Not a user? Register."
        onPress={() => navigation.navigate("Register")}
      />
    </Center>
  );
};

export default LoginScreen;