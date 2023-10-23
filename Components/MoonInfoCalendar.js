import React from "react";
import { View, Text, Image } from "react-native";
import { sty } from "../Css/StyleMoonInfoCalendar";

export default function MoonInfoCalendar(props) {
  let info = props.infoAstro;

  return (
    <View style={[sty.infoContainer]}>
      <View style={[sty.infoMoonContainer]}>
        <Text style={[sty.whiteText]}>
          Phase:<Text style={[sty.yellowText]}>{" " + info.moon_phase}</Text>
        </Text>
        <Text style={[sty.whiteText]}>
          Illumiantion:{" "}
          <Text style={[sty.yellowText]}>{" " + info.moon_illumination}</Text>
        </Text>
        <Text style={[sty.whiteText]}>
          Moonrise: <Text style={[sty.yellowText]}>{" " + info.moonrise}</Text>
        </Text>

        <Text style={[sty.whiteText]}>
          Moonset: <Text style={[sty.yellowText]}>{" " + info.moonset}</Text>
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
