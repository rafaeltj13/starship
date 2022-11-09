import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useFavoritesStore = defineStore("favorites", () => {
  const favorites = ref<String[]>([]);
  const currentFavorites = computed(() => favorites.value);

  const addFavorite = (newFavorite: string) => {
    favorites.value.push(newFavorite);
  };
  const removeFavorite = (favorite: string) => {
    const index = favorites.value.indexOf(favorite);
    favorites.value.splice(index, 1);
  };

  return { currentFavorites, addFavorite, removeFavorite };
});
