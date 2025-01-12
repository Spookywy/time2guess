import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type RulesProps = {
  handleOpenSettingsModal: () => void;
};

export default function Rules({ handleOpenSettingsModal }: RulesProps) {
  return (
    <div className="text-md mx-4 text-center  text-jet md:text-2xl">
      <h1 className="text-center text-5xl font-extrabold">Règles</h1>
      <p className="mt-8 md:mt-16">
        Le but du jeu est de faire deviner des{" "}
        <b className="text-dark-orange">
          mots, personnalités ou objets dans un temps limité.
        </b>
      </p>
      <p className="mb-10 mt-5">
        Les règles vous seront expliquées au début de chaque manche.
      </p>
      <button
        className="mt-auto h-14 w-14 rounded-full bg-pigment-green text-3xl text-light-orange"
        disabled
      >
        <FontAwesomeIcon icon={faCheck} />
      </button>
      <p className="mt-3 font-semibold text-pigment-green">
        Valider un mot deviné par votre équipe
      </p>
      <button
        className="mt-7 h-14 w-14 rounded-full bg-jet text-3xl text-light-orange"
        disabled
      >
        <FontAwesomeIcon icon={faXmark} />
      </button>
      <p className="mt-3 font-semibold">
        Passer au mot suivant
        <br />
        (et perdre 5 secondes si la pénalité est activée,{" "}
        <span
          className="text-dark-orange cursor-pointer font-extrabold"
          onClick={handleOpenSettingsModal}
        >
          voir les paramètres
        </span>
        )
      </p>
    </div>
  );
}
