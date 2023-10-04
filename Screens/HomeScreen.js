import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import { API_KEY, API_HOST } from "@env";
import DataMoon from "../Components/DataMoon";

export default function HomeScreen() {
  const [info, setInfo] = useState(Object);
  const { city, setCity } = "Granada";
  const urlCurrent = `https://weatherapi-com.p.rapidapi.com/current.json?q=Granada`;
  const urlAstro =
    "https://weatherapi-com.p.rapidapi.com/astronomy.json?q=Granada&dt=today";

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": API_HOST,
    },
  };

  useEffect(() => {
    try {
      getCurrentWeather();
      console.log("Ejecutado");
    } catch (error) {}
  }, [0]);

  async function getCurrentWeather() {
    try {
      const res = await fetch(urlAstro, options);
      const object = await res.json();
      setInfo(object.astronomy.astro);
    } catch (error) {}
  }

  return (
    <View
      style={{ marginTop: "10%", marginBottom: "5%", alignItems: "center" }}
    >
      <Text>HomeScreen</Text>
      <Text>Today</Text>
      <DataMoon moon_info={info} />
    </View>
  );
}
