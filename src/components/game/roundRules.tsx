import { RoundNumber } from "@/types/common";
import { faPeopleGroup, faPerson } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PrimaryButton from "../buttons/primaryButton";

type RoundRulesProps = {
  round: RoundNumber;
};

export default function RoundRules({ round }: RoundRulesProps) {
  const subTitles = new Map<number, string>([
    [1, "Decrivez avec des mots"],
    [2, "Decrivez avec un seul mot"],
    [3, "Mimez"],
  ]);

  const playerRules = new Map<number, string>([
    [
      1,
      "Vous disposez de <b>30 secondes</b> pour faire deviner le plus de mots possibles à votre équipe en utilisant <b>autant de mots que vous le souhaitez.</b>",
    ],
    [
      2,
      "Vous disposez de <b>30 secondes</b> pour faire deviner le plus de mots possibles à votre équipe en utilisant <b>un seul mot.</b>",
    ],
    [
      3,
      "Vous disposez de <b>30 secondes</b> pour faire deviner le plus de mots possibles à votre équipe en <b>mimant.</b>",
    ],
  ]);

  const teamRules = new Map<number, string>([
    [1, "Votre équipe n'est <b>pas limitée</b> en nombre de propositions."],
    [2, "Votre équipe ne peut faire qu'<b>une seule proposition.</b>"],
    [3, "Votre équipe n'est <b>pas limitée</b> en nombre de propositions."],
  ]);

  return (
    <div className="text-md m-4 flex h-[calc(100%-var(--header-height))] flex-col text-center text-jet md:mx-48 md:text-2xl">
      <h1 className="text-6xl font-extrabold text-dark-orange">
        Manche {round}
      </h1>
      <h2 className="mb-8 mt-6 text-2xl font-extrabold md:text-4xl">
        {subTitles.get(round)}
      </h2>
      <FontAwesomeIcon
        icon={faPerson}
        className="mb-2 text-4xl text-dark-orange md:text-6xl"
      />
      <div
        className="mb-4 md:mb-8"
        dangerouslySetInnerHTML={{ __html: playerRules.get(round)! }}
      />
      <FontAwesomeIcon
        icon={faPeopleGroup}
        className="mb-2 text-4xl text-dark-orange md:text-6xl"
      />
      <div dangerouslySetInnerHTML={{ __html: teamRules.get(round)! }} />
      <div className="mt-auto py-4 text-2xl md:py-8">
        <p className="mb-2 text-jet">
          <span className="font-bold text-dark-orange">L&apos;équipe 1</span>{" "}
          commence
        </p>
        <PrimaryButton label="Commencer" onClick={() => {}} />
      </div>
    </div>
  );
}
