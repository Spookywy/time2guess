import { getProviderData, createFlagsDiscoveryEndpoint } from "flags/next";
import { getProviderData as getStatsigProviderData } from "@flags-sdk/statsig";
import * as flags from "../../../../flags/flags";
import { mergeProviderData } from "flags";

export const GET = createFlagsDiscoveryEndpoint(async () => {
  if (!process.env.STATSIG_CONSOLE_KEY) {
    throw new Error("STATSIG_CONSOLE_KEY is not defined");
  }
  return mergeProviderData([
    getStatsigProviderData({
      consoleApiKey: process.env.STATSIG_CONSOLE_KEY,
    }),
  ]);
});
