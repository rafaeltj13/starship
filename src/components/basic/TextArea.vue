<template>
  <textarea
    class="bg-dark-secondary w-full p-[13px] border-white-primary border-[1px] rounded-[10px] text-lg font-light"
    :placeholder="props.placeholer"
    rows="4"
    cols="50"
    @input="
      emit('update:modelValue', ($event.target as HTMLInputElement).value)
    "
    :value="props.modelValue"
  />
</template>

<script lang="ts" setup>
const props = defineProps<{
  placeholer: string;
  modelValue: string;
}>();

const emit = defineEmits<{
  (event: "update:modelValue", payload: string): void;
}>();
</script>
