import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

const Calculator = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(0);

  // const handleFn = (type) => {
  //   switch (type) {
  //     case "ADD":
  //       setResult(number1 + number2);
  //     case "SUBTRACT":
  //       setResult(number1 - number2);
  //     case "MULTIPLY":
  //       setResult(number1 * number2);
  //     case "DIVIDE":
  //       setResult(number1 / number2);
  //     default:
  //       return;
  //   }
  // };

  const handleAdd = () => {
    setResult(number1 + number2);
  };
  const handleSubtract = () => {
    setResult(number1 - number2);
  };
  const handleMultiply = () => {
    setResult(number1 * number2);
  };
  const handleDivide = () => {
    setResult(number1 / number2);
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TextInput
        value={number1}
        placeholder="Number 1"
        onChangeText={(val) => {
          setNumber1(+val);
        }}
        keyboardType="numeric"
      />
      <TextInput
        value={number2}
        placeholder="Number 2"
        onChangeText={(val) => setNumber2(+val)}
        keyboardType="numeric"
      />
      <Button title="Add" onPress={handleAdd} />
      <Button title="Subtract" onPress={handleSubtract} />
      <Button title="Multiply" onPress={handleMultiply} />
      <Button title="Divide" onPress={handleDivide} />
      {/* Result */}
      <Text
        style={{
          fontSize: 40,
        }}
      >
        {result}
      </Text>
    </View>
  );
};

export default Calculator;
