<template>
  <div>
    <p class="text-[48px] font-bold leading-[55px] mb-[60px]">
      {{ t("home.title") }}
    </p>
    <div v-if="!loading">
      <TransitionGroup
        name="list"
        tag="div"
        class="grid lg:grid-cols-2 gap-[32px] md:grid-cols-1"
      >
        <StarshipCard
          v-for="starship of starships"
          :key="starship.url"
          :starshipName="starship.name"
          :description="starship.manufacturer"
          :rating="parseInt(starship.hyperdrive_rating) || 0"
          :passengers="parseInt(starship.passengers) || 0"
          :enableNotes="false"
          :starshipNote="''"
        />
      </TransitionGroup>
      <Paginator
        class="mt-[52px]"
        @prev="currentPage--"
        @next="currentPage++"
        :currentPage="currentPage"
        :isLastPage="starships.length < 10"
      />
    </div>
    <div v-else class="flex items-center w-full justify-center">
      <AppSpinner />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, Ref, ref, watch } from "vue";
import { useI18n } from "vue-i18n";

import { getStarships } from "@/services/swapi.service";
import { StarshipItem } from "@/types/starship";

import Paginator from "@/components/starship/Paginator.vue";
import StarshipCard from "@/components/starship/StarshipCard.vue";
import AppSpinner from "@/components/basic/AppSpinner.vue";

const { t } = useI18n();

const loading = ref(false);
const starships = ref<StarshipItem[]>([]);

const currentPage = ref(1);

const findStarships = async () => {
  loading.value = true;
  starships.value = [];

  const starshipArray = await getStarships(currentPage.value);
  loading.value = false;

  starshipArray.forEach(async (e: StarshipItem, i: number) =>
    addItemsOnDelay(e, i, starships)
  );
};

const addItemsOnDelay = (
  item: StarshipItem,
  index: number,
  array: Ref<Array<StarshipItem>>
) =>
  new Promise<void>((resolve) => {
    setTimeout(() => {
      array.value.push(item);
      resolve();
    }, 100 * index);
  });

onMounted(() => {
  findStarships();
});

watch(currentPage, () => {
  findStarships();
});
</script>
