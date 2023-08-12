import { useRouter } from "next/navigation";
import Modal from "./modal";

type ExitGameModalProps = {
  onCancel: () => void;
};

export default function ExitGameModal({ onCancel }: ExitGameModalProps) {
  const router = useRouter();

  return (
    <Modal className="w-72">
      <p>Voulez-vous vraiment quitter la partie en cours ?</p>
      <div className="mt-5 flex justify-center text-dark-orange">
        <button onClick={onCancel} className="mr-6">
          Annuler
        </button>
        <button className="font-bold" onClick={() => router.push("/")}>
          Quitter
        </button>
      </div>
    </Modal>
  );
}
