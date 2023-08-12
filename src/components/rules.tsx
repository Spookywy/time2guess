import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Rules() {
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
        className="mt-auto h-14 w-14 rounded-full bg-dark-orange text-3xl text-light-orange"
        disabled
      >
        <FontAwesomeIcon icon={faCheck} />
      </button>
      <p className="mt-3 font-extrabold text-dark-orange">
        Valider un mot deviné par votre équipe
      </p>
      <button
        className="mt-7 h-14 w-14 rounded-full bg-jet text-3xl text-light-orange"
        disabled
      >
        <FontAwesomeIcon icon={faXmark} />
      </button>
      <p className="mt-3 font-extrabold">
        Passer au mot suivant et perdre 5 secondes
      </p>
    </div>
  );
}
