<template>
  <div>
    <p class="text-[48px] font-bold leading-[55px] mb-[60px]">
      {{ t("home.title") }}
    </p>
    <div v-if="!loading" class="grid grid-cols-2 gap-[32px]">
      <StarshipCard
        v-for="starship of starships"
        :key="starship.url"
        :starshipName="starship.name"
        :description="starship.model"
        :rating="parseInt(starship.hyperdrive_rating)"
        :passengers="parseInt(starship.passengers)"
      />
    </div>
    <div v-else class="flex items-center w-full justify-center">
      <p>Loading...</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import StarshipCard from "@/components/UI/StarshipCard.vue";
import { getStarships } from "@/services/swapi.service";
import { StarshipItem } from "@/types/starship";

const { t } = useI18n();

const loading = ref(false);
const starships = ref<StarshipItem[]>([]);

const findStarships = async () => {
  loading.value = true;
  starships.value = await getStarships();
  loading.value = false;
};

onMounted(() => {
  findStarships();
});
</script>
