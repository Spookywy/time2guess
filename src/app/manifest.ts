import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Time2Guess",
    short_name: "Time2Guess",
    description:
      "Le super jeu de société dans lequel les joueurs doivent deviner et faire deviner des mots.",
    start_url: "/",
    display: "fullscreen",
    background_color: "#f8d7b0",
    theme_color: "#f8d7b0",
    icons: [
      {
        src: "/icon.png",
        sizes: "480x480",
        type: "image/png",
      },
    ],
  };
}
