export function isPWA() {
  if (typeof window === "undefined") {
    return false;
  }

  const nav = window.navigator as Navigator & { standalone?: boolean };

  return (
    window.matchMedia("(display-mode: fullscreen)").matches ||
    nav.standalone === true // for iOS Safari
  );
}
