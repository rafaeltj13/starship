import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { createI18n } from "vue-i18n";
import en from "../../../../locales/en";

import Paginator from "./Paginator.vue";

describe("Paginator", () => {
  it("renders default paginator", () => {
    const i18n = createI18n({
      legacy: false,
      locale: "en",
      fallbackLocale: "en",
      messages: {
        en,
      },
    });

    const wrapper = mount(Paginator, {
      props: { currentPage: 1, isLastPage: false },
      global: {
        plugins: [i18n],
      },
    });

    expect(wrapper.props().currentPage).toBe(1);
    expect(wrapper.props().isLastPage).toBe(false);
  });

  it("next page disabled", () => {
    const i18n = createI18n({
      legacy: false,
      locale: "en",
      fallbackLocale: "en",
      messages: {
        en,
      },
    });

    const wrapper = mount(Paginator, {
      props: { currentPage: 10, isLastPage: true },
      global: {
        plugins: [i18n],
      },
    });

    const nextPageButton: DOMWrapper<Element> =
      wrapper.find(".next-page-button");

    expect(nextPageButton.isDisabled()).toBe(true);
  });
});
