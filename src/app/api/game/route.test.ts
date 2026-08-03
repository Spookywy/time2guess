import { beforeEach, describe, expect, it, vi } from "vitest";

const { createGame } = vi.hoisted(() => ({
  createGame: vi.fn(),
}));

vi.mock("@/db/prisma", () => ({
  default: {
    game: {
      create: createGame,
    },
  },
}));

import { OPTIONS, POST } from "./route";

const staticSiteOrigin = "https://time2guess.pages.dev";

describe("POST /api/game", () => {
  beforeEach(() => {
    createGame.mockReset();
  });

  it("creates an empty game", async () => {
    const response = await POST();

    expect(createGame).toHaveBeenCalledOnce();
    expect(createGame).toHaveBeenCalledWith({ data: {} });
    expect(response.status).toBe(201);
    expect(response.headers.get("Access-Control-Allow-Origin")).toBe(
      staticSiteOrigin,
    );
    expect(await response.text()).toBe("");
  });
});

describe("OPTIONS /api/game", () => {
  it("allows requests from the static site", async () => {
    const response = await OPTIONS();

    expect(response.status).toBe(204);
    expect(response.headers.get("Access-Control-Allow-Origin")).toBe(
      staticSiteOrigin,
    );
    expect(response.headers.get("Access-Control-Allow-Methods")).toBe(
      "POST, OPTIONS",
    );
    expect(response.headers.get("Access-Control-Allow-Headers")).toBe(
      "Content-Type",
    );
  });
});
