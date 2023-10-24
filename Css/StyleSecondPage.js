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
  },
  button: {
    backgroundColor: "#FFDC64",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 100,
    marginTop: 10,
    width: "28%",
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.5,
    shadowRadius: 19.0,
    elevation: 15,
  },
  textButtton: {
    fontSize: 17,
    color: "#221345",
  },
});
export { sty };
