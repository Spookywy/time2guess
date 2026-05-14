import { afterEach, describe, expect, it, vi } from "vitest";

import { shuffleArray } from "./utils";

describe("shuffleArray", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("returns a shuffled copy of the array", () => {
    vi.spyOn(Math, "random")
      .mockReturnValueOnce(0.5)
      .mockReturnValueOnce(0)
      .mockReturnValueOnce(0.9);

    expect(shuffleArray(["one", "two", "three", "four"])).toEqual([
      "four",
      "two",
      "one",
      "three",
    ]);
  });
});
