import { isPWA } from "@/utils/pwa";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowUpFromBracket,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "./modal";

type InstallAppModalProps = {
  onClose: () => void;
};

export default function InstallAppModal({ onClose }: InstallAppModalProps) {
  return (
    <Modal className="w-72 text-center">
      {isPWA() ? (
        <p>Application déjà installée</p>
      ) : (
        <>
          <h1 className="mb-6 text-center text-3xl font-bold text-dark-orange">
            Installer l’app
          </h1>
          <p>
            Appuyer sur{" "}
            <FontAwesomeIcon
              color="var(--color-dark-orange)"
              icon={faArrowUpFromBracket}
            />{" "}
            ou{" "}
            <FontAwesomeIcon
              color="var(--color-dark-orange)"
              icon={faEllipsisVertical}
            />
          </p>
          <p>
            puis sur{" "}
            <FontAwesomeIcon
              color="var(--color-dark-orange)"
              icon={faSquarePlus}
            />
            <span className="ml-1 text-dark-orange font-bold">
              écran d’accueil
            </span>
          </p>
        </>
      )}
      <button
        onClick={onClose}
        className="rounded bg-dark-orange px-6 py-2 font-bold mt-5"
      >
        Fermer
      </button>
    </Modal>
  );
}
