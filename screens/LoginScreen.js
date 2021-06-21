import { Formik } from "formik";
import React from "react";
import { Button, Input, Text } from "react-native-elements";
import * as yup from "yup";
import Center from "../components/Center";
import useAuth from "../hooks/useAuth";

const validationSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const LoginScreen = ({ navigation }) => {
  const { login, loading } = useAuth();

  return (
    <Center
      style={{
        paddingHorizontal: 20,
      }}
    >
      <Text
        h4
        style={{
          alignSelf: "flex-start",
          marginBottom: 20,
        }}
      >
        Login
      </Text>
      <Formik
        initialValues={{
          email: "jerry@gmail.com",
          password: "jerry12345",
        }}
        onSubmit={login}
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
              loading={loading}
              containerStyle={{
                marginVertical: 20,
                width: "100%",
              }}
              onPress={handleSubmit}
              title="Login"
            />
          </>
          // </Form>
        )}
      </Formik>
      <Button
        type="clear"
        title="Not a user? Register."
        onPress={() => navigation.navigate("Register")}
      />
    </Center>
  );
};

export default LoginScreen;
