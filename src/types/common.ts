export enum RoundState {
  "rules",
  "playing",
  "break",
  "results",
}

export type RoundNumber = 1 | 2 | 3;

export interface TeamResult {
  round1: number;
  round2: number;
  round3: number;
}
