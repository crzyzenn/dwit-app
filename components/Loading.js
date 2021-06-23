import React from "react";
import { ActivityIndicator } from "react-native";
import Center from "./Center";

export default function Loading() {
  return (
    <Center>
      <ActivityIndicator size="large" />
    </Center>
  );
}
