import { router } from "expo-router";
import { Pressable, Text } from "react-native";
import { COLORS } from "../../styles/globalStyles";
import { styleGaragButton } from "../../styles/styleGaragButton";

type GarageButtonProps = {
  title: string;
  route: `/${string}`; // Будь-який шлях
};

export default function GarageButton({ title, route }: GarageButtonProps) {
  return (
    <Pressable
      onPress={() => router.push(route as any)}
      style={({ pressed }) => [
        { backgroundColor: pressed ? COLORS.third : COLORS.primary },
        styleGaragButton.button, // ✅ З файлу!
      ]}
    >
      <Text style={styleGaragButton.buttonText}>{title}</Text> // ✅ З файлу!
    </Pressable>
  );
}
