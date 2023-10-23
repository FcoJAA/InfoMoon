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
    borderRadius: 10,
    width: "95%",
  },
  titleConatiner: { justifyContent: "center", alignItems: "center" },
  title1: {
    fontSize: 40,
    marginTop: 10,
  },
  title2: {
    fontSize: 25,
    marginBottom: 10,
    marginTop: 10,
  },
  button: {
    backgroundColor: "#FFDC64",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    margin: 15,
    width: "30%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
export { sty };
