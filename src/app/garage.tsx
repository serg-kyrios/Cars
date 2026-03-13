import { View, FlatList } from "react-native";
import cars from "../data/cars";
import CarCard from "..//components/CarCard";

export default function GarageScreen() {
  return (
    <View style={{ backgroundColor: "#C9C6D2" }}>
      <FlatList data={cars} renderItem={({ item }) => <CarCard car={item} />} />
    </View>
  );
}
