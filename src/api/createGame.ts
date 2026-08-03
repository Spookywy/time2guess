import { clientConfig } from "@/config/client";

export async function createGame() {
  const response = await fetch(`${clientConfig.time2GuessApiUrl}/game`, {
    method: "POST",
  });

  if (!response.ok) {
    throw new Error(`Failed to create game: ${response.status}`);
  }
}
