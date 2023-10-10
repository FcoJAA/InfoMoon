import React from "react";
import { Text, View, Image } from "react-native";
import { sty } from "../Css/StylesFooter";
import { Linking } from "react-native";

export default function Footer() {
  return (
    <View style={[sty.container]}>
      <Text style={[sty.text]}>
        This project is currently working with the location of Granada (Spain)
        App created by FcoAA using the weatherapi-com API. App created with
        React-Native, Expo Cli in javascript programming language.Free of
        copyright.
      </Text>
      <Text style={[sty.text]}>01/10/2023</Text>
      <View style={[sty.link]}>
        <Text>Powered by </Text>
        <Text
          style={{ color: "blue" }}
          onPress={() => Linking.openURL("https://www.weatherapi.com/")}
        >
          WeatherAPI.com
        </Text>
      </View>
    </View>
  );
}
