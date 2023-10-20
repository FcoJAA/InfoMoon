import { StyleSheet } from "react-native";

const sty = StyleSheet.create({
  infoContainer: {
    flex: 1,
    flexDirection: "row",
    marginTop: 10,
    backgroundColor: "#221345",
    justifyContent: "center",
    alignItems: "center",
    height: 190,
    width: "95%",
    borderWidth: 1,
    borderRadius: 10,
  },
  imageSunContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
  },
  infoSunContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
  },
  whiteText: {
    color: "white",
    marginLeft: 20,
  },
  imageSun: {
    height: "50%",
    objectFit: "contain",
  },
});
export { sty };
