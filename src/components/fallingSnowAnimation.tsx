import { createFeatureFlag } from "@/flags/flags";

export async function FallingSnowAnimation() {
  const isChristmasThemeEnabled = await createFeatureFlag("christmas-theme")();

  if (!isChristmasThemeEnabled) return null;

  return <p>❄️</p>;
}
