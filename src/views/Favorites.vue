<template>
  <div>
    <p class="text-[48px] font-bold leading-[55px] mb-[62px]">
      {{ t("favorites.title") }}
    </p>
    <div v-if="favorites.length">
      <TransitionGroup
        name="list"
        tag="div"
        class="grid lg:grid-cols-2 gap-[32px] md:grid-cols-1"
      >
        <StarshipCard
          v-for="starship of favorites"
          :key="starship.starshipName"
          :starshipName="starship.starshipName"
          :description="starship.description"
          :rating="starship.rating || 0"
          :passengers="starship.passengers || 0"
          :enableNotes="true"
          :starshipNote="notes[`${starship.starshipName}`] || ''"
        />
      </TransitionGroup>
      <Paginator class="mt-[52px]" :currentPage="1" :isLastPage="true" />
    </div>
    <div v-else>
      <p class="text-lg font-light leading-[55px] mb-[62px]">
        {{ t("favorites.empty") }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";
import { storeToRefs } from "pinia";

import { useFavoritesStore } from "@/stores/favorites";
import { useNotesStore } from "@/stores/notes";
import StarshipCard from "@/components/starship/StarshipCard.vue";

import Paginator from "@/components/starship/Paginator.vue";

const { t } = useI18n();

const favoritesStore = useFavoritesStore();
const { favorites } = storeToRefs(favoritesStore);

const notesStore = useNotesStore();
const { notes } = storeToRefs(notesStore);
</script>
