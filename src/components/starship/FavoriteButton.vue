<template>
  <div
    class="h-[44px] w-[44px] bg-dark-secondary rounded-full flex items-center justify-center cursor-pointer hover:animate-pulse"
  >
    <img
      :src="`/startshipCard/heart${isFavorite ? '_filled' : ''}.svg`"
      class="w-[25px] h-[22px]"
      alt="heart"
    />
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  isFavorite: boolean;
}>();
</script>
