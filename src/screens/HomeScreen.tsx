import {
  View,
  Text,
  Button,
  StyleSheet,
  ImageBackground,
  Pressable,
} from "react-native";
import { router } from "expo-router";

export default function HomeScreen() {
  return (
    <ImageBackground
      source={require("..//../assets/cars/JAC S2.jpg")} // Фонова картинка
      style={{ flex: 1 }} // Повний екран
      resizeMode="cover" // Покриває весь простір
      imageStyle={{ borderRadius: 20 }} // Закруглення
    >
      <View style={styles.container}>
        <Text style={styles.text}>🚗 Welcome to Car Garage</Text>

        <Button title="Open Garage" onPress={() => router.push("/garage")} />
        <Text></Text>
        <Button title="Open Details" onPress={() => router.push("/details")} />
        <Button
          title="Open Favorites"
          onPress={() => router.push("/favorites")}
        />
        <Pressable onPress={() => router.push("./favorites")}>
          <Text>
            ⭐ Favorites Garage 🚗 Your garage is empty Add some favorite cars
            ❤️
          </Text>
        </Pressable>
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
  bottom: {
    position: "absolute",
    bottom: 100,
    marginBottom: 100,
  },
});
