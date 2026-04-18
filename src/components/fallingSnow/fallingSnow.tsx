"use client";
import { useFlag } from "@/flags/flagContext";
import { FallingSnowAnimation } from "./fallingSnowAnimation";

export function FallingSnow() {
  const { christmasTheme } = useFlag();

  return christmasTheme ? <FallingSnowAnimation /> : null;
}
