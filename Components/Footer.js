import React from "react";
import { Text, View } from "react-native";
import { sty } from "../Css/StylesFooter";

export default function Footer() {
  return (
    <View style={[sty.container]}>
      <Text style={[sty.text]}>
        App created by FcoAA using the weatherapi-com API. App created with
        React-Native, Expo Cli in javascript programming language Free
        distribution and free of copyright.
      </Text>
      <Text style={[sty.text]}>01/10/2023</Text>
    </View>
  );
}
