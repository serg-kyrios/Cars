import { StyleSheet } from "react-native";
import { COLORS } from "./globalStyles";

export const styleDetails = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: COLORS.backgroundColor,
    //backgroundColor: "rgba(0,0,0,0.9)", // Напівпрозорий фон
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    color: "red",
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10,
  },
  text2: {
    fontSize: 24,
    marginBottom: 10,
  },
  contentFit: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
    borderRadius: 15,
  },
  image: {
    width: 320,
    height: 200,
    borderRadius: 20,
  },
});
