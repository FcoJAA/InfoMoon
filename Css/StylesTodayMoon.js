import { StyleSheet } from "react-native";

const sty = StyleSheet.create({
  container: {
    backgroundColor: "#8058C1",
    borderWidth: 1,
    borderRadius: 10,
    width: "98%",
    marginTop: "6%",
    height: "95%",
  },
  image: {
    width: "65%",
    height: "75%",
    objectFit: "contain",
  },
  infoContainer: {
    backgroundColor: "#221345",
    justifyContent: "center",
    alignItems: "center",
    height: 200,
    width: "95%",
    borderWidth: 1,
    borderRadius: 10,
  },
  containerImage: {
    justifyContent: "center",
    alignItems: "center",
    width: "95%",
    height: 250,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: "#221345",
  },
  whiteText: {
    color: "white",
  },
});

export { sty };
