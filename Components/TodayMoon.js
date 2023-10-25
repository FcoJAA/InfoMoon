import React from "react";
import { View, ScrollView, Text } from "react-native";
import { sty } from "../Css/StylesTodayMoon";
import SunInfoCalendar from "./SunInfoCalendar";
import MoonIconCalendar from "./MoonIconCalendar";
import MoonInfoCalendar from "./MoonInfoCalendar";
import Footer from "./Footer";
import Header from "./Header";
import { useContext } from "react";
import { AppContext } from "./Provider";

export default function DataMoon(props) {
  let info = props.moon_info;
  const [state, setState] = useContext(AppContext); //Provider

  //console.log();

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
        <MoonInfoCalendar infoAstro={info} />
        <MoonIconCalendar infoAstro={info} />
        <SunInfoCalendar infoAstro={info} />
        <Footer />
      </ScrollView>
    </View>
  );
}
