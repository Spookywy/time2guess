import { beforeEach, describe, expect, it, vi } from "vitest";

const { fetchMock } = vi.hoisted(() => ({
  fetchMock: vi.fn(),
}));

vi.mock("@/config/client", () => ({
  clientConfig: {
    time2GuessApiUrl: "http://localhost:3000/api",
  },
}));

vi.stubGlobal("fetch", fetchMock);

import { createGame } from "./createGame";

describe("createGame", () => {
  beforeEach(() => {
    fetchMock.mockReset();
  });

  it("resolves when the API request succeeds", async () => {
    fetchMock.mockResolvedValue({ ok: true, status: 201 });

    await expect(createGame()).resolves.toBeUndefined();
    expect(fetchMock).toHaveBeenCalledWith("http://localhost:3000/api/game", {
      method: "POST",
    });
  });

  it("throws when the API request fails", async () => {
    fetchMock.mockResolvedValue({ ok: false, status: 500 });

    await expect(createGame()).rejects.toThrow("Failed to create game: 500");
  });
});
