import React from "react";
import { View, Text, Image } from "react-native";
import { sty } from "../Css/StyleMoonIconCalendar";

export default function InfoCalendar(props) {
  let info = props.infoAstro;

  return (
    <View style={[sty.infoContainer]}>
      <View style={[sty.infoSunContainer]}>
        <Text style={[sty.whiteText]}>
          Sunrise:<Text style={[sty.yellowText]}> {info.sunrise}</Text>
        </Text>
        <Text style={[sty.whiteText]}>
          Sunset: <Text style={[sty.yellowText]}>{info.sunset}</Text>
        </Text>
      </View>
      <View style={[sty.imageSunContainer]}>
        <Image
          style={[sty.imageSun]}
          source={require("../assets/sunrise.png")}
        />
        <Image
          style={[sty.imageSun]}
          source={require("../assets/sunset.png")}
        />
      </View>
    </View>
  );
}
