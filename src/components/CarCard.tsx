import { View, Text, Pressable, StyleSheet } from "react-native";
import { router } from "expo-router";
import cars from "@/data/cars"; // ✅ Масив машин

// 1️⃣ Визнач тип для однієї машини
type Car = {
  id?: number;
  title?: string;
  power?: number;
  car?: string;
};

interface CarCardProps {
  car: Car;
}

// ✅ Ось сюди!
const CarCard: React.FC<CarCardProps> = ({ car }) => {
  return (
    <Pressable onPress={() => router.push(`/details?id=${car.id}`)}>
      <View style={styles.container}>
        <Text style={styles.text}>{car.id}</Text>
        <Text>{car.title}</Text>
        <Text>{car.power} hp</Text>
        <Text>{car.car}</Text>
      </View>
    </Pressable>
  );
};

export default CarCard;

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
});
