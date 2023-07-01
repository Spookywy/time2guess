import { RoundNumber } from "@/types/common";

type RoundResultsProps = {
  round: RoundNumber;
};

export default function RoundResults({ round }: RoundResultsProps) {
  return (
    <div>
      <h1>Résultats - Manche {round}</h1>
    </div>
  );
}
