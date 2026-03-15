import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { COLORS } from "../../styles/globalStyles";
import { styleGarageButton } from "../../styles/styleGarageButton";

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
        styleGarageButton.button, // ✅ З файлу!
      ]}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={styleGarageButton.buttonText}>{title}</Text>
      </View>
    </Pressable>
  );
}
