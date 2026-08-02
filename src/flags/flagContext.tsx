"use client";
import { useGateValue } from "@statsig/react-bindings";
import type { ReactNode } from "react";
import { createContext, useContext } from "react";

export type FeatureFlags = {
  christmasTheme: boolean;
};

const FlagContext = createContext<FeatureFlags | undefined>(undefined);

interface FlagContextProviderProps {
  children: ReactNode;
  featureFlags: FeatureFlags;
}

export function FlagContextProvider({
  children,
  featureFlags,
}: FlagContextProviderProps) {
  return (
    <FlagContext.Provider value={featureFlags}>{children}</FlagContext.Provider>
  );
}

export function StatsigFlagContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const christmasTheme = useGateValue("christmas-theme");

  return (
    <FlagContextProvider featureFlags={{ christmasTheme }}>
      {children}
    </FlagContextProvider>
  );
}

export function useFlag() {
  const context = useContext(FlagContext);

  if (!context) {
    throw new Error("useFlag must be used within a FlagContextProvider");
  }

  return context;
}
