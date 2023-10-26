import { StyleSheet } from "react-native";

const sty = StyleSheet.create({
  mainContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#CFB8F5",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#8058C1",
    width: "98%",
    marginTop: "6%",
    height: "95%",
    borderWidth: 1,
    borderRadius: 10,
  },
  dataPicker: {
    backgroundColor: "#FFDC64",
    textHeaderColor: "#FFA25B",
    textDefaultColor: "#F6E7C1",
    selectedTextColor: "#fff",
    mainColor: "#F4722B",
    textSecondaryColor: "#D6C7A1",
    borderWidth: 3,
    borderRadius: 10,
    borderColor: "#221345",
    width: "95%",
    marginTop: 15,
    marginBottom: 5,
  },
});
export { sty };
