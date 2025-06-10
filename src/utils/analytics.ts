import { APP_VERSION } from "./constants";

// https://developers.google.com/analytics/devguides/collection/ga4/events?hl=fr&client_type=gtag
export function sendEvent(event: string, params: Record<string, string>) {
  if (typeof window === "undefined") return;
  window.gtag("event", event, {
    ...params,
    app_version: APP_VERSION,
  });
}
