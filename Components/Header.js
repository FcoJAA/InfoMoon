import React from "react";
import { View, Text } from "react-native";
import { sty } from "../Css/StylesHeader";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"; //https://oblador.github.io/react-native-vector-icons/

export default function Header(props) {
  let info = props.date;

  function setTextInfo() {
    if (info == "today") {
      return (
        <Text
          style={{
            fontFamily: "sans-serif-light",
            fontSize: 20,
            marginTop: 10,
            color: "#FFDC64",
          }}
        >
          Here you can consult the data on the moon today.
        </Text>
      );
    } else {
      return (
        <Text
          style={{
            fontFamily: "sans-serif-light",
            fontSize: 20,
            marginTop: 10,
            color: "#FFDC64",
          }}
        >
          Here you can check the lunar forecast for any day.
        </Text>
      );
    }
  }

  return (
    <View style={[sty.titleConatiner]}>
      <Text
        style={{
          fontFamily: "monospace",
          fontSize: 40,
          marginTop: 10,
          color: "#FFDC64",
        }}
      >
        <Icon name="telescope" size={30} color={"#F2B700"} />
        {" Welcome! "}
        <Icon name="weather-night" size={30} color={"#F2B700"} />
      </Text>
      <View>{setTextInfo()}</View>
    </View>
  );
}
