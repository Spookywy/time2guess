import { GOOGLE_ANALYTICS_ID } from "@/utils/constants";
import { GoogleAnalytics as GoogleAnalyticsBase } from "@next/third-parties/google";

export function GoogleAnalytics() {
  // Only render Google Analytics in production environment
  if (process.env.VERCEL_ENV === "production") {
    return <GoogleAnalyticsBase gaId={GOOGLE_ANALYTICS_ID} />;
  }
  return null;
}
