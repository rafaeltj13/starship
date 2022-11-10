<script setup lang="ts">
import Header from "@/components/basic/Header.vue";
</script>

<template>
  <div class="bg-dark-primary text-white-primary h-screen overflow-hidden">
    <Header />
    <div
      class="lg:pl-[94px] lg:pt-[38px] lg:pr-[120px] h-full overflow-auto pb-32 p-[34px]"
    >
      <router-view />
    </div>
  </div>
</template>
