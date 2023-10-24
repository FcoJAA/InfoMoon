import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { sty } from "../Css/StyleSettingsPage";
//import { Picker } from "@react-native-picker/picker"; elimanr
import RNPickerSelect from "react-native-picker-select"; //https://www.npmjs.com/package/react-native-picker-select

export default function SettingsPage() {
  const [location, setLocation] = useState("Granada");

  function CurrentLocation() {
    return <Text>{location}</Text>;
  } /*Delete*/

  return (
    <View style={[sty.mainContainer]}>
      <View style={[sty.container]}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Header date="settings" />
          <View style={[sty.selectContainer]}>
            <RNPickerSelect
              onValueChange={(valor) => setLocation(valor)}
              items={[
                { label: "Almeria", value: "Almeria" },
                { label: "Granada", value: "Granada" },
                { label: "Malaga", value: "Malaga" },
                { label: "Cadiz", value: "Cadiz" },
                { label: "Huelva", value: "Huelva" },
              ]}
            />
          </View>
          {CurrentLocation() /*Delete*/}
          <Footer />
        </ScrollView>
      </View>
    </View>
  );
}
