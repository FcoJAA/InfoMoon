import React from "react";
import { View, ScrollView } from "react-native";
import { sty } from "../Css/StylesTodayMoon";
import SunInfoCalendar from "./SunInfoCalendar";
import MoonIconCalendar from "./MoonIconCalendar";
import MoonInfoCalendar from "./MoonInfoCalendar";
import Footer from "./Footer";
import Header from "./Header";
import { useContext } from "react"; //Delete
import { AppContext } from "./Provider"; //Delete

export default function DataMoon(props) {
  let info = props.moon_info;
  let location = props.locationProvider;
  const [state, setState] = useContext(AppContext); //Delete

  return (
    <View style={[sty.container]}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Header date="today" />
        <MoonInfoCalendar
          infoAstro={info}
          locationProvider={location}
          day={"Today"}
        />
        <MoonIconCalendar infoAstro={info} />
        <SunInfoCalendar infoAstro={info} />
        <Footer />
      </ScrollView>
    </View>
  );
}
