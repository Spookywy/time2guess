"use client";
import { FallingSnowAnimation } from "./fallingSnowAnimation";
import { useFlag } from "@/flags/flagContext";

export function FallingSnow() {
  const { christmasTheme } = useFlag();

  return christmasTheme ? <FallingSnowAnimation /> : null;
}
