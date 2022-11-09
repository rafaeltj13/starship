<template>
  <div
    class="w-full h-[209px] p-6 bg-dark-secondary rounded-2xl flex justify-between"
  >
    <div>
      <p class="text-[24px] font-bold mb-4">{{ starshipName }}</p>
      <p class="text-[18px] font-normal mb-3">{{ description }}</p>
      <div class="mb-3">stars</div>
      <p class="text-[18px] font-normal mb-3">
        {{ t("home.passengers", { number: passengers }) }}
      </p>
    </div>
    <div class="relative">
      <img
        src="/starship.svg"
        class="cursor-pointer w-[226px] h-[162px] rounded-lg"
        alt="starship"
      />
      <FavoriteButton
        :isFavorite="isFavorite"
        class="absolute right-2 top-2"
        @click="toggleFavorite"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";
import FavoriteButton from "@/components/favorite/FavoriteButton.vue";
import { useFavoritesStore } from "@/stores/favorites";
import { computed } from "vue";

const props = defineProps<{
  starshipName: string;
  description: string;
  rating: number;
  passengers: number;
}>();

const { currentFavorites, addFavorite, removeFavorite } = useFavoritesStore();

const isFavorite = computed(() =>
  currentFavorites.includes(props.starshipName)
);

const toggleFavorite = () => {
  if (isFavorite.value) removeFavorite(props.starshipName);
  else addFavorite(props.starshipName);
};

const { t } = useI18n();
</script>
