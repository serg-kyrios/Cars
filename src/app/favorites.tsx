import CarCard from "@/components/CarCard";
import cars from "@/data/cars";
import { useFavoritesStore } from "@/store/useFavoritesStore";
import { LinearGradient } from "expo-linear-gradient";
import { FlatList, Text, View } from "react-native";
import { CAR_GRADIENTS, carGradientStyles } from "../../styles/carGradient";
import GarageButton from "../components/GarageButton";

type Car = {
  id: number;
  title: string;
  power: number;
  car: string;
  image: string;
  colors?: string[];
};

export default function FavoritesScreen() {
  const favorites = useFavoritesStore((state) => state.favorites);
  const favoriteCars = cars.filter((car) => favorites.includes(car.id));

  if (favoriteCars.length === 0) {
    return (
      <LinearGradient
        colors={CAR_GRADIENTS.metallicSilver}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={carGradientStyles.gradientContainer}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
          }}
        >
          <Text
            style={{
              fontSize: 24,
              color: "white",
              textAlign: "center",
              marginBottom: 30,
            }}
          >
            No favorite cars yet ❤️
          </Text>
          <GarageButton title="🏁 Garage" route="/garage" />
        </View>
      </LinearGradient>
    );
  }

  return (
    <LinearGradient
      colors={CAR_GRADIENTS.metallicSilver}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={carGradientStyles.gradientContainer}
    >
      {/* Заголовок */}
      <View
        style={{
          paddingTop: 60,
          paddingHorizontal: 20,
          paddingBottom: 10,
        }}
      >
        <Text
          style={{
            fontSize: 28,
            color: "white",
            fontWeight: "bold",
            textAlign: "center",
            textShadowColor: "rgba(0,0,0,0.75)",
            textShadowOffset: { width: 2, height: 2 },
            textShadowRadius: 10,
          }}
        >
          Улюблені ({favoriteCars.length}) ❤️
        </Text>
      </View>

      {/* Список машин */}
      <FlatList
        data={favoriteCars}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <CarCard car={item} />}
        contentContainerStyle={{
          padding: 20,
          paddingBottom: 120,
        }}
        showsVerticalScrollIndicator={false}
      />

      {/* Кнопка по центру */}
      <View
        style={{
          position: "absolute",
          bottom: 40,
          alignSelf: "center",
          width: 220,
          shadowColor: "#000",
          shadowOpacity: 0.4,
          shadowRadius: 10,
          elevation: 10,
        }}
      >
        <GarageButton title="🏁 Garage" route="/garage" />
      </View>
    </LinearGradient>
  );
}
