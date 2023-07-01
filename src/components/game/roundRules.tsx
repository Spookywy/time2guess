import { RoundNumber } from "@/types/common";

type RoundRulesProps = {
  round: RoundNumber;
};

export default function RoundRules({ round }: RoundRulesProps) {
  return (
    <div>
      <h1>Manche {round}</h1>
    </div>
  );
}
