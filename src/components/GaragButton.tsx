import { router } from "expo-router";
import { Pressable, Text } from "react-native";
import { COLORS } from "../../styles/globalStyles";
import { themeGaragButton } from "../../styles/styleGaragButton";

type GarageButtonProps = {
  title: string;
  route: `/${string}`; // Будь-який шлях
};

export default function GarageButton({ title, route }: GarageButtonProps) {
  return (
    <Pressable
      onPress={() => router.push(route as any)}
      style={({ pressed }) => [
        { backgroundColor: pressed ? COLORS.secondary : COLORS.primary },
        themeGaragButton.button, // ✅ З файлу!
      ]}
    >
      <Text style={themeGaragButton.buttonText}>{title}</Text> // ✅ З файлу!
    </Pressable>
  );
}
