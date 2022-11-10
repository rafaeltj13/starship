import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

import FavoriteButton from "./FavoriteButton.vue";

describe("FavoriteButton", () => {
  it("renders favorite button with filled heart", () => {
    const wrapper = mount(FavoriteButton, {
      props: { isFavorite: true },
    });

    expect(wrapper.props().isFavorite).toBe(true);
  });

  it("renders favorite button with heart not filled", () => {
    const wrapper = mount(FavoriteButton, {
      props: { isFavorite: false },
    });

    expect(wrapper.props().isFavorite).toBe(false);
  });
});
