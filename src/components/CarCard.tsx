import { useFavoritesStore } from "@/store/useFavoritesStore";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useRef } from "react";
import { Animated, Pressable, Text, View } from "react-native";
import { COLORS } from "../../styles/globalStyles";
import { styleCarCard } from "../../styles/styleCarCard";

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
      <View style={styleCarCard.container}>
        <Text style={styleCarCard.text}>{car.id}</Text>
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
              color={isFav ? COLORS.secondary : COLORS.fifth}
            />
          </Animated.View>
        </Pressable>
      </View>
    </Pressable>
  );
};

export default CarCard;
