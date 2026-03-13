import {
  View,
  Text,
  Button,
  StyleSheet,
  ImageBackground,
  Pressable,
} from "react-native";
import { router } from "expo-router";
import GarageButton from "@/components/GaragButton";

export default function HomeScreen() {
  return (
    <ImageBackground
      source={require("..//../assets/cars/JAC S2.jpg")} // Фонова картинка
      style={{ flex: 1 }} // Повний екран
      resizeMode="cover" // Покриває весь простір
      imageStyle={{ borderRadius: 20 }} // Закруглення
    >
      <View style={styles.container}>
       
        <View style={{ gap: 15 }}>
          <GarageButton title="🚗 Explore" route="/explore" />
          <GarageButton title="❤️ Favorites" route="/favorites" />
          <GarageButton title="🏠 Garage" route="/garage" />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)", // Напівпрозорий фон
    padding: 20,
    borderRadius: 20,
  },
  text: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
  },
  
});
