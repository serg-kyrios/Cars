import { StyleSheet } from "react-native";

export const styleHomeScreen = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)", // Напівпрозорий фон
    padding: 20,
    borderRadius: 20,
  },
  container2: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 20,
  },
  text: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
  },
});
