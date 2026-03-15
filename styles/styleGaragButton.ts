import { StyleSheet } from "react-native";
import { COLORS } from "./globalStyles";

export const themeGaragButton = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 8,
    width: 250,
    alignItems: "center", // ✅ Центрування тексту
    justifyContent: "center",
    color: COLORS.backgroundColor,

  },
  buttonText: {
    color: "white",
    fontWeight: "600", // ✅ 600 замість bold
    fontSize: 16, // ✅ Розмір шрифту
    textAlign: "center",
  },
});
