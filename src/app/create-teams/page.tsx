"use client";
import PrimaryButton from "@/components/buttons/primaryButton";
import SecondaryButton from "@/components/buttons/secondaryButton";
import {
  MAXIMUM_NUMBER_OF_TEAMS,
  MINIMUM_NUMBER_OF_TEAMS,
} from "@/utils/constants";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { sendEvent } from "@/utils/analytics";
import { useGetSettingsThroughLocalStorage } from "@/utils/utils";

export default function Page() {
  const { replace, push } = useRouter();
  const [numberOfTeams, setNumberOfTeams] = useState(2);
  const { nbWords, roundDuration, isTimePenaltyFeatureEnabled } =
    useGetSettingsThroughLocalStorage();

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

  function startGame() {
    sendEvent("game_started", {
      number_of_teams: numberOfTeams.toString(),
      number_of_words: nbWords.toString(),
      round_duration: roundDuration.toString(),
      is_time_penalty_feature_enabled: isTimePenaltyFeatureEnabled.toString(),
    });
    push(`/game?numberOfTeams=${numberOfTeams}`);
  }

  return (
    <main className="flex h-full flex-col items-center px-1 pt-5">
      <h1 className="text-center text-6xl font-extrabold text-jet">
        Formez les équipes
      </h1>
      <div className="mt-16 flex items-center gap-4">
        <button
          className="rounded-full bg-jet w-12 h-12 text-3xl text-light-orange hover:bg-dark-orange pb-1"
          onClick={handleMinusClick}
        >
          -
        </button>
        <span className="text-3xl font-bold tabular-nums text-center">
          {numberOfTeams} équipes
        </span>
        <button
          className="rounded-full bg-jet w-12 h-12 text-3xl text-light-orange hover:bg-dark-orange pb-1"
          onClick={handlePlusClick}
        >
          +
        </button>
      </div>
      <div className="mt-8 flex h-full flex-col items-center text-center text-xl">
        <p className="font-semibold">
          Besoin d&apos;aide pour former les équipes ?
        </p>
        <p className="mt-8">
          Utilisez notre super générateur d&apos;équipe aléatoire{" "}
          <a
            className="whitespace-nowrap font-semibold text-dark-orange"
            href="https://random-plouf.vercel.app/fr?lang=fr"
            target="_blank"
          >
            Random Plouf <FontAwesomeIcon icon={faSquareArrowUpRight} />
          </a>
        </p>
        <div className="mb-5 mt-auto flex flex-col sm:flex-row">
          <div className="mb-5 sm:mb-0 sm:mr-5">
            <SecondaryButton label="Retour" onClick={() => push("/")} />
          </div>
          <PrimaryButton label="Lancer la partie" onClick={startGame} />
        </div>
      </div>
    </main>
  );
}
