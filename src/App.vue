<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Header from "@/components/UI/Header.vue";
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

<style scoped lang="scss">
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
