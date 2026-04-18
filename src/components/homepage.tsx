import { sendEvent } from "@/utils/analytics";
import {
  faCircleDown,
  faGamepad,
  faGear,
  faStopwatch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useState } from "react";
import InstallAppModal from "./modals/installAppModal";
import { ChristmasHat } from "./illustrations/christmasHat";
import { useFlag } from "@/flags/flagContext";

type HomePageProps = {
  handleOpenSettingsModal: () => void;
};

export default function HomePage({ handleOpenSettingsModal }: HomePageProps) {
  const [showTips, setShowTips] = useState(false);
  const [isInstallAppModalOpen, setIsInstallAppModalOpen] = useState(false);

  const { christmasTheme } = useFlag();

  useEffect(() => {
    if (localStorage.getItem("tipsShown") !== "true") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setShowTips(true);
      localStorage.setItem("tipsShown", "true");
    }
  }, []);

  function handleOpenInstallAppModal() {
    sendEvent("install_app_modal_viewed");
    setIsInstallAppModalOpen(true);
  }

  return (
    <div className="flex flex-col items-center w-full max-w-sm mx-auto flex-1">
      {/* Top bar */}
      <div className="flex w-full items-center justify-between pt-2 pb-4">
        <button
          aria-label="Installer l'application"
          className="flex h-11 w-11 items-center justify-center rounded-2xl bg-jet text-light-orange text-xl transition-opacity hover:opacity-80 active:scale-95"
          onClick={handleOpenInstallAppModal}
        >
          <FontAwesomeIcon icon={faCircleDown} />
        </button>

        <div className="relative flex items-start gap-3">
          {showTips && (
            <div className="hidden lg:flex flex-col items-end mr-2">
              <p className="font-georgia rotate-[5deg] text-right text-sm text-paynes-grey leading-relaxed">
                Modifie les mots<br />ou le temps par manche !
              </p>
            </div>
          )}
          <button
            aria-label="Paramètres"
            className="flex h-11 w-11 items-center justify-center rounded-2xl bg-jet text-light-orange text-xl transition-opacity hover:opacity-80 active:scale-95"
            onClick={handleOpenSettingsModal}
          >
            <FontAwesomeIcon icon={faGear} />
          </button>
        </div>
      </div>

      {/* Hero card */}
      <div className="relative w-full rounded-3xl bg-jet px-6 py-10 flex flex-col items-center gap-6 overflow-hidden shadow-lg">
        {/* Decorative circle */}
        <div
          aria-hidden
          className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-dark-orange opacity-20"
        />
        <div
          aria-hidden
          className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-dark-orange opacity-10"
        />

        {/* Title */}
        <h1 className="relative z-10 text-center text-5xl font-extrabold text-light-orange leading-tight text-balance">
          Time 2 Guess
        </h1>

        {/* Animated icon */}
        <div className="relative z-10 flex items-center justify-center">
          <div className="animate-stretch-shake relative">
            <FontAwesomeIcon
              icon={faStopwatch}
              className="text-8xl text-dark-orange drop-shadow-md"
            />
            {christmasTheme && (
              <ChristmasHat className="absolute left-1/2 -translate-x-1/2 -top-10 w-28 h-28 -rotate-12" />
            )}
          </div>
        </div>

        {/* Tagline */}
        <p className="relative z-10 text-center text-base text-paynes-grey leading-relaxed max-w-xs">
          Fais deviner des mots, personnalités et objets à ton équipe avant que le temps ne s&apos;écoule !
        </p>

        {/* CTA */}
        <Link
          href="create-teams"
          className="relative z-10 mt-2 flex w-full items-center justify-center gap-3 rounded-2xl bg-dark-orange px-8 py-4 text-xl font-bold text-light-orange shadow-md transition-transform hover:scale-[1.02] active:scale-95"
        >
          Jouer
          <FontAwesomeIcon icon={faGamepad} className="text-2xl" />
        </Link>
      </div>

      {/* Quick stats / badges */}
      <div className="mt-5 grid grid-cols-2 gap-3 w-full">
        <div className="flex flex-col items-center justify-center gap-1 rounded-2xl bg-jet/10 border border-jet/10 py-5">
          <span className="text-3xl font-extrabold text-jet">∞</span>
          <span className="text-xs font-semibold text-paynes-grey uppercase tracking-wide">Mots</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-1 rounded-2xl bg-jet/10 border border-jet/10 py-5">
          <span className="text-3xl font-extrabold text-jet">2+</span>
          <span className="text-xs font-semibold text-paynes-grey uppercase tracking-wide">Équipes</span>
        </div>
      </div>

      {isInstallAppModalOpen && (
        <InstallAppModal onClose={() => setIsInstallAppModalOpen(false)} />
      )}
    </div>
  );
}
