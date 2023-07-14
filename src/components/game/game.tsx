"use client";
import { RoundNumber, RoundState } from "@/types/common";
import { useState } from "react";
import RoundBreak from "./roundBreak";
import RoundPlaying from "./roundPlaying";
import RoundResults from "./roundResults";
import RoundRules from "./roundRules";

type GameProps = {
  words: string[];
};

export function Game({ words }: GameProps) {
  const [roundNumber, setRoundNumber] = useState<RoundNumber>(1);
  const [roundState, setRoundState] = useState<RoundState>(RoundState.rules);
  const [teamPlaying, setTeamPlaying] = useState<1 | 2>(1);

  const [wordsToGuess, setWordsToGuess] = useState<string[]>(words);

  const [currentWordIndex, setCurrentWordIndex] = useState(
    wordsToGuess.length - 1
  );

  const [wordsGuessedByTeam1, setWordsGuessedByTeam1] = useState<string[]>([]);
  const [wordsGuessedByTeam2, setWordsGuessedByTeam2] = useState<string[]>([]);

  function getComponentToDisplay() {
    switch (roundState) {
      case RoundState.rules:
        return (
          <RoundRules
            round={roundNumber}
            teamPlaying={teamPlaying}
            setRoundState={setRoundState}
          />
        );
      case RoundState.playing:
        return (
          <RoundPlaying
            wordsToGuess={wordsToGuess}
            currentWordIndex={currentWordIndex}
            setRoundState={setRoundState}
          />
        );
      case RoundState.break:
        return <RoundBreak />;
      case RoundState.results:
        return <RoundResults round={roundNumber} />;
    }
  }

  return getComponentToDisplay();
}
