import { Game } from "@/components/game/game";
import fs from "fs";
import shuffleArray from "./utils";

const NUMBER_OF_WORDS_TO_PICK = 40;

export default function Page() {
  const words = fs.readFileSync("src/assets/words.txt", "utf-8").split("\n");
  const shuffledWords = shuffleArray(words);
  const randomWords = shuffledWords.slice(0, NUMBER_OF_WORDS_TO_PICK);

  return <Game words={randomWords} />;
}
