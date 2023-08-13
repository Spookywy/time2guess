import Modal from "./modal";

type SettingsModalProps = {
  onClose: () => void;
  nbWords: number;
  roundDuration: number;
  handleNbWordsChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleRoundDurationChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
};

const MINIMUM_NB_WORDS = 20;
const MAXIMUM_NB_WORDS = 50;

const MINIMUM_ROUND_DURATION = 20;
const MAXIMUM_ROUND_DURATION = 120;

export default function SettingsModal({
  onClose,
  nbWords,
  roundDuration,
  handleNbWordsChange,
  handleRoundDurationChange,
}: SettingsModalProps) {
  return (
    <Modal className="w-80">
      <h1 className="mb-4 text-center text-3xl font-bold text-dark-orange">
        Paramètres
      </h1>
      <div className="mb-3">
        <h2 className="text-2xl font-bold">Nombre de mots</h2>
        <input
          className="w-full"
          type="range"
          min={MINIMUM_NB_WORDS}
          max={MAXIMUM_NB_WORDS}
          step={5}
          value={nbWords}
          onChange={handleNbWordsChange}
        />
        <p>{nbWords} mots</p>
      </div>
      <div>
        <h2 className="text-2xl font-bold">Temps par round</h2>
        <input
          className="w-full"
          type="range"
          min={MINIMUM_ROUND_DURATION}
          max={MAXIMUM_ROUND_DURATION}
          step={5}
          value={roundDuration}
          onChange={handleRoundDurationChange}
        />
        <p>{roundDuration} secondes</p>
      </div>
      <div className="mt-5 flex justify-center">
        <button
          onClick={onClose}
          className="rounded bg-dark-orange p-2 font-bold"
        >
          Confirmer
        </button>
      </div>
    </Modal>
  );
}
