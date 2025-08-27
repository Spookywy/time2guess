import { TIME_PENALTY } from "@/utils/constants";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { TeamNumber } from "./game";

type RoundPlayingProps = {
  wordsToGuess: string[];
  setWordsToGuess: (words: SetStateAction<string[]>) => void;
  currentWordIndex: number;
  setCurrentWordIndex: (index: SetStateAction<number>) => void;
  changeTeamPlaying: () => void;
  addGuessedWordToTeam: (word: string, team: TeamNumber) => void;
  teamPlaying: TeamNumber;
  roundDuration: number;
  isTimePenaltyFeatureEnabled: boolean;
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
  isTimePenaltyFeatureEnabled,
}: RoundPlayingProps) {
  const [timeLeft, setTimeLeft] = useState(roundDuration);
  const [timeIsAnimated, setTimeIsAnimated] = useState(false);
  const [isTimePenaltyVisible, setIsTimePenaltyVisible] = useState(false);
  const [initialNumberOfWordsToGuess] = useState(wordsToGuess.length);
  const [numberOfWordsViewed, setNumberOfWordsViewed] = useState(0);

  const timeAnimationTimeout = useRef<NodeJS.Timeout | null>(null);
  const penaltyTimeout = useRef<NodeJS.Timeout | null>(null);

  const timeIsOver = timeLeft <= 0;

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (!("vibrate" in navigator)) return;

    if (timeLeft <= 5 && timeLeft > 0) {
      navigator.vibrate(100);
    }

    if (timeIsOver) {
      navigator.vibrate([1000]);
    }
  }, [timeLeft, timeIsOver]);

  const updateCurrentWordIndex = useCallback(
    (wordsToGuessLength: number) => {
      if (currentWordIndex <= 0) {
        setCurrentWordIndex(wordsToGuessLength - 1);
      } else {
        setCurrentWordIndex((prevIndex) => prevIndex - 1);
      }
    },
    [currentWordIndex, setCurrentWordIndex],
  );

  useEffect(() => {
    if (numberOfWordsViewed === initialNumberOfWordsToGuess) {
      // No need to change the current word index
      // the player saw all the words
      // we went back to the first word
      changeTeamPlaying();
      return;
    }
    if (timeIsOver) {
      updateCurrentWordIndex(wordsToGuess.length);
      changeTeamPlaying();
      return;
    }
  }, [
    changeTeamPlaying,
    initialNumberOfWordsToGuess,
    numberOfWordsViewed,
    timeIsOver,
    timeLeft,
    updateCurrentWordIndex,
    wordsToGuess.length,
  ]);

  function applyTimePenalty() {
    setTimeLeft((prevTimeLeft) => prevTimeLeft - TIME_PENALTY);

    if (timeAnimationTimeout.current) {
      clearTimeout(timeAnimationTimeout.current);
    }
    if (penaltyTimeout.current) {
      clearTimeout(penaltyTimeout.current);
    }

    setTimeIsAnimated(true);
    setIsTimePenaltyVisible(true);

    timeAnimationTimeout.current = setTimeout(
      () => setTimeIsAnimated(false),
      100,
    );
    penaltyTimeout.current = setTimeout(
      () => setIsTimePenaltyVisible(false),
      700,
    );
  }

  function handleWordGuessed() {
    setNumberOfWordsViewed((prevNumber) => prevNumber + 1);
    addGuessedWordToTeam(wordsToGuess[currentWordIndex], teamPlaying);

    const newWords = [...wordsToGuess];
    newWords.splice(currentWordIndex, 1);
    const newWordsLength = newWords.length;

    setWordsToGuess(newWords);
    updateCurrentWordIndex(newWordsLength);
  }

  function handleWordNotGuessed() {
    setNumberOfWordsViewed((prevNumber) => prevNumber + 1);
    updateCurrentWordIndex(wordsToGuess.length);

    if (isTimePenaltyFeatureEnabled) applyTimePenalty();
  }

  return (
    <div className="flex h-[calc(100%-var(--header-height))] flex-col items-center">
      <div className="relative">
        <h1
          className={`relative z-10 mt-12 font-mono text-8xl font-extrabold text-dark-orange ${
            timeIsAnimated && "animate-ping text-jet"
          }`}
        >
          {timeLeft}
        </h1>
        {isTimePenaltyVisible && (
          <p className="animate-slide-down absolute bottom-0 right-4 z-0 font-mono text-3xl text-jet">
            -{TIME_PENALTY}
          </p>
        )}
      </div>
      <h2 className="mt-6 text-center text-5xl font-bold text-jet md:mt-7">
        {wordsToGuess[currentWordIndex]}
      </h2>
      <div className="mt-auto flex flex-col items-center">
        <button
          className="mt-auto h-36 w-36 rounded-full bg-pigment-green text-8xl text-light-orange active:text-jet"
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
