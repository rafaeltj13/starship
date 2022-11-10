<template>
  <div
    class="h-[44px] w-[44px] bg-dark-secondary rounded-full flex items-center justify-center cursor-pointer"
  >
    <Transition name="scale" mode="out-in">
      <img
        :key="isFavorite ? 'filled' : 'empty'"
        :src="`/startshipCard/heart${isFavorite ? '_filled' : ''}.svg`"
        class="w-[25px] h-[22px]"
        alt="heart"
      />
    </Transition>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  isFavorite: boolean;
}>();
</script>
