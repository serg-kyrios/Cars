// import { ColorValue, StyleSheet } from "react-native";
// type carGradientStyles = readonly [ColorValue, ColorValue, ...ColorValue[]];

export const CAR_GRADIENTS = {
  // Металік срібло (BMW стиль)
  metallicSilver: ["#bdc3c7", "#2c3e50"] as const,
  //metallicSilver: ["#C0C0C0", "#A9A9A9", "#808080", "#696969"],
 
  // Рейсинг червоний (Ferrari)
  racingRed: ["#FF0000", "#CC0000", "#990000"],

  // Нічний спорткар (Lamborghini)
  nightRacer: ["#1a0033", "#330066", "#4d0080"],

  // Електро (Tesla)
  electricBlue: ["#00BFFF", "#1E90FF", "#4169E1"],
} as const;


export const carGradientStyles = {
  gradientContainer: { flex: 1 } as const,
  contentOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    padding: 20,
    justifyContent: "center",
  } as const,
};
