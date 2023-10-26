import React from "react";
import { View } from "react-native";
import { useState, useEffect } from "react";
import { API_KEY, API_HOST } from "@env";
import TodayMoon from "../Components/TodayMoon";
import { sty } from "../Css/StylesHomeScreen";
import { useContext } from "react";
import { AppContext } from "../Components/Provider";

export default function HomeScreen() {
  const [info, setInfo] = useState(Object);
  const [state, setState] = useContext(AppContext);
  //const urlCurrent = `https://weatherapi-com.p.rapidapi.com/current.json?q=Granada`;
  const urlAstro = `https://weatherapi-com.p.rapidapi.com/astronomy.json?q=${state}&dt=today`; //YYYY-MM-DD

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
    } catch (error) {}
  }, [state]);

  async function getCurrentWeather() {
    try {
      const res = await fetch(urlAstro, options);
      const object = await res.json();
      setInfo(object.astronomy.astro);
    } catch (error) {}
  }

  return (
    <View style={[sty.mainContainer]}>
      <TodayMoon moon_info={info} locationProvider={state} />
    </View>
  );
}
