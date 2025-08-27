import { RoundNumber, TeamResult } from "@/types/common";
import { faRankingStar, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import SecondaryButton from "../buttons/secondaryButton";

type RoundResultsProps = {
  round: RoundNumber;
  teamScores: TeamResult[];
  changeRound: () => void;
};

export default function RoundResults({
  round,
  teamScores,
  changeRound,
}: RoundResultsProps) {
  const router = useRouter();

  // Disable the play button for 3 seconds to prevent the user from clicking it accidentally
  const [playButtonIsDisabled, setPlayButtonIsDisabled] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setPlayButtonIsDisabled(false);
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const teamTotalScores = teamScores.map(
    (score) => score.round1 + score.round2 + score.round3,
  );

  const maxScore = Math.max(...teamTotalScores);
  const winningTeams = teamTotalScores.reduce(
    (acc, score, teamIndex) =>
      score === maxScore ? [...acc, teamIndex + 1] : acc,
    [] as number[],
  );

  const equalScore = winningTeams.length > 1;

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
              L&apos;équipe {winningTeams[0]} gagne !
            </p>
          ) : (
            <p className="mt-2 font-extrabold">
              Égalité entre les équipes {winningTeams.join(", ")} !
            </p>
          )}
        </div>
      )}
      <div className="gap-8 text-3xl sm:mt-16 mt-8 flex flex-wrap max-w-full justify-center">
        {teamScores.map((score, index) => (
          <div key={index} className="flex flex-col gap-3">
            <h2 className="font-extrabold text-dark-orange">
              Équipe {index + 1}
            </h2>
            <p>{score.round1}</p>
            <p>{score.round2}</p>
            <p>{score.round3}</p>
            <p className="font-bold">{teamTotalScores[index]}</p>
          </div>
        ))}
      </div>
      <div className="mt-auto py-4 md:py-8">
        {round !== 3 ? (
          <SecondaryButton
            label="Manche suivante"
            onClick={changeRound}
            disabled={playButtonIsDisabled}
          />
        ) : (
          <SecondaryButton
            label="Nouvelle partie"
            onClick={() => router.push("/")}
            disabled={playButtonIsDisabled}
          />
        )}
      </div>
    </div>
  );
}
