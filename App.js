import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import Calculator from "./components/classes/Calculator";
import InputBasics from "./components/classes/InputBasics";
import LayoutBasics from "./components/classes/LayoutBasics";

export default function App() {
  return (
    <>
      {/* <LayoutBasics /> */}
      {/* <InputBasics /> */}
      <Calculator />
    </>
  );
}

const styles = StyleSheet.create({});
