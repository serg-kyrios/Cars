// app/details.tsx
import cars from "@/data/cars"; // масив машин
import { useLocalSearchParams } from "expo-router";
import { useEffect, useRef } from "react";
import { Animated, Image, ImageBackground, Text, View } from "react-native";
import { styleDetails } from "..//../styles/styleDetails";  

type Car = {
  id: number;
  title: string;
  power: number;
  car: string;
  image: string;
};

export default function DetailsScreen() {
  const { id } = useLocalSearchParams();
  const slideAnim = useRef(new Animated.Value(100)).current; // старт нижче на 100
  const car = cars.find((c) => c.id === Number(id));

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0, // кінцева позиція
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, []);

  if (!car)
    return (
      <ImageBackground
        source={require("..//../assets/cars/JAC S2.jpg")} // Фонова картинка
        style={{ flex: 1 }} // Повний екран
        resizeMode="cover" // Покриває весь простір
        imageStyle={{ borderRadius: 20 }} // Закруглення
      >
        <View style={styleDetails.container}>
          <Animated.Text
            style={[
              styleDetails.text,
              { transform: [{ translateY: slideAnim }] },
              {
                opacity: slideAnim.interpolate({
                  inputRange: [0, 200],
                  outputRange: [1, 0],
                }),
              },
            ]}
          >
            Машина не знайдена. Виберіть , будь ласка автомобіль на свій вкус.
          </Animated.Text>
        </View>{" "}
      </ImageBackground>
    );
  return (
    <View style={styleDetails.container}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>{car.title}</Text>
      <Text>{car.car}</Text>
      <Text>Потужність: {car.power} hp</Text>
      <Text>ID: {car.id}</Text>

      <Image source={car.image} style={styleDetails.contentFit} />
    </View>
  );
}
