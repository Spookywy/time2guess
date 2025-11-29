import { getProviderData, createFlagsDiscoveryEndpoint } from "flags/next";
import * as flags from "../../../../flags/flags";

export const GET = createFlagsDiscoveryEndpoint(() => getProviderData(flags));
