import { RoundState } from "@/types/common";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import PrimaryButton from "../buttons/primaryButton";

type RoundBreakProps = {
  round: number;
  teamPlaying: 1 | 2;
  wordsToGuess: string[];
  setRoundState: React.Dispatch<React.SetStateAction<RoundState>>;
};

export default function RoundBreak({
  round,
  teamPlaying,
  wordsToGuess,
  setRoundState,
}: RoundBreakProps) {
  // Disable the play button for 1 second to prevent the user from clicking it accidentally
  const [playButtonIsDisabled, setPlayButtonIsDisabled] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setPlayButtonIsDisabled(false);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  function handlePlay() {
    setRoundState(RoundState.playing);
  }

  return (
    <div className="m-4 flex h-[calc(100%-var(--header-height))] flex-col items-center text-center text-3xl text-jet">
      <h1 className="text-6xl font-extrabold">Manche {round}</h1>
      <FontAwesomeIcon
        icon={faBookOpen}
        className="mt-20 text-7xl text-dark-orange"
      />
      <h2 className="mt-5 font-bold">
        <span className="text-dark-orange">{wordsToGuess.length} mots</span>{" "}
        restants
      </h2>
      <div className="mt-auto py-4 text-2xl md:py-8">
        <p className="mb-2">
          Au tour de{" "}
          <span className="font-bold text-dark-orange">
            l&apos;équipe {teamPlaying}
          </span>
        </p>
        <PrimaryButton
          label="Jouer"
          onClick={handlePlay}
          disabled={playButtonIsDisabled}
        />
      </div>
    </div>
  );
}
