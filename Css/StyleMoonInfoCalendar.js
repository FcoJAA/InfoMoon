import { StyleSheet } from "react-native";

const sty = StyleSheet.create({
  infoContainer: {
    flex: 1,
    flexDirection: "row",
    marginTop: 10,
    backgroundColor: "#221345",
    height: 190,
    width: "92%",
    borderWidth: 1,
    borderRadius: 10,
  },
  infoMoonContainer: {
    justifyContent: "center",
    width: "55%",
  },
  whiteText: {
    color: "white",
    marginLeft: 20,
  },
  image: {
    width: "50%",
    objectFit: "contain",
  },
});
export { sty };
