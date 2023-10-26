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
  selectContainer: {
    marginTop: 20,
    marginBottom: 20,
    width: "100%",
    backgroundColor: "#9A8F1F",
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#221345",
  },
  mapImage: {
    width: "60%",
    height: "40%",
  },
});

export { sty };
