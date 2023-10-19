import React from "react";
import { View, Text } from "react-native";
import { sty } from "../Css/StylesInfoCalendar";

export default function InfoCalendar(props) {
  let info = props.moon_info;

  return (
    <View style={[sty.infoContainer]}>
      <Text style={[sty.whiteText]}>Sunset: {info.sunset}</Text>
    </View>
  );
}
