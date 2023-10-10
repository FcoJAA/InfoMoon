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
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  title1: {
    fontSize: 40,
    marginTop: 10,
  },
  title2: {
    fontSize: 25,
    marginBottom: 10,
    marginTop: 10,
  },
  image: {
    width: "65%",
    height: "75%",
    objectFit: "contain",
  },
  image2: {
    height: "50%",
    objectFit: "contain",
  },
  infoContainer: {
    marginTop: 10,
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
    height: 210,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: "#221345",
  },
  astroInfoContainer: {
    flex: 1,
    flexDirection: "row",
    marginTop: 10,
    backgroundColor: "#221345",
    height: 190,
    width: "95%",
    borderWidth: 1,
    borderRadius: 10,
  },
  whiteText: {
    color: "white",
    marginLeft: 20,
  },
  imageMoonContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "45%",
  },
  infoMoonContainer: {
    justifyContent: "center",
    width: "55%",
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
});

export { sty };
