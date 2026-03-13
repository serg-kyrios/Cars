import { View, Text, Pressable, StyleSheet, Animated } from "react-native";
import { router } from "expo-router";
import cars from "@/data/cars"; // ✅ Масив машин
import { useFavoritesStore } from "@/store/useFavoritesStore";
import { useRef } from "react";
import { Ionicons } from "@expo/vector-icons";

type Car = {
  id: number;
  title: string;
  power: number;
  car: string;
  speed: string;
  image: any;
};

interface CarCardProps {
  car: Car;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  const { toggleFavorite, isFavorite } = useFavoritesStore();
  const scale = useRef(new Animated.Value(1)).current;

  const isFav = isFavorite(car.id);

  const handleFavorite = () => {
    toggleFavorite(car.id);
    animateHeart();
  };
  const animateHeart = () => {
    Animated.sequence([
      Animated.timing(scale, {
        toValue: 1.4,
        duration: 120,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 1,
        duration: 120,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <Pressable onPress={() => router.push(`/details?id=${car.id}`)}>
      <View style={styles.container}>
        <Text style={styles.text}>{car.id}</Text>
        <Text>{car.title}</Text>
        <Text>{car.power} hp</Text>
        <Text>{car.car}</Text>
        <Text>{car.speed}</Text>

        <Pressable
          onPress={(e) => {
            e.stopPropagation();
            handleFavorite();
          }}
        >
          <Animated.View style={{ transform: [{ scale }] }}>
            <Ionicons
              name={isFav ? "heart" : "heart-outline"}
              size={24}
              color={isFav ? "#ff4444" : "#666"}
            />
          </Animated.View>
        </Pressable>
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
