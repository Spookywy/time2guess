import { Game } from "@/components/game/game";
import { MINIMUM_NUMBER_OF_TEAMS } from "@/utils/constants";
import path from "path";
import { file } from "bun";

export default async function Page(props: {
  searchParams: Promise<{ numberOfTeams?: string }>;
}) {
  const filePath = path.join(process.cwd(), "src/assets/words.txt");
  const words = (await file(filePath).text()).split("\n");

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
