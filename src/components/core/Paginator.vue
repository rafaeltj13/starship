<template>
  <div class="flex items-center justify-center">
    <Button
      variant="text"
      @click="emit('prev')"
      :content="t('paginator.prev')"
      size="sm"
      :disabled="props.currentPage === 1"
    />
    <Button
      class="ml-3"
      variant="default"
      @click="emit('next')"
      :content="t('paginator.next')"
      size="sm"
      :disabled="props.isLastPage"
    />
  </div>
</template>

<script lang="ts" setup>
import Button from "@/components/basic/Button.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const emit = defineEmits(["prev", "next"]);

const props = defineProps<{
  currentPage: number;
  isLastPage: boolean;
}>();
</script>
