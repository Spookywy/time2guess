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
  roundDuration: number;
};

export default function RoundPlaying({
  wordsToGuess,
  setWordsToGuess,
  currentWordIndex,
  setCurrentWordIndex,
  changeTeamPlaying,
  addGuessedWordToTeam,
  teamPlaying,
  roundDuration,
}: RoundPlayingProps) {
  const [timeLeft, setTimeLeft] = useState(roundDuration);
  const [timeIsAnimated, setTimeIsAnimated] = useState(false);
  const [initalNumberOfWordsToGuess] = useState(wordsToGuess.length);
  const [numberOfWordsViewed, setNumberOfWordsViewed] = useState(0);

  const timeIsOver = timeLeft <= 0;

  function endRound() {
    updateCurrentWordIndex(wordsToGuess.length);
    changeTeamPlaying();
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        const nextTimeLeft = prevTimeLeft - 1;

        if ("vibrate" in navigator && nextTimeLeft <= 5 && nextTimeLeft > 0) {
          navigator.vibrate(100);
        }

        return nextTimeLeft;
      });
    }, 1000);

    return () => {
      if ("vibrate" in navigator && timeIsOver) navigator.vibrate([1000]);
      clearInterval(timer);
    };
  }, [timeIsOver]);

  useEffect(() => {
    if (timeIsOver) {
      endRound();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft]);

  function updateCurrentWordIndex(wordsToGuessLength: number) {
    if (currentWordIndex <= 0) {
      setCurrentWordIndex(wordsToGuessLength - 1);
    } else {
      setCurrentWordIndex((prevIndex) => prevIndex - 1);
    }
  }

  useEffect(() => {
    if (numberOfWordsViewed === initalNumberOfWordsToGuess) {
      updateCurrentWordIndex(wordsToGuess.length);
      changeTeamPlaying();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numberOfWordsViewed]);

  function handleWordGuessed() {
    setNumberOfWordsViewed((prevNumber) => prevNumber + 1);
    addGuessedWordToTeam(wordsToGuess[currentWordIndex], teamPlaying);
    setWordsToGuess((prevWords) => {
      const newWords = [...prevWords];
      newWords.splice(currentWordIndex, 1);
      updateCurrentWordIndex(newWords.length);
      return newWords;
    });
  }

  function handleWordNotGuessed() {
    setNumberOfWordsViewed((prevNumber) => prevNumber + 1);
    updateCurrentWordIndex(wordsToGuess.length);
    setTimeIsAnimated(true);
    setTimeout(() => setTimeIsAnimated(false), 100);
    setTimeLeft((prevTimeLeft) => {
      const nextTimeLeft = prevTimeLeft - 5;

      if (nextTimeLeft <= 0) {
        endRound();
        return prevTimeLeft;
      }
      return nextTimeLeft;
    });
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
      <h2 className="mt-3 text-center text-5xl font-bold text-jet md:mt-7">
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
          className="mt-10 h-20 w-20 rounded-full bg-jet text-5xl text-light-orange active:text-dark-orange"
          onClick={handleWordNotGuessed}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
    </div>
  );
}
