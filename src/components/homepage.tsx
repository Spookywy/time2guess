import { sendEvent } from "@/utils/analytics";
import {
  faCircleDown,
  faGamepad,
  faGear,
  faStopwatch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
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
    <>
      <button
        className="text-4xl text-jet md:text-5xl absolute left-5"
        onClick={handleOpenInstallAppModal}
      >
        <FontAwesomeIcon icon={faCircleDown} />
      </button>
      <h1 className="relative mt-16 text-center text-6xl font-extrabold text-jet">
        Time 2 Guess
      </h1>
      <div className="absolute right-5 flex content-start items-start">
        {showTips && (
          <div className="invisible flex flex-col items-end lg:visible">
            <Image
              src="/dark-orange-arrow.png"
              alt="an arrow"
              width="180"
              height="180"
              className="rotate-[-20deg]"
            />
            <p className="font-georgia rotate-[20deg] text-center text-xl text-paynes-grey">
              Tu veux changer le nombre de
              <br />
              mots ou le temps par manche ?
              <br />
              <br />
              Pas de problème, c&apos;est toi le chef !
            </p>
          </div>
        )}
        <button
          className="text-4xl text-jet md:text-5xl"
          onClick={handleOpenSettingsModal}
        >
          <FontAwesomeIcon icon={faGear} />
        </button>
      </div>
      <div className="flex flex-grow flex-col items-center justify-center">
        <div className="animate-stretch-shake">
          <FontAwesomeIcon
            icon={faStopwatch}
            className="text-9xl text-dark-orange relative"
          />
          {christmasTheme && (
            <ChristmasHat className="absolute left-1/2 -translate-x-1/2 -top-10 w-32 h-32 -rotate-12" />
          )}
        </div>
        <Link
          href="create-teams"
          className="mt-16 flex items-center rounded-xl border-4 border-jet bg-jet p-5 text-xl font-bold text-light-orange hover:bg-light-orange hover:text-jet"
        >
          Jouer <FontAwesomeIcon icon={faGamepad} className="ml-2 text-3xl" />
        </Link>
      </div>
      {isInstallAppModalOpen && (
        <InstallAppModal onClose={() => setIsInstallAppModalOpen(false)} />
      )}
    </>
  );
}
