import { time2guessVercelDomain } from "@/utils/constants";
import Modal from "./modal";

type DomainMigrationModalProps = {
  onClose: () => void;
};

export function DomainMigrationModal({ onClose }: DomainMigrationModalProps) {
  return (
    <Modal>
      <div className="flex flex-col gap-3 justify-center text-center m-2">
        <p>
          <span className="text-dark-orange font-extrabold">Time2Guess</span>{" "}
          est gratuit et le restera toujours.
        </p>
        <p>
          Pour des raisons de coût, votre jeu préféré change d’adresse :{" "}
          <a
            href={time2guessVercelDomain}
            className="font-semibold text-dark-orange"
          >
            time2guess.vercel.app
          </a>
        </p>
        <button
          onClick={onClose}
          className="rounded bg-dark-orange px-6 py-2 font-semibold mt-5 self-center"
        >
          Fermer
        </button>
      </div>
    </Modal>
  );
}
