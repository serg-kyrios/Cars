// app/details.tsx
import { View, Text, Image, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import cars from "@/data/cars"; // масив машин

type Car = {
  id: number;
  title: string;
  power: number;
  car: string;
  image: string;
};

export default function DetailsScreen() {
  const { id } = useLocalSearchParams();

  const car = cars.find((c) => c.id === Number(id));

  if (!car)
    return (
      <Text style={styles.text}>
        Машина не знайдена. Виберіть , будь ласка, іншу.
      </Text>
    );

  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        backgroundColor: "#A890F0",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>{car.title}</Text>
      <Text>{car.car}</Text>
      <Text>Потужність: {car.power} hp</Text>
      <Text>ID: {car.id}</Text>

      <Image source={car.image} style={styles.contentFit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    color: "red",
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10,
  },
  text2: {
    fontSize: 24,
    marginBottom: 10,
  },
  contentFit: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
    borderRadius: 15,
  },
});
