import React from "react";
import { Text, View, Image, ScrollView } from "react-native";
import { sty } from "../Css/StylesDataMoon";
import Footer from "./Footer";

export default function DataMoon(props) {
  let info = props.moon_info;
  return (
    <View style={[sty.container]}>
      <ScrollView>
        <View style={[sty.miniContainer1]}>
          <Text>Phase: {info.moon_phase}</Text>
          <Text>Illumiantion: {info.moon_illumination}</Text>
        </View>
        <View style={[sty.miniContainer2]}>
          <Image
            style={[sty.image]}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/196/196685.png",
            }}
          ></Image>
        </View>
        <Footer />
      </ScrollView>
    </View>
  );
}
