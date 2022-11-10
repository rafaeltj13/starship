<template>
  <button
    class="px-5 rounded-[20px] cursor-pointer flex items-center justify-center font-normal hover:opacity-80"
    :class="{
      ['h-[51px] text-2xl text-red-primary']: props.size === 'lg',
      ['text-xs h-[32px]']: props.size === 'sm',
      ['bg-dark-primary ']: props.variant === 'text',
      ['bg-dark-secondary']: props.variant === 'default',
      ['opacity-50']: props.disabled,
    }"
    :disabled="props.disabled"
  >
    {{ content }}
  </button>
</template>

<script setup lang="ts">
type ButtonVariant = "default" | "text";
type ButtonSize = "lg" | "sm";

const props = defineProps<{
  content: string;
  variant: ButtonVariant;
  size: ButtonSize;
  disabled: boolean;
}>();
</script>
