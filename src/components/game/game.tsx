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
};

export function Game({ words }: GameProps) {
  const { nbWords, roundDuration, isTimePenaltyFeatureEnabled } =
    useGetSettingsThroughLocalStorage();

  const shuffledWords = shuffleArray(words);
  const randomSelectedWords = shuffledWords.slice(0, nbWords);

  const [randomWords] = useState<string[]>(randomSelectedWords);

  const [roundNumber, setRoundNumber] = useState<RoundNumber>(1);
  const [roundState, setRoundState] = useState<RoundState>(RoundState.rules);
  const [teamPlaying, setTeamPlaying] = useState<1 | 2>(1);

  const [wordsToGuess, setWordsToGuess] = useState<string[]>(randomWords);

  const [
    numberOfWordsToGuessAtTheBeginningOfTheRound,
    setNumberOfWordsToGuessAtTheBeginningOfTheRound,
  ] = useState<number>(wordsToGuess.length);

  const [currentWordIndex, setCurrentWordIndex] = useState(
    wordsToGuess.length - 1
  );

  const [team1Score, setTeam1Score] = useState<TeamResult>({
    round1: 0,
    round2: 0,
    round3: 0,
  });
  const [team2Score, setTeam2Score] = useState<TeamResult>({
    round1: 0,
    round2: 0,
    round3: 0,
  });

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
    setTeamPlaying((prevTeam) => (prevTeam === 1 ? 2 : 1));
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

    setWordsGuessedByTeam1([]);
    setWordsGuessedByTeam2([]);
  }

  useEffect(() => {
    if (wordsToGuess.length === 0) {
      setRoundState(RoundState.results);

      setTeam1Score((prevScore) => {
        const newScore = { ...prevScore };
        newScore[`round${roundNumber}`] = wordsGuessedByTeam1.length;
        return newScore;
      });

      setTeam2Score((prevScore) => {
        const newScore = { ...prevScore };
        newScore[`round${roundNumber}`] = wordsGuessedByTeam2.length;
        return newScore;
      });
    }
  }, [
    roundNumber,
    wordsGuessedByTeam1.length,
    wordsGuessedByTeam2.length,
    wordsToGuess.length,
  ]);

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
            team1Score={team1Score}
            team2Score={team2Score}
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
