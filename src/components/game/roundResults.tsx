import { RoundNumber } from "@/types/common";
import { faRankingStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SecondaryButton from "../buttons/secondaryButton";

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
    <div className="m-4 flex h-[calc(100%-var(--header-height))] flex-col items-center text-center text-2xl text-jet">
      <h1 className="text-6xl font-extrabold">Fin de la Manche {round}</h1>
      <FontAwesomeIcon
        icon={faRankingStar}
        className="mt-8 text-8xl text-dark-orange sm:mt-16"
      />
      <div className="mt-8 flex text-3xl sm:mt-16">
        <div className="mr-8">
          <h2 className="font-bold">Équipe 1</h2>
          <p>-</p>
          <p>-</p>
          <p>-</p>
        </div>
        <div>
          <h2 className="font-bold">Équipe 2</h2>
          <p>-</p>
          <p>-</p>
          <p>-</p>
        </div>
      </div>
      <div className="mt-auto py-4 md:py-8">
        <SecondaryButton label="Manche suivante" onClick={() => {}} />
      </div>
    </div>
  );
}
