import {
  DEFAULT_NUMBER_OF_WORDS_TO_PICK,
  DEFAULT_ROUND_DURATION,
} from "@/utils/constants";
import {
  faGamepad,
  faGear,
  faStopwatch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";
import SettingsModal from "./modals/settingsModal";

export default function HomePage() {
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [nbWords, setNbWords] = useState(DEFAULT_NUMBER_OF_WORDS_TO_PICK);
  const [roundDuration, setRoundDuration] = useState(DEFAULT_ROUND_DURATION);

  function handleNbWordsChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNbWords(parseInt(event.target.value));
  }

  function handleRoundDurationChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setRoundDuration(parseInt(event.target.value));
  }

  function handleCloseSettingsModal() {
    setShowSettingsModal(false);
  }

  function handleSettingsButtonClick() {
    setShowSettingsModal(true);
  }

  return (
    <>
      <h1 className="relative mt-11 text-center text-6xl font-extrabold text-jet">
        Time 2 Guess
      </h1>
      <button
        className="absolute right-5 text-4xl text-jet md:text-5xl"
        onClick={handleSettingsButtonClick}
      >
        <FontAwesomeIcon icon={faGear} />
      </button>
      <div className="flex flex-grow flex-col items-center justify-center">
        <FontAwesomeIcon
          icon={faStopwatch}
          className="animate-stretch-shake text-9xl text-dark-orange"
        />
        <Link
          href={`create-teams?nbWords=${nbWords}&roundDuration=${roundDuration}`}
          className="mt-16 flex items-center rounded-xl border-4 border-jet bg-jet p-5 text-xl font-bold text-light-orange hover:bg-light-orange hover:text-jet"
        >
          Jouer <FontAwesomeIcon icon={faGamepad} className="ml-2 text-3xl" />
        </Link>
      </div>
      {showSettingsModal && (
        <SettingsModal
          onClose={handleCloseSettingsModal}
          nbWords={nbWords}
          roundDuration={roundDuration}
          handleNbWordsChange={handleNbWordsChange}
          handleRoundDurationChange={handleRoundDurationChange}
        />
      )}
    </>
  );
}
