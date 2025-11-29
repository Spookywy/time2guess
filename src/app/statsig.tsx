"use client";

import React from "react";
import { StatsigProvider, useClientAsyncInit } from "@statsig/react-bindings";
import { StatsigAutoCapturePlugin } from "@statsig/web-analytics";
import { StatsigSessionReplayPlugin } from "@statsig/session-replay";
import { STATSIG_CLIENT_KEY } from "@/utils/constants";

export default function Statsig({ children }: { children: React.ReactNode }) {
  const { client } = useClientAsyncInit(
    STATSIG_CLIENT_KEY,
    { userID: "generic-user" },
    {
      plugins: [
        new StatsigAutoCapturePlugin(),
        new StatsigSessionReplayPlugin(),
      ],
    }
  );

  return (
    <StatsigProvider client={client} loadingComponent={null}>
      {children}
    </StatsigProvider>
  );
}
