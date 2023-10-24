//Info datapicker https://hosseinshabani.github.io/react-native-modern-datepicker/
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import DatePicker from "react-native-modern-datepicker";
import { sty } from "../Css/StyleSecondPage";
import SunInfoCalendar from "../Components/SunInfoCalendar";
import Footer from "../Components/Footer";
import { API_KEY, API_HOST } from "@env";
import MoonIconCalendar from "../Components/MoonIconCalendar";
import MoonInfoCalendar from "../Components/MoonInfoCalendar";
import Header from "../Components/Header";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

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
          <Header date="calendar" />
          <DatePicker
            style={[sty.dataPicker]}
            mode="calendar"
            onSelectedChange={handleChange}
          />
          <TouchableOpacity style={[sty.button]} onPress={getCurrentWeather}>
            <Text style={[sty.textButtton]}>Get Info</Text>
            <Icon name="cloud-search" size={30} color={"#221345"} />
          </TouchableOpacity>
          <MoonInfoCalendar infoAstro={info} />
          <MoonIconCalendar infoAstro={info} />
          <SunInfoCalendar infoAstro={info} />
          <Footer />
        </ScrollView>
      </View>
    </View>
  );
}
