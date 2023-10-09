import React from "react";
import { View } from "react-native";
import { useState, useEffect } from "react";
import { API_KEY, API_HOST } from "@env";
import TodayMoon from "../Components/TodayMoon";
import { sty } from "../Css/StylesHomeScreen";

export default function HomeScreen() {
  const [info, setInfo] = useState(Object);
  const { city, setCity } = "Granada";
  const urlCurrent = `https://weatherapi-com.p.rapidapi.com/current.json?q=Granada`;
  const urlAstro =
    "https://weatherapi-com.p.rapidapi.com/astronomy.json?q=Granada&dt=today"; //YYYY-MM-DD

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
    <View style={[sty.mainContainer]}>
      <TodayMoon moon_info={info} />
    </View>
  );
}
