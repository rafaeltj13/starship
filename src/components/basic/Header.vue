<template>
  <div
    class="flex items-center justify-between lg:pl-[21px] lg:pr-[121px] pr-[32px]"
  >
    <img
      @click="goToView('Home')"
      src="/logo.png"
      class="cursor-pointer"
      alt="Logo"
    />
    <Button
      v-if="route.name !== 'Favorites'"
      @click="goToView('Favorites')"
      :content="t('header.favorites')"
      variant="default"
      size="lg"
      :disabled="false"
    />
  </div>
</template>

<script lang="ts" setup>
import Button from "@/components/basic/AppButton.vue";
import { useI18n } from "vue-i18n";
import { useRouter, useRoute } from "vue-router";

const { t } = useI18n();
const router = useRouter();
const route = useRoute();

const goToView = (name: string) => {
  router.push({
    name,
  });
};
</script>
