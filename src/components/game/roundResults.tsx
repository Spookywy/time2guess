import { RoundNumber, TeamResult } from "@/types/common";
import { faRankingStar, faTrophy } from "@fortawesome/free-solid-svg-icons";
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

  const team1TotalScore =
    team1Score.round1 + team1Score.round2 + team1Score.round3;
  const team2TotalScore =
    team2Score.round1 + team2Score.round2 + team2Score.round3;

  const winningTeam = team1TotalScore > team2TotalScore ? 1 : 2;
  const equalScore = team1TotalScore === team2TotalScore;

  return (
    <div className="m-4 flex h-[calc(100%-var(--header-height))] flex-col items-center text-center text-2xl text-jet">
      <h1 className="text-6xl font-extrabold text-dark-orange">
        Fin de la Manche {round}
      </h1>
      {round !== 3 ? (
        <FontAwesomeIcon
          icon={faRankingStar}
          className="mt-8 text-8xl sm:mt-16"
        />
      ) : (
        <div className="mt-8 text-3xl sm:mt-16">
          <FontAwesomeIcon icon={faTrophy} className="text-6xl" />
          {!equalScore ? (
            <p className="mt-2 font-extrabold">
              L&apos;équipe {winningTeam} gagne !
            </p>
          ) : (
            <p className="mt-2 font-extrabold">Égalité !</p>
          )}
        </div>
      )}
      <div className="mt-8 flex text-3xl sm:mt-16">
        <div className="mr-8 flex flex-col gap-3">
          <h2 className="font-extrabold text-dark-orange">Équipe 1</h2>
          <p>{team1Score.round1}</p>
          <p>{team1Score.round2}</p>
          <p>{team1Score.round3}</p>
          <p className="font-bold">{team1TotalScore}</p>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="font-extrabold text-dark-orange">Équipe 2</h2>
          <p>{team2Score.round1}</p>
          <p>{team2Score.round2}</p>
          <p>{team2Score.round3}</p>
          <p className="font-bold">{team2TotalScore}</p>
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
