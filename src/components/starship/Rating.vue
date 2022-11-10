<template>
  <div class="flex items-center gap-2">
    <div v-for="(_, index) of Array(props.rating)">
      <img
        v-if="props.rating - index >= 1"
        src="/startshipCard/star.svg"
        alt="star"
      />
      <img v-else src="/startshipCard/half_star.svg" alt="star" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  rating: number;
}>();
</script>
