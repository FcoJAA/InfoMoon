import { StyleSheet } from "react-native";

const sty = StyleSheet.create({
  container: {
    backgroundColor: "#B6D4DC",
    borderWidth: 1,
    borderRadius: 10,
    width: "101%",
    height: "100%",
  },
  image: {
    backgroundColor: "#B6D4DC",
    width: "65%",
    height: "75%",
    objectFit: "contain",
  },
  miniContainer1: {
    backgroundColor: "#448A9D",
    justifyContent: "center",
    alignItems: "center",
    height: 200,
  },
  containerImage: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 250,
  },
});

export { sty };
