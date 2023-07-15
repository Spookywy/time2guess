type RoundBreakProps = {
  round: number;
  teamPlaying: 1 | 2;
  wordsToGuess: string[];
};

export default function RoundBreak({
  round,
  teamPlaying,
  wordsToGuess,
}: RoundBreakProps) {
  return (
    <div className="m-4 flex flex-col items-center text-2xl text-jet">
      <h1 className="text-6xl font-extrabold text-dark-orange">
        Manche {round}
      </h1>
      <h2 className="mt-5 font-bold">{wordsToGuess.length} mots restant</h2>
      <p className="mt-5">
        Au tour de{" "}
        <span className="font-bold text-dark-orange">
          l&apos;équipe {teamPlaying}
        </span>
      </p>
    </div>
  );
}
