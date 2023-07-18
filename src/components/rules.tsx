import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Rules() {
  return (
    <div className="mx-4 text-center text-2xl text-jet">
      <h1 className="text-center text-6xl font-extrabold">Règles</h1>
      <p className="mt-16">
        Le but du jeu est de faire deviner des{" "}
        <b className="text-dark-orange">
          mots, personnalités ou objets dans un temps limité.
        </b>
      </p>
      <p className="mb-10 mt-5">
        Les règles vous seront expliquées au début de chaque manche.
      </p>
      <button
        className="mt-auto h-20 w-20 rounded-full bg-dark-orange text-5xl text-light-orange"
        disabled
      >
        <FontAwesomeIcon icon={faCheck} />
      </button>
      <p className="my-5 font-extrabold text-dark-orange">
        Valider un mot deviné par votre équipe
      </p>
      <button
        className="mt-5 h-20 w-20 rounded-full bg-jet text-5xl text-light-orange"
        disabled
      >
        <FontAwesomeIcon icon={faXmark} />
      </button>
      <p className="mt-5 font-extrabold">
        Passer au mot suivant et perdre 5 secondes
      </p>
    </div>
  );
}
