import {
  faGamepad,
  faGear,
  faStopwatch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type HomePageProps = {
  handleOpenSettingsModal: () => void;
};

export default function HomePage({ handleOpenSettingsModal }: HomePageProps) {
  const [showTips, setShowTips] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("tipsShown") !== "true") {
      setShowTips(true);
      localStorage.setItem("tipsShown", "true");
    }
  }, []);

  return (
    <>
      <h1 className="relative mt-11 text-center text-6xl font-extrabold text-jet">
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
        <FontAwesomeIcon
          icon={faStopwatch}
          className="animate-stretch-shake text-9xl text-dark-orange"
        />
        <Link
          href="create-teams"
          className="mt-16 flex items-center rounded-xl border-4 border-jet bg-jet p-5 text-xl font-bold text-light-orange hover:bg-light-orange hover:text-jet"
        >
          Jouer <FontAwesomeIcon icon={faGamepad} className="ml-2 text-3xl" />
        </Link>
      </div>
    </>
  );
}
