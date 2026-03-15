import GarageButton from "@/components/GarageButton";
import { ImageBackground, Text, View } from "react-native";
import { styleHomeScreen } from "../../styles/styleHomeScreen";

export default function HomeScreen() {
  return (
    <ImageBackground
      source={require("..//../assets/cars/JAC S2.jpg")} // Фонова картинка
      style={{ flex: 1 }} // Повний екран
      resizeMode="cover" // Покриває весь простір
      imageStyle={{ borderRadius: 20 }} // Закруглення
    >
      <View style={styleHomeScreen.container}>
        <View style={styleHomeScreen.container2}>
          <Text style={styleHomeScreen.text}>🚗 Welcome to Car Garage</Text>
        </View>

        <View style={{ gap: 15 }}>
          <GarageButton title="🏠 Garage" route="/garage" />
          <GarageButton title="❤️ Favorites" route="/favorites" />
          <GarageButton title="🚗 Details" route="/details" />
        </View>
      </View>
    </ImageBackground>
  );
}
