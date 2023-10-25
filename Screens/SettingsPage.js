import React, { useState, useContext, useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { sty } from "../Css/StyleSettingsPage";
//import { Picker } from "@react-native-picker/picker"; elimanr
import RNPickerSelect from "react-native-picker-select"; //https://www.npmjs.com/package/react-native-picker-select
import { AppContext } from "../Components/Provider";

export default function SettingsPage() {
  const [location, setLocation] = useState("Granada");
  const [state, setState] = useContext(AppContext);

  //https://es.legacy.reactjs.org/docs/hooks-effect.html
  useEffect(() => {
    setState(location);
  }, [location]);

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
          <Footer />
        </ScrollView>
      </View>
    </View>
  );
}
