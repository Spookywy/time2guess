import { createFeatureFlag } from "./flags";
import { FlagContextProvider } from "./flagContext";

type FlagContextServerProps = {
  children: React.ReactNode;
};

export async function FlagContextServer({ children }: FlagContextServerProps) {
  const christmasTheme = await createFeatureFlag("christmas-theme")();

  return (
    <FlagContextProvider featureFlags={{ christmasTheme }}>
      {children}
    </FlagContextProvider>
  );
}
