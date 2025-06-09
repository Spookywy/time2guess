import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter } from "next/font/google";
import "./globals.css";
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Time2Guess",
  description:
    "Le super jeu de société dans lequel les joueurs doivent deviner et faire deviner des mots.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <GoogleTagManager gtmId="GTM-PKZPZBHQ" />
      <GoogleAnalytics gaId="G-MFWGFR4M69" />
      <body className={`${inter.className} h-full bg-light-orange`}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
