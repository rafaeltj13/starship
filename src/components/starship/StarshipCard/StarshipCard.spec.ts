import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import { createI18n } from "vue-i18n";
import en from "../../../../locales/en";

// import { useFavoritesStore } from "@/stores/favorites";

import { createTestingPinia } from "@pinia/testing";

import StarshipCard from "./StarshipCard.vue";

describe("StarshipCard", () => {
  it("renders component successfully", () => {
    const i18n = createI18n({
      legacy: false,
      locale: "en",
      fallbackLocale: "en",
      messages: {
        en,
      },
    });

    // const store = useFavoritesStore();
    // store.

    const wrapper = mount(StarshipCard, {
      props: {
        starshipName: "Starship Test",
        description: "Starship Test description",
        rating: 5,
        passengers: 200,
        enableNotes: false,
        starshipNote: "",
      },
      global: {
        plugins: [
          i18n,
          createTestingPinia({
            createSpy: vi.fn,
          }),
        ],
      },
    });

    expect(wrapper.props().starshipName).toBe("Starship Test");
    expect(wrapper.props().description).toBe("Starship Test description");
    expect(wrapper.props().rating).toBe(5);
    expect(wrapper.props().passengers).toBe(200);
    expect(wrapper.props().enableNotes).toBe(false);
    expect(wrapper.props().starshipNote).toBe("");
  });

  it("renders component with note enabled", () => {
    const i18n = createI18n({
      legacy: false,
      locale: "en",
      fallbackLocale: "en",
      messages: {
        en,
      },
    });

    const wrapper = mount(StarshipCard, {
      props: {
        starshipName: "Starship Test 2",
        description: "Starship Test description 2",
        rating: 3,
        passengers: 500,
        enableNotes: true,
        starshipNote: "Testing note...",
      },
      global: {
        plugins: [
          i18n,
          createTestingPinia({
            createSpy: vi.fn,
          }),
        ],
      },
    });

    expect(wrapper.props().starshipName).toBe("Starship Test 2");
    expect(wrapper.props().description).toBe("Starship Test description 2");
    expect(wrapper.props().rating).toBe(3);
    expect(wrapper.props().passengers).toBe(500);
    expect(wrapper.props().enableNotes).toBe(true);
    expect(wrapper.props().starshipNote).toBe("Testing note...");

    const starshipTextArea = wrapper.findComponent(".starship-card-text-area");
    expect(starshipTextArea.exists()).toBe(true);
  });
});
