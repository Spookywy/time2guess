import { useRouter } from "next/navigation";

type ExitGameModalProps = {
  onCancel: () => void;
};

export default function ExitGameModal({ onCancel }: ExitGameModalProps) {
  const router = useRouter();

  return (
    <div className="fixed left-2/4 top-2/4 w-72 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-jet p-5 text-center text-lg text-white">
      <p>Voulez-vous vraiment quitter la partie en cours ?</p>
      <div className="mt-5 flex justify-center text-dark-orange">
        <button onClick={onCancel} className="mr-6">
          Annuler
        </button>
        <button className="font-bold" onClick={() => router.push("/")}>
          Quitter
        </button>
      </div>
    </div>
  );
}
