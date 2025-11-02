"use client";
import { createGame } from "@/actions/game";
import PrimaryButton from "@/components/buttons/primaryButton";
import SecondaryButton from "@/components/buttons/secondaryButton";
import SettingsModal from "@/components/modals/settingsModal";
import { sendEvent } from "@/utils/analytics";
import {
  MAXIMUM_NUMBER_OF_TEAMS,
  MINIMUM_NUMBER_OF_TEAMS,
} from "@/utils/constants";
import { useGetSettingsThroughLocalStorage } from "@/utils/utils";
import {
  faGear,
  faSquareArrowUpRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Sentry from "@sentry/nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const { replace, push } = useRouter();
  const [numberOfTeams, setNumberOfTeams] = useState(2);
  const { nbWords, roundDuration, isTimePenaltyFeatureEnabled } =
    useGetSettingsThroughLocalStorage();
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [isStartingGame, setIsStartingGame] = useState(false);

  useEffect(() => {
    const hasVisitedHomepage = sessionStorage.getItem("homepageVisited");
    if (!hasVisitedHomepage) {
      replace("/");
    }
  }, [replace]);

  function handleMinusClick() {
    setNumberOfTeams((prev) => Math.max(MINIMUM_NUMBER_OF_TEAMS, prev - 1));
  }

  function handlePlusClick() {
    setNumberOfTeams((prev) => Math.min(MAXIMUM_NUMBER_OF_TEAMS, prev + 1));
  }

  async function startGame() {
    setIsStartingGame(true);
    try {
      await createGame();
    } catch (error) {
      Sentry.captureException(error);
    }
    sendEvent("game_started", {
      number_of_teams: numberOfTeams.toString(),
      number_of_words: nbWords.toString(),
      round_duration: roundDuration.toString(),
      is_time_penalty_feature_enabled: isTimePenaltyFeatureEnabled.toString(),
    });
    push(`/game?numberOfTeams=${numberOfTeams}`);
  }

  function handleOpenSettingsModal() {
    setShowSettingsModal(true);
    sendEvent("settings_modal_viewed", {
      page: "createTeams",
    });
  }

  function handleCloseSettingsModal() {
    setShowSettingsModal(false);
  }

  return (
    <main className="flex h-full flex-col items-center p-5">
      <h1 className="text-center text-6xl font-extrabold text-jet">Prêt ?</h1>
      <div className="mt-16 flex items-center gap-4">
        <button
          className="rounded-full bg-jet w-12 h-12 text-3xl text-light-orange hover:bg-dark-orange pb-1 disabled:opacity-50"
          onClick={handleMinusClick}
          disabled={numberOfTeams === MINIMUM_NUMBER_OF_TEAMS}
        >
          -
        </button>
        <span className="text-3xl font-bold tabular-nums text-center">
          {numberOfTeams} équipes
        </span>
        <button
          className="rounded-full bg-jet w-12 h-12 text-3xl text-light-orange hover:bg-dark-orange pb-1 disabled:opacity-50"
          onClick={handlePlusClick}
          disabled={numberOfTeams === MAXIMUM_NUMBER_OF_TEAMS}
        >
          +
        </button>
      </div>
      <div className="mt-8 flex h-full flex-col items-center text-center text-xl">
        <p>
          Utilisez notre super générateur d&apos;équipe aléatoire{" "}
          <a
            className="whitespace-nowrap font-semibold text-dark-orange"
            href="https://random-plouf.vercel.app/fr?lang=fr"
            target="_blank"
          >
            Random Plouf <FontAwesomeIcon icon={faSquareArrowUpRight} />
          </a>
        </p>
        <p className="font-semibold mt-8">
          Envie de personnaliser votre expérience ?
        </p>
        <div className="flex gap-2 mt-3">
          <p>Ouvrir les</p>
          <button
            className="text-dark-orange font-extrabold flex items-center gap-2"
            onClick={handleOpenSettingsModal}
          >
            <span>Paramètres</span>
            <FontAwesomeIcon icon={faGear} />
          </button>
        </div>
        <div className="mt-auto flex flex-col sm:flex-row">
          <div className="mb-5 sm:mb-0 sm:mr-5">
            <SecondaryButton label="Retour" onClick={() => push("/")} />
          </div>
          <PrimaryButton
            label="Lancer la partie"
            onClick={startGame}
            isLoading={isStartingGame}
          />
        </div>
      </div>
      {showSettingsModal && (
        <SettingsModal onClose={handleCloseSettingsModal} />
      )}
    </main>
  );
}
