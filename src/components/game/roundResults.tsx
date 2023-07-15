import { RoundNumber } from "@/types/common";

type RoundResultsProps = {
  round: RoundNumber;
  wordsGuessedByTeam1: string[];
  wordsGuessedByTeam2: string[];
};

export default function RoundResults({
  round,
  wordsGuessedByTeam1,
  wordsGuessedByTeam2,
}: RoundResultsProps) {
  return (
    <div>
      <h1>Fin de la manche {round}</h1>
    </div>
  );
}
