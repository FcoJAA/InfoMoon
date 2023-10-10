import React from "react";
import { Text, View, Image, ScrollView } from "react-native";
import { sty } from "../Css/StylesTodayMoon";
import Footer from "./Footer";

export default function DataMoon(props) {
  let info = props.moon_info;
  //Simplificar este componente varibles de imagenes e index
  //Crear componente unico
  function getIcon() {
    if (info.moon_phase == "Waning Crescent") {
      return (
        <Image style={[sty.image]} source={require("../assets/moon7.png")} />
      );
    }
    if (info.moon_phase == "Waning Gibbous") {
      return (
        <Image style={[sty.image]} source={require("../assets/moon5.png")} />
      );
    }
    if (info.moon_phase == "Waxing Crescent") {
      return (
        <Image style={[sty.image]} source={require("../assets/moon1.png")} />
      );
    }
    if (info.moon_phase == "Waxing Gibbous") {
      return (
        <Image style={[sty.image]} source={require("../assets/moon3.png")} />
      );
    }
    if (info.moon_phase == "Last Quarter") {
      return (
        <Image style={[sty.image]} source={require("../assets/moon2.png")} />
      );
    }
    if (info.moon_phase == "New Moon") {
      return (
        <Image style={[sty.image]} source={require("../assets/moon8.png")} />
      );
    }
    if (info.moon_phase == "Full Moon") {
      return (
        <Image style={[sty.image]} source={require("../assets/moon4.png")} />
      );
    }
    if (info.moon_phase == "First Quarter") {
      //TO-DO Buscar el icono correspondiente
      return (
        <Image style={[sty.image]} source={require("../assets/moon6.png")} />
      );
    } else {
      return (
        <Image style={[sty.image]} source={require("../assets/moon8.png")} />
      );
    }
  }

  return (
    <View style={[sty.container]}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={[sty.infoContainer]}>
          <Text style={[sty.whiteText]}>Phase: {info.moon_phase}</Text>
          <Text style={[sty.whiteText]}>
            Illumiantion: {info.moon_illumination}
          </Text>
          <Text style={[sty.whiteText]}>Moonrise: {info.moonrise}</Text>
          <Text style={[sty.whiteText]}>Moonset: {info.moonset}</Text>
        </View>
        <View style={[sty.containerImage]}>{getIcon()}</View>
        <View style={[sty.sunContainer]}>
          <View style={[sty.infoSunContainer]}>
            <Text style={[sty.whiteText]}>Sunrise: {info.sunrise}</Text>
            <Text style={[sty.whiteText]}>Sunset: {info.sunset}</Text>
          </View>
          <View style={[sty.imageSunContainer]}>
            <Image
              style={[sty.image2]}
              source={require("../assets/sunrise.png")}
            />
            <Image
              style={[sty.image2]}
              source={require("../assets/sunset.png")}
            />
          </View>
        </View>
        <Footer />
      </ScrollView>
    </View>
  );
}
