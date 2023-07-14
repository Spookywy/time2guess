import { RoundState } from "@/types/common";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

type RoundPlayingProps = {
  wordsToGuess: string[];
  currentWordIndex: number;
  setRoundState: (roundState: RoundState) => void;
};

export default function RoundPlaying({
  wordsToGuess,
  currentWordIndex,
  setRoundState,
}: RoundPlayingProps) {
  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
    }, 1000);

    if (timeLeft === 0) {
      clearInterval(timer);
      setRoundState(RoundState.break);
    }

    return () => clearInterval(timer);
  }, [setRoundState, timeLeft]);

  return (
    <div className="flex h-[calc(100%-var(--header-height))] flex-col items-center">
      <h1 className="mt-12 text-8xl font-extrabold text-dark-orange">
        {timeLeft}
      </h1>
      <h2 className="mt-10 text-center text-5xl font-bold text-jet">
        {wordsToGuess[currentWordIndex]}
      </h2>
      <div className="mt-auto flex flex-col items-center">
        <button className="mt-auto h-36 w-36 rounded-full bg-dark-orange text-8xl text-light-orange">
          <FontAwesomeIcon icon={faCheck} />
        </button>
        <button className="mt-5 h-20 w-20 rounded-full bg-jet text-5xl text-light-orange">
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
    </div>
  );
}
