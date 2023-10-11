//Info datapicker https://hosseinshabani.github.io/react-native-modern-datepicker/
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import DatePicker from "react-native-modern-datepicker";
import { sty } from "../Css/StyleSecondPage";
import InfoCalendar from "../Components/InfoCalendar";
import Footer from "../Components/Footer";

export default function SecondPage() {
  const [date, setDate] = useState(false); //date variable

  function handleChange(propDate) {
    setDate(propDate);
  }
  function Mensaje(propDate) {
    console.log("FECHA: " + date);
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
          <Text style={[sty.title1]}>Welcome!!!</Text>
          <Text style={[sty.title2]}>
            Here you can consult the data on the moon today.
          </Text>
          <DatePicker
            style={[sty.dataPicker]}
            mode="calendar"
            onSelectedChange={handleChange}
          />
          <TouchableOpacity onPress={Mensaje}>
            <Text>Boton Fecha</Text>
          </TouchableOpacity>
          <InfoCalendar />
          <Footer />
        </ScrollView>
      </View>
    </View>
  );
}
