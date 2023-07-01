"use client";
import { RoundNumber, RoundState } from "@/types/common";
import { useState } from "react";
import RoundPlaying from "./roundPlaying";
import RoundResults from "./roundResults";
import RoundRules from "./roundRules";

type GameProps = {
  words: string[];
};

export function Game({ words }: GameProps) {
  const [roundNumber, setRoundNumber] = useState<RoundNumber>(1);
  const [roundState, setRoundState] = useState<RoundState>(RoundState.rules);

  function getComponentToDisplay() {
    switch (roundState) {
      case RoundState.rules:
        return <RoundRules round={roundNumber} />;
      case RoundState.playing:
        return <RoundPlaying />;
      case RoundState.results:
        return <RoundResults round={roundNumber} />;
    }
  }

  return getComponentToDisplay();
}
