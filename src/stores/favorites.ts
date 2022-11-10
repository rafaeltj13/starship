import { defineStore } from "pinia";
import { computed } from "vue";
import { useLocalStorage } from "@vueuse/core";

import { favoriteStarship } from "@/types/favoriteStarship";

export const useFavoritesStore = defineStore("favorites", () => {
  const storage = useLocalStorage("FAVORITES", [] as favoriteStarship[]);

  const favorites = computed<favoriteStarship[]>(() => storage.value);

  const favoriteStarshipNames = computed<String[]>(() =>
    storage.value?.map((starship) => starship.starshipName)
  );

  const addFavorite = (newFavorite: favoriteStarship) => {
    const favoritesValue = favorites.value || [];
    storage.value = [...favoritesValue, newFavorite];
  };
  const removeFavorite = (startshipName: string) => {
    const index = favorites.value
      .map((starship) => starship.starshipName)
      .indexOf(startshipName);

    storage.value = favorites.value.filter(
      (_, favoriteIndex) => index !== favoriteIndex
    );
  };

  return { favorites, favoriteStarshipNames, addFavorite, removeFavorite };
});
