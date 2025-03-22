"use client";
import { RoundNumber, RoundState, TeamResult } from "@/types/common";
import { shuffleArray, useGetSettingsThroughLocalStorage } from "@/utils/utils";
import { useEffect, useState } from "react";
import ExitGameModal from "../modals/exitGameModal";
import RoundBreak from "./roundBreak";
import RoundPlaying from "./roundPlaying";
import RoundResults from "./roundResults";
import RoundRules from "./roundRules";

type GameProps = {
  words: string[];
  numberOfTeams: number;
};

export type TeamNumber = 1 | 2 | 3 | 4;

export function Game({ words, numberOfTeams }: GameProps) {
  const { nbWords, roundDuration, isTimePenaltyFeatureEnabled } =
    useGetSettingsThroughLocalStorage();

  const shuffledWords = shuffleArray(words);
  const randomSelectedWords = shuffledWords.slice(0, nbWords);

  const [randomWords] = useState<string[]>(randomSelectedWords);

  const [roundNumber, setRoundNumber] = useState<RoundNumber>(1);
  const [roundState, setRoundState] = useState<RoundState>(RoundState.rules);
  const [teamPlaying, setTeamPlaying] = useState<TeamNumber>(1);

  const [wordsToGuess, setWordsToGuess] = useState<string[]>(randomWords);

  const [
    numberOfWordsToGuessAtTheBeginningOfTheRound,
    setNumberOfWordsToGuessAtTheBeginningOfTheRound,
  ] = useState<number>(wordsToGuess.length);

  const [currentWordIndex, setCurrentWordIndex] = useState(
    wordsToGuess.length - 1
  );

  const [teamScores, setTeamScores] = useState<TeamResult[]>(
    Array(numberOfTeams).fill({ round1: 0, round2: 0, round3: 0 })
  );

  const [wordsGuessedByTeams, setWordsGuessedByTeams] = useState<string[][]>(
    Array(numberOfTeams).fill([])
  );

  function addGuessedWordToTeam(word: string, team: number) {
    setWordsGuessedByTeams((prevWords) => {
      const newWords = [...prevWords];
      newWords[team - 1] = [...newWords[team - 1], word];
      return newWords;
    });
  }

  function changeTeamPlaying() {
    setTeamPlaying(
      (prevTeam) =>
        (prevTeam === numberOfTeams ? 1 : prevTeam + 1) as TeamNumber
    );
    setRoundState(RoundState.break);
  }

  function changeRound() {
    setRoundNumber((prevRound) => {
      const nextRound = prevRound + 1;
      if (nextRound === 1 || nextRound === 2 || nextRound === 3) {
        return nextRound;
      }
      throw new Error("Round number can only be 1, 2 or 3");
    });

    setRoundState(RoundState.rules);

    setWordsToGuess((_) => {
      // We shuffle words at the beginning of each round
      const newRandomWords = shuffleArray(randomWords);
      setCurrentWordIndex(newRandomWords.length - 1);
      setNumberOfWordsToGuessAtTheBeginningOfTheRound(newRandomWords.length);
      return newRandomWords;
    });

    setWordsGuessedByTeams(Array(numberOfTeams).fill([]));
  }

  useEffect(() => {
    if (wordsToGuess.length === 0) {
      setRoundState(RoundState.results);

      setTeamScores((prevScores) =>
        prevScores.map((score, index) => ({
          ...score,
          [`round${roundNumber}`]: wordsGuessedByTeams[index].length,
        }))
      );
    }
  }, [roundNumber, wordsGuessedByTeams, wordsToGuess.length]);

  const [showExitModal, setShowExitModal] = useState(false);

  function handleCancelExitGame() {
    setShowExitModal(false);
  }

  // Prevent the user from leaving the game by clicking on the back button
  useEffect(() => {
    window.history.pushState(null, "", window.location.href);

    window.onpopstate = function () {
      setShowExitModal(true);
      window.history.pushState(null, "", window.location.href);
    };
  }, []);

  useEffect(() => {
    // Warn the user when he tries to refresh the page
    window.onbeforeunload = (event) => {
      // The two following lines do the same thing
      // needed to support all browsers
      event.preventDefault();
      return (event.returnValue = "");
    };

    return () => {
      window.onbeforeunload = null;
    };
  }, []);

  function getComponentToDisplay() {
    switch (roundState) {
      case RoundState.rules:
        return (
          <RoundRules
            round={roundNumber}
            teamPlaying={teamPlaying}
            setRoundState={setRoundState}
            roundDuration={roundDuration}
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
            roundDuration={roundDuration}
            isTimePenaltyFeatureEnabled={isTimePenaltyFeatureEnabled}
          />
        );
      case RoundState.break:
        return (
          <RoundBreak
            round={roundNumber}
            teamPlaying={teamPlaying}
            wordsToGuess={wordsToGuess}
            setRoundState={setRoundState}
            setNumberOfWordsToGuessAtTheBeginningOfTheRound={
              setNumberOfWordsToGuessAtTheBeginningOfTheRound
            }
            numberOfWordsToGuessAtTheBeginningOfTheRound={
              numberOfWordsToGuessAtTheBeginningOfTheRound
            }
          />
        );
      case RoundState.results:
        return (
          <RoundResults
            round={roundNumber}
            teamScores={teamScores}
            changeRound={changeRound}
          />
        );
    }
  }

  return (
    <>
      {getComponentToDisplay()}
      {showExitModal && <ExitGameModal onCancel={handleCancelExitGame} />}
    </>
  );
}
