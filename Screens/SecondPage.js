//Info datapicker https://hosseinshabani.github.io/react-native-modern-datepicker/
import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import DatePicker from "react-native-modern-datepicker";
import { sty } from "../Css/StyleSecondPage";
import SunInfoCalendar from "../Components/SunInfoCalendar";
import Footer from "../Components/Footer";
import { API_KEY, API_HOST } from "@env";
import MoonIconCalendar from "../Components/MoonIconCalendar";
import MoonInfoCalendar from "../Components/MoonInfoCalendar";
import Header from "../Components/Header";
import { useContext } from "react";
import { AppContext } from "../Components/Provider";

export default function SecondPage() {
  const [date, setDate] = useState("Today");
  const [info, setInfo] = useState("today");
  const [state, setState] = useContext(AppContext);
  const urlAstro = `https://weatherapi-com.p.rapidapi.com/astronomy.json?q=${state}&dt=${date}`; //YYYY-MM-DD

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": API_HOST,
    },
  };

  useEffect(() => {
    getCurrentWeather();
  }, [state, date]);

  function handleChange(propDate) {
    setDate(propDate);
  }
  async function getCurrentWeather() {
    try {
      const res = await fetch(urlAstro, options);
      const object = await res.json();
      setInfo(object.astronomy.astro);
    } catch (error) {}
  }

  return (
    <View style={[sty.mainContainer]}>
      <View style={[sty.container]}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Header date="calendar" />
          <DatePicker
            style={[sty.dataPicker]}
            mode="calendar"
            onSelectedChange={handleChange}
          />
          <MoonInfoCalendar
            infoAstro={info}
            locationProvider={state}
            day={date}
          />
          <MoonIconCalendar infoAstro={info} />
          <SunInfoCalendar infoAstro={info} />
          <Footer />
        </ScrollView>
      </View>
    </View>
  );
}
