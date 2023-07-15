import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SetStateAction, useEffect, useState } from "react";

type RoundPlayingProps = {
  wordsToGuess: string[];
  setWordsToGuess: (words: SetStateAction<string[]>) => void;
  currentWordIndex: number;
  setCurrentWordIndex: (index: SetStateAction<number>) => void;
  changeTeamPlaying: () => void;
  addGuessedWordToTeam: (word: string, team: 1 | 2) => void;
  teamPlaying: 1 | 2;
};

export default function RoundPlaying({
  wordsToGuess,
  setWordsToGuess,
  currentWordIndex,
  setCurrentWordIndex,
  changeTeamPlaying,
  addGuessedWordToTeam,
  teamPlaying,
}: RoundPlayingProps) {
  const [timeLeft, setTimeLeft] = useState(30);
  const [timeIsAnimated, setTimeIsAnimated] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
    }, 1000);

    if (timeLeft <= 0) {
      clearInterval(timer);
      changeTeamPlaying();
    }

    return () => clearInterval(timer);
  }, [changeTeamPlaying, timeLeft]);

  function handleWordGuessed() {
    addGuessedWordToTeam(wordsToGuess[currentWordIndex], teamPlaying);
    setWordsToGuess((prevWords) => {
      const newWords = [...prevWords];
      newWords.splice(currentWordIndex, 1);
      return newWords;
    });
    setCurrentWordIndex((prevIndex) => prevIndex - 1);
  }

  function handleWordNotGuessed() {
    setCurrentWordIndex((prevIndex) => prevIndex - 1);
    setTimeIsAnimated(true);
    setTimeout(() => setTimeIsAnimated(false), 100);
    setTimeLeft((prevTimeLeft) => prevTimeLeft - 5);
  }

  return (
    <div className="flex h-[calc(100%-var(--header-height))] flex-col items-center">
      <h1
        className={`mt-12 text-8xl font-extrabold text-dark-orange ${
          timeIsAnimated && "animate-ping text-jet"
        }`}
      >
        {timeLeft}
      </h1>
      <h2 className="mt-10 text-center text-5xl font-bold text-jet">
        {wordsToGuess[currentWordIndex]}
      </h2>
      <div className="mt-auto flex flex-col items-center">
        <button
          className="mt-auto h-36 w-36 rounded-full bg-dark-orange text-8xl text-light-orange active:text-jet"
          onClick={handleWordGuessed}
        >
          <FontAwesomeIcon icon={faCheck} />
        </button>
        <button
          className="mt-5 h-20 w-20 rounded-full bg-jet text-5xl text-light-orange active:text-dark-orange"
          onClick={handleWordNotGuessed}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
    </div>
  );
}
