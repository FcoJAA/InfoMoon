import React from "react";
import { View, Text, Image } from "react-native";
import { sty } from "../Css/StyleMoonInfoCalendar";

export default function MoonInfoCalendar(props) {
  info = props.infoAstro;
  location = props.locationProvider;
  date = props.day;

  return (
    <View style={[sty.infoContainer]}>
      <View style={[sty.infoMoonContainer]}>
        <Text style={[sty.whiteText]}>
          Location:{" "}
          <Text style={[sty.yellowText]}>{location ? location : " --"}</Text>
        </Text>
        <Text style={[sty.whiteText]}>
          Date: <Text style={[sty.yellowText]}>{date ? date : "Today"}</Text>
        </Text>
        <Text style={[sty.whiteText]}>
          Phase:{" "}
          <Text style={[sty.yellowText]}>
            {info.moon_phase ? info.moon_phase : " --"}
          </Text>
        </Text>
        <Text style={[sty.whiteText]}>
          Illumiantion:{" "}
          <Text style={[sty.yellowText]}>
            {info.moon_illumination ? info.moon_illumination : " --"}
          </Text>
        </Text>
        <Text style={[sty.whiteText]}>
          Moonrise:{" "}
          <Text style={[sty.yellowText]}>
            {info.moonrise ? info.moonrise : " --"}
          </Text>
        </Text>

        <Text style={[sty.whiteText]}>
          Moonset:{" "}
          <Text style={[sty.yellowText]}>
            {info.moonset ? info.moonset : " --"}
          </Text>
        </Text>
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
