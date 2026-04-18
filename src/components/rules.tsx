import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type RulesProps = {
  handleOpenSettingsModal: () => void;
};

export default function Rules({ handleOpenSettingsModal }: RulesProps) {
  return (
    <div className="flex flex-col w-full max-w-sm mx-auto flex-1 pt-2">
      <h1 className="text-4xl font-extrabold text-jet mb-6">Règles</h1>

      {/* Intro card */}
      <div className="rounded-3xl bg-jet px-6 py-6 mb-4 shadow-lg">
        <p className="text-base text-light-orange leading-relaxed">
          Le but du jeu est de faire deviner des{" "}
          <span className="text-dark-orange font-bold">
            mots, personnalités ou objets dans un temps limité.
          </span>
        </p>
        <p className="mt-3 text-sm text-paynes-grey leading-relaxed">
          Les règles vous seront expliquées au début de chaque manche.
        </p>
      </div>

      {/* Buttons legend */}
      <div className="flex flex-col gap-3">
        {/* Validate */}
        <div className="flex items-center gap-4 rounded-2xl bg-jet/10 border border-jet/10 px-5 py-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-pigment-green text-3xl text-light-orange shadow">
            <FontAwesomeIcon icon={faCheck} />
          </div>
          <p className="text-sm font-semibold text-jet leading-relaxed">
            Valider un mot deviné par votre équipe
          </p>
        </div>

        {/* Skip */}
        <div className="flex items-center gap-4 rounded-2xl bg-jet/10 border border-jet/10 px-5 py-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-jet text-3xl text-light-orange shadow">
            <FontAwesomeIcon icon={faXmark} />
          </div>
          <p className="text-sm font-semibold text-jet leading-relaxed">
            Passer au mot suivant
            <br />
            <span className="font-normal text-paynes-grey">
              (et perdre 5 s si la pénalité est activée —{" "}
              <button
                className="text-dark-orange font-bold underline underline-offset-2"
                onClick={handleOpenSettingsModal}
              >
                voir les paramètres
              </button>
              )
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
