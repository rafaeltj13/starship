<template>
  <p class="text-2xl font-light leading-[55px]">
    {{ t("notFound") }}
  </p>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>
