// app/details.tsx
import cars from "@/data/cars"; // масив машин
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useRef } from "react";
import { Animated, Text, View } from "react-native";
import { CAR_GRADIENTS, carGradientStyles } from "../../styles/carGradient";
import { styleDetails } from "..//../styles/styleDetails";
import GarageButton from "../components/GarageButton";

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

  const scaleAnim = useRef(new Animated.Value(0.7)).current;

  useEffect(() => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 5,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0, // кінцева позиція
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, []);

  if (!car)
    return (
      <LinearGradient
        colors={CAR_GRADIENTS.metallicSilver} // Металік!
        start={{ x: 1, y: 1 }} // Зліва зверху
        end={{ x: 0, y: 0 }} // Справа донизу
        style={carGradientStyles.gradientContainer}
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
          <GarageButton title="🏁 Garage" route="/garage" />
        </View>
      </LinearGradient>
    );
  return (
    <View style={styleDetails.container}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>{car.title}</Text>
      <Text>{car.car}</Text>
      <Text>Потужність: {car.power} hp</Text>
      <Text>ID: {car.id}</Text>

      {/* <Image source={car.image} style={styleDetails.contentFit} /> */}
      <Animated.Image
        source={car.image}
        style={[styleDetails.image, { transform: [{ scale: scaleAnim }] }]}
      />
    </View>
  );
}
