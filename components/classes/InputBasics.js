import React, { useState } from "react";
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const InputBasics = () => {
  const [name, setName] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Hello World</Text>
        <TextInput
          style={{
            backgroundColor: "#ddd",
            color: "black",
            padding: 10,
            borderRadius: 10,
            marginTop: 10,
          }}
          onChangeText={(val) => setName(val)}
        />
      </View>
      <View style={styles.nameContainer}>
        <Text style={{ color: "black" }}>{name}</Text>
      </View>
    </SafeAreaView>
  );
};

export default InputBasics;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  nameContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "tomato",
  },
});
