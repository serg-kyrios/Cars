// @/styles/globalStyles.ts
import { StyleSheet } from "react-native";

export const COLORS = {
  primary: "#007AFF",
  secondary: "#ff4444",
  background: "#f8f9fa",
  backgroundColor: "#A890F0",
  third: "#00FFFF",
  fifth: "#666",
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: COLORS.background,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.primary,
  },
});
