import { FlagContextProvider } from "@/flags/flagContext";
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import Page from "../app/page";

test("Page", () => {
  render(
    <FlagContextProvider featureFlags={{ christmasTheme: false }}>
      <Page />
    </FlagContextProvider>,
  );
  expect(
    screen.getByRole("heading", { level: 1, name: "Time 2 Guess" }),
  ).toBeDefined();
});
