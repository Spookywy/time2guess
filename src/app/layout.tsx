import { GoogleAdSense } from "@/components/google/googleAdSense";
import { GoogleAnalytics } from "@/components/google/googleAnalytics";
import { GOOGLE_PUBLISHER_ID, GOOGLE_TAG_MANAGER_ID } from "@/utils/constants";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { GoogleTagManager } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { VercelToolbar } from "@vercel/toolbar/next";
import Statsig from "./statsig";
import { FallingSnow } from "@/components/FallingSnow/fallingSnow";
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Time2Guess",
  description:
    "Le super jeu de société dans lequel les joueurs doivent deviner et faire deviner des mots.",
  other: {
    "google-adsense-account": "ca-pub-5339598658472621",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const shouldInjectToolbar = process.env.NODE_ENV === "development";

  return (
    <html lang="en" className="h-full">
      <GoogleAdSense gpId={GOOGLE_PUBLISHER_ID} />
      <GoogleTagManager gtmId={GOOGLE_TAG_MANAGER_ID} />
      <GoogleAnalytics />
      <body className={`${inter.className} h-full bg-light-orange`}>
        <Statsig>
          {children}
          <FallingSnow />
          <SpeedInsights />
          <Analytics />
        </Statsig>
        {shouldInjectToolbar && <VercelToolbar />}
      </body>
    </html>
  );
}
