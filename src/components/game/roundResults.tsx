import { RoundNumber, TeamResult } from "@/types/common";
import { faRankingStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import SecondaryButton from "../buttons/secondaryButton";

type RoundResultsProps = {
  round: RoundNumber;
  team1Score: TeamResult;
  team2Score: TeamResult;
  changeRound: () => void;
};

export default function RoundResults({
  round,
  team1Score,
  team2Score,
  changeRound,
}: RoundResultsProps) {
  const router = useRouter();

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
          <p>{team1Score.round1}</p>
          <p>{team1Score.round2}</p>
          <p>{team1Score.round3}</p>
        </div>
        <div>
          <h2 className="font-bold">Équipe 2</h2>
          <p>{team2Score.round1}</p>
          <p>{team2Score.round2}</p>
          <p>{team2Score.round3}</p>
        </div>
      </div>
      <div className="mt-auto py-4 md:py-8">
        {round !== 3 ? (
          <SecondaryButton label="Manche suivante" onClick={changeRound} />
        ) : (
          <SecondaryButton
            label="Nouvelle partie"
            onClick={() => router.push("/")}
          />
        )}
      </div>
    </div>
  );
}
