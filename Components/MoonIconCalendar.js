import React from "react";
import { View, Image } from "react-native";
import { sty } from "../Css/StyleMoonIconCalendar";

export default function MoonIconCalendar(props) {
  let info = props.infoAstro;

  function getIcon() {
    if (info.moon_phase == "Waning Crescent") {
      return (
        <Image style={[sty.image]} source={require("../assets/moon7.png")} />
      );
    }
    if (info.moon_phase == "Waning Gibbous") {
      return (
        <Image style={[sty.image]} source={require("../assets/moon5.png")} />
      );
    }
    if (info.moon_phase == "Waxing Crescent") {
      return (
        <Image style={[sty.image]} source={require("../assets/moon1.png")} />
      );
    }
    if (info.moon_phase == "Waxing Gibbous") {
      return (
        <Image style={[sty.image]} source={require("../assets/moon3.png")} />
      );
    }
    if (info.moon_phase == "Last Quarter") {
      return (
        <Image style={[sty.image]} source={require("../assets/moon2.png")} />
      );
    }
    if (info.moon_phase == "New Moon") {
      return (
        <Image style={[sty.image]} source={require("../assets/moon8.png")} />
      );
    }
    if (info.moon_phase == "Full Moon") {
      return (
        <Image style={[sty.image]} source={require("../assets/moon4.png")} />
      );
    }
    if (info.moon_phase == "First Quarter") {
      return (
        <Image style={[sty.image]} source={require("../assets/moon6.png")} />
      );
    } else {
      return (
        <Image style={[sty.image]} source={require("../assets/lupa.png")} />
      );
    }
  }

  return <View style={[sty.infoContainer]}>{getIcon()}</View>;
}
