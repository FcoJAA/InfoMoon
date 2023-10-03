import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";

export default function HomeScreen() {
  const [info, setInfo] = useState(Object);
  const { city, setCity } = "Granada";
  const urlCurrent = `https://weatherapi-com.p.rapidapi.com/current.json?q=Granada`;
  const urlAstro =
    "https://weatherapi-com.p.rapidapi.com/astronomy.json?q=Granada&dt=today";

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c78c77fa70msh73782e4c6678fafp1f488fjsnd1c0d9eb37af",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
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
      setInfo(object);
    } catch (error) {}
  }

  function ShowData() {
    try {
      return <Text>MOON: {info.astronomy.astro.moon_phase}</Text>;
    } catch (error) {}
  }

  return (
    <View
      style={{ marginTop: "10%", marginBottom: "5%", alignItems: "center" }}
    >
      <Text>HomeScreen</Text>
      <Text>Today</Text>
      <TouchableOpacity onPress={getCurrentWeather}>
        <Text>Get info</Text>
      </TouchableOpacity>
      {ShowData()}
    </View>
  );
}
