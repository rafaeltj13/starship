<template>
  <div class="flex items-center justify-between pl-[21px] pr-[121px]">
    <img
      @click="goToView('Home')"
      src="/logo.png"
      class="cursor-pointer"
      alt="Logo"
    />
    <Button @click="goToView('Favorites')" :content="t('header.favorites')" />
  </div>
</template>

<script lang="ts" setup>
import Button from "@/components/basic/Button.vue";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";

const { t } = useI18n();
const router = useRouter();

const goToView = (name: string) => {
  router.push({
    name,
  });
};
</script>
