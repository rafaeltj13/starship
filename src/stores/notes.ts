import { defineStore } from "pinia";
import { computed, ref } from "vue";

type StarshipNote = {
  [key: string]: string;
};

export const useNotesStore = defineStore("notes", () => {
  const currentNotes = ref<StarshipNote>({});

  const notes = computed(() => currentNotes.value);

  const setNote = (starshipName: string, note: string) => {
    currentNotes.value[starshipName] = note;
  };

  return { notes, setNote };
});
