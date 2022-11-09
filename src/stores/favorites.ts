import { defineStore } from "pinia";
import { computed, ref } from "vue";

import { favoriteStarship } from "@/types/favoriteStarship";

const favoritesKey = "FAVORITES";

export const useFavoritesStore = defineStore("favorites", () => {
  const currentFavotires = ref<favoriteStarship[]>(
    JSON.parse(localStorage.getItem(favoritesKey))
  );
  const favorites = computed<favoriteStarship[]>(() => currentFavotires.value);

  const favoriteStarshipNames = computed<String[]>(() =>
    currentFavotires.value?.map((starship) => starship.starshipName)
  );

  const addFavorite = (newFavorite: favoriteStarship) => {
    const favoritesValue = favorites.value || [];
    currentFavotires.value = [...favoritesValue, newFavorite];
    localStorage.setItem(favoritesKey, JSON.stringify(currentFavotires.value));
  };
  const removeFavorite = (startshipName: string) => {
    const index = favorites.value
      .map((starship) => starship.starshipName)
      .indexOf(startshipName);

    currentFavotires.value = favorites.value.filter(
      (_, favoriteIndex) => index !== favoriteIndex
    );
    localStorage.setItem(favoritesKey, JSON.stringify(currentFavotires.value));
  };

  return { favorites, favoriteStarshipNames, addFavorite, removeFavorite };
});
