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

  function addGuessedWordToTeam(word: string, team: 1 | 2) {
    if (team === 1) {
      setWordsGuessedByTeam1((prevWords) => [...prevWords, word]);
    } else {
      setWordsGuessedByTeam2((prevWords) => [...prevWords, word]);
    }
  }

  function changeTeamPlaying() {
    setRoundState(RoundState.break);
    setTeamPlaying((prevTeam) => (prevTeam === 1 ? 2 : 1));
  }

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
            setWordsToGuess={setWordsToGuess}
            currentWordIndex={currentWordIndex}
            setCurrentWordIndex={setCurrentWordIndex}
            changeTeamPlaying={changeTeamPlaying}
            addGuessedWordToTeam={addGuessedWordToTeam}
            teamPlaying={teamPlaying}
          />
        );
      case RoundState.break:
        return (
          <RoundBreak
            round={roundNumber}
            teamPlaying={teamPlaying}
            wordsToGuess={wordsToGuess}
          />
        );
      case RoundState.results:
        return <RoundResults round={roundNumber} />;
    }
  }

  return getComponentToDisplay();
}
