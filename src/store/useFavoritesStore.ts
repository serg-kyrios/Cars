import { create } from "zustand";
import { persist } from "zustand/middleware";

type Car = { id: number; title: string };

interface FavoritesState {
  favorites: Car["id"][]; // Масив ID улюблених
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
              ? state.favorites.filter((id) => id !== carId) // Видалити
              : [...state.favorites, carId], // Додати
          };
        }),

      isFavorite: (carId) => get().favorites.includes(carId),
    }),
    { name: "favorites-storage" },
  ),
);
