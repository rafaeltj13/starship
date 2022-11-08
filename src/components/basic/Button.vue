<template>
  <div
    class="bg-dark-secondary px-5 text-red-primary rounded-[20px] cursor-pointer h-[51px] flex items-center justify-center text-[24px]"
  >
    {{ content }}
  </div>
</template>

<script setup lang="ts">
defineProps<{
  content: string;
}>();
</script>
