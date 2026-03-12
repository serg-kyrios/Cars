// app/details.tsx
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { View, Text } from "react-native";

export default function DetailsScreen() {
  const { id } = useLocalSearchParams(); // Отримуємо id з URL
  const [car, setCar] = useState(null);

  useEffect(() => {
    // Завантажуємо дані машини за id
    if (id) {
      // fetch(`/api/cars/${id}`) або з store
      console.log(`Машина ID: ${id}`);
    }
  }, [id]);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>Деталі машини ID: {id}</Text>
      {/* Показуємо car.title, car.power тощо */}
    </View>
  );
}
