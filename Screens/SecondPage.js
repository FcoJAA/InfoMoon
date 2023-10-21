//Info datapicker https://hosseinshabani.github.io/react-native-modern-datepicker/
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import DatePicker from "react-native-modern-datepicker";
import { sty } from "../Css/StyleSecondPage";
import SunInfoCalendar from "../Components/SunInfoCalendar";
import Footer from "../Components/Footer";
import { API_KEY, API_HOST } from "@env";
import MoonIconCalendar from "../Components/MoonIconCalendar";

export default function SecondPage() {
  const [date, setDate] = useState(false);
  const [info, setInfo] = useState("today");
  const urlAstro = `https://weatherapi-com.p.rapidapi.com/astronomy.json?q=Granada&dt=${date}`; //YYYY-MM-DD

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": API_HOST,
    },
  };

  function handleChange(propDate) {
    setDate(propDate);
  }
  async function getCurrentWeather() {
    console.log("FECHA: " + date);
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
          <View>
            <Text style={[sty.title1]}>Welcome!!!</Text>
            <Text style={[sty.title2]}>
              Here you can consult the data on the moon today.
            </Text>
          </View>

          <DatePicker
            style={[sty.dataPicker]}
            mode="calendar"
            onSelectedChange={handleChange}
          />
          <TouchableOpacity onPress={getCurrentWeather}>
            <Text>Boton Fecha</Text>
          </TouchableOpacity>
          <MoonIconCalendar infoAstro={info} />
          <SunInfoCalendar infoAstro={info} />
          <Footer />
        </ScrollView>
      </View>
    </View>
  );
}
