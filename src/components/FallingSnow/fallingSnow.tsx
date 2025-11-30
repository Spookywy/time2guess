import { createFeatureFlag } from "@/flags/flags";
import { FallingSnowAnimation } from "./fallingSnowAnimation";

export async function FallingSnow() {
  const isChristmasThemeEnabled = await createFeatureFlag("christmas-theme")();

  return isChristmasThemeEnabled ? <FallingSnowAnimation /> : null;
}
