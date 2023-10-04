import React from "react";
import { Text, View, Image } from "react-native";
import { sty } from "../Css/StylesDataMoon";

export default function DataMoon(props) {
  let info = props.moon_info;
  return (
    <View style={[sty.container]}>
      <View style={[sty.miniContainer1]}>
        <Text>Phase: {info.moon_phase}</Text>
        <Text>Illumiantion: {info.moon_illumination}</Text>
      </View>
      <View style={[sty.miniContainer2]}>
        <Image
          style={[sty.image]}
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
        ></Image>
      </View>
    </View>
  );
}
