import { View, Text, FlatList } from "react-native";
import cars from "@/data/cars";
import CarCard from "@/components/CarCard";
import { useFavoritesStore } from "@/store/useFavoritesStore";

export default function FavoritesScreen() {
  const favorites = useFavoritesStore((state) => state.favorites);

  const favoriteCars = cars.filter((car) => favorites.includes(car.id));

  if (favoriteCars.length === 0) {
    return (
      <View>
        <Text>No favorite cars yet ❤️</Text>
      </View>
    );
  }

  return (
    <View >
      <FlatList
        data={favoriteCars}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <CarCard car={item} />}
      />
    </View>
  );
}
