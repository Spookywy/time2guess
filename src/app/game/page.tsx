import { Game } from "@/components/game/game";
import { MINIMUM_NUMBER_OF_TEAMS } from "@/utils/constants";
import fs from "fs";

export default async function Page(props: {
  searchParams: Promise<{ numberOfTeams?: string }>;
}) {
  const words = fs.readFileSync("src/assets/words.txt", "utf-8").split("\n");
  const searchParams = await props.searchParams;

  function getNumberOfTeams() {
    const numberOfTeamsParam = Number(searchParams.numberOfTeams);
    if (!numberOfTeamsParam || isNaN(numberOfTeamsParam)) {
      return MINIMUM_NUMBER_OF_TEAMS;
    }
    return Math.max(MINIMUM_NUMBER_OF_TEAMS, numberOfTeamsParam);
  }

  return <Game words={words} numberOfTeams={getNumberOfTeams()} />;
}
