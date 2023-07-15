import { Game } from "@/components/game/game";
import fs from "fs";

export default function Page() {
  const words = fs.readFileSync("src/assets/words.txt", "utf-8").split("\n");

  return <Game words={words} />;
}
