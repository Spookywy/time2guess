import { RoundNumber } from "@/types/common";
import { faPeopleGroup, faPerson } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    <div className="m-4 text-center text-2xl text-jet">
      <h1 className="text-6xl font-extrabold text-dark-orange">
        Manche {round}
      </h1>
      <h2 className="mb-8 mt-16 text-4xl font-extrabold">
        {subTitles.get(round)}
      </h2>
      <FontAwesomeIcon
        icon={faPerson}
        className="mb-2 text-6xl text-dark-orange"
      />
      <div
        className="mb-8"
        dangerouslySetInnerHTML={{ __html: playerRules.get(round)! }}
      />
      <FontAwesomeIcon
        icon={faPeopleGroup}
        className="mb-2 text-6xl text-dark-orange"
      />
      <div dangerouslySetInnerHTML={{ __html: teamRules.get(round)! }} />
    </div>
  );
}
