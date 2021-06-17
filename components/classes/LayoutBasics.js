import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function LayoutBasics() {
  return (
    <>
      <View style={styles.container1}>
        <View style={styles.subContainer1}>
          <Text>Hello world</Text>
        </View>
        <View style={styles.subContainer1}>
          <Text>Hello world</Text>
        </View>
        <View style={styles.subContainer1}>
          <Text>Hello world</Text>
        </View>
      </View>
      <View style={styles.container2}>
        <Text>Hello world</Text>
      </View>
      <View style={styles.container3}>
        <Text>Hello world</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 3, // applies maximum available space from the screen...
    backgroundColor: "tomato",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  subContainer1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "yellow",
    padding: 10,
    // marginTop: 10,
    // marginRight: 10,
    // marginBottom: 10,
    // marginLeft: 10,
    marginHorizontal: 3, // x-axis
    marginVertical: 10, // y-axis
  },
  container2: {
    flex: 1,
    backgroundColor: "dodgerblue",
    alignItems: "center",
    justifyContent: "center",
  },
  container3: {
    flex: 1,
    backgroundColor: "teal",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "tomato",
  },
});
