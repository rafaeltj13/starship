import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

import Rating from "./Rating.vue";

describe("Rating", () => {
  it("renders component successfully", () => {
    const wrapper = mount(Rating, {
      props: { rating: 5 },
    });

    expect(wrapper.props().rating).toBe(5);
  });

  it("renders component withour any stars", () => {
    const wrapper = mount(Rating, {
      props: { rating: 0 },
    });

    const star = wrapper.findComponent(".star-rating");
    expect(star.exists()).toBe(false);
  });
});
