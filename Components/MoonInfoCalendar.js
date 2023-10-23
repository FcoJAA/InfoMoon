import React from "react";
import { View, Text, Image } from "react-native";
import { sty } from "../Css/StyleMoonInfoCalendar";

export default function MoonInfoCalendar(props) {
  let info = props.infoAstro;

  return (
    <View style={[sty.infoContainer]}>
      <View style={[sty.infoMoonContainer]}>
        <Text style={[sty.whiteText]}>Phase: {info.moon_phase}</Text>
        <Text style={[sty.whiteText]}>
          Illumiantion: {info.moon_illumination}
        </Text>
        <Text style={[sty.whiteText]}>Moonrise: {info.moonrise}</Text>
        <Text style={[sty.whiteText]}>Moonset: {info.moonset}</Text>
      </View>
      <View style={[sty.infoMoonContainer]}>
        <Image
          style={[sty.image]}
          source={require("../assets/telescope.png")}
        />
      </View>
    </View>
  );
}
