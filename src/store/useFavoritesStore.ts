import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Car = { id: number; title: string };

interface FavoritesState {
  favorites: number[];
  toggleFavorite: (carId: number) => void;
  isFavorite: (carId: number) => boolean;
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      favorites: [],

      toggleFavorite: (carId) =>
        set((state) => {
          const isFav = state.favorites.includes(carId);

          return {
            favorites: isFav
              ? state.favorites.filter((id) => id !== carId)
              : [...state.favorites, carId],
          };
        }),

      isFavorite: (carId) => get().favorites.includes(carId),
    }),
    {
      name: "favorites-storage",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
