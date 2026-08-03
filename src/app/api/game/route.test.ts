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

import { POST } from "./route";

describe("POST /api/game", () => {
  beforeEach(() => {
    createGame.mockReset();
  });

  it("creates an empty game", async () => {
    const response = await POST();

    expect(createGame).toHaveBeenCalledOnce();
    expect(createGame).toHaveBeenCalledWith({ data: {} });
    expect(response.status).toBe(201);
    expect(await response.text()).toBe("");
  });
});
