import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Text } from "react-native";
import Center from "../components/Center";

const HomeScreen = ({ navigation, route }) => {
  // Fetch data from api....axios...
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const { data } = await axios.get("https://reqres.in/api/users/2");
    setData(data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Center>
      <Text>{data && `Welcome ${data.first_name} ${data.last_name}`}</Text>
      <Text>
        Welcome {data?.first_name} {data?.last_name}
      </Text>
      <Button
        title="Go to Search Screen"
        onPress={() => navigation.navigate("Search")}
      />
    </Center>
  );
};

export default HomeScreen;
