import { Game } from "@/components/game/game";
import { readFile } from "node:fs/promises";
import path from "path";
import { Suspense } from "react";

export default async function Page() {
  const filePath = path.join(process.cwd(), "src/assets/words.txt");
  const words = (await readFile(filePath, "utf8")).split("\n");

  return (
    <Suspense>
      <Game words={words} />
    </Suspense>
  );
}
