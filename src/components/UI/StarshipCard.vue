<template>
  <div class="w-full p-6 bg-dark-secondary rounded-2xl">
    <div class="flex justify-between">
      <div>
        <p class="text-[24px] font-bold mb-4">{{ starshipName }}</p>
        <p class="text-[18px] font-normal mb-3">{{ description }}</p>
        <Rating class="mb-3" :rating="props.rating" />
        <p class="text-[18px] font-normal mb-3">
          {{ t("home.passengers", { number: passengers || 0 }) }}
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
    <TextArea
      v-if="props.enableNotes"
      v-model="note"
      class="mt-4"
      :placeholer="t('favorites.addText')"
    />
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";
import { computed, ref, watch } from "vue";
import { storeToRefs } from "pinia";

import { useFavoritesStore } from "@/stores/favorites";
import { useNotesStore } from "@/stores/notes";
import TextArea from "@/components/basic/TextArea.vue";
import FavoriteButton from "@/components/core/FavoriteButton.vue";
import Rating from "@/components/core/Rating.vue";

const props = defineProps<{
  starshipName: string;
  description: string;
  rating: number;
  passengers: number;
  enableNotes: boolean;
  starshipNote: string;
}>();

const { t } = useI18n();

const favoritesStore = useFavoritesStore();

const { favoriteStarshipNames } = storeToRefs(favoritesStore);
const { addFavorite, removeFavorite } = favoritesStore;

const isFavorite = computed(() =>
  favoriteStarshipNames.value
    ? favoriteStarshipNames.value.includes(props.starshipName)
    : false
);

const toggleFavorite = () => {
  if (isFavorite.value) removeFavorite(props.starshipName);
  else
    addFavorite({
      starshipName: props.starshipName,
      description: props.description,
      rating: props.rating,
      passengers: props.passengers,
    });
};

const note = ref(props.starshipNote);

const { setNote } = useNotesStore();

watch(note, () => {
  setNote(props.starshipName, note.value);
});
</script>
