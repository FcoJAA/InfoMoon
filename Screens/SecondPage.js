//Info datapicker https://hosseinshabani.github.io/react-native-modern-datepicker/
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import DatePicker from "react-native-modern-datepicker";

export default function SecondPage() {
  const [date, setDate] = useState(false); //date variable

  function handleChange(propDate) {
    setDate(propDate);
  }
  function Mensaje(propDate) {
    console.log("FECHA: " + date);
  }

  return (
    <View
      style={{ marginTop: "10%", marginBottom: "5%", alignItems: "center" }}
    >
      <DatePicker
        mode="calendar"
        selected="2020-07-23"
        onSelectedChange={handleChange}
      />
      <TouchableOpacity onPress={Mensaje}>
        <Text>Fecha</Text>
      </TouchableOpacity>
    </View>
  );
}
