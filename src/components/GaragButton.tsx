import { Text, Pressable, StyleSheet } from "react-native";
import { router } from "expo-router";

type GarageButtonProps = {
  title: string;
  route: `/${string}`; // Будь-який шлях
};

export default function GarageButton({ title, route }: GarageButtonProps) {
  return (
    <Pressable
      onPress={() => router.push(route as any)} //не ідеально
      style={({ pressed }) => [
        { backgroundColor: pressed ? "#ddd" : "#007AFF" },
        styles.button,
      ]}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 8,
    width: 250,
    alignItems: "center", // ✅ Центрування тексту
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "600", // ✅ 600 замість bold
    fontSize: 16, // ✅ Розмір шрифту
    textAlign: "center",
  },
});
