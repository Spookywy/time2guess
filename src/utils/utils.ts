import {
  DEFAULT_NUMBER_OF_WORDS_TO_PICK,
  DEFAULT_ROUND_DURATION,
} from "./constants";

// Fisher–Yates shuffle
export function shuffleArray(array: string[]) {
  const shuffledArray = [...array];

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
}

export function useGetSettingsThroughLocalStorage() {
  if (typeof window === "undefined") {
    return {
      nbWords: DEFAULT_NUMBER_OF_WORDS_TO_PICK,
      roundDuration: DEFAULT_ROUND_DURATION,
    };
  }
  const nbWordsStored = localStorage.getItem("nbWords");
  const nbWords = nbWordsStored
    ? parseInt(nbWordsStored)
    : DEFAULT_NUMBER_OF_WORDS_TO_PICK;

  const roundDurationStored = localStorage.getItem("roundDuration");
  const roundDuration = roundDurationStored
    ? parseInt(roundDurationStored)
    : DEFAULT_ROUND_DURATION;

  return {
    nbWords,
    roundDuration,
  };
}
