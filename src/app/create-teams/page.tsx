"use client";
import PrimaryButton from "@/components/buttons/primaryButton";
import SecondaryButton from "@/components/buttons/secondaryButton";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  return (
    <main className="flex h-full flex-col items-center px-1 pt-5">
      <h1 className="text-center text-6xl font-extrabold text-jet">
        Formez 2 équipes
      </h1>
      <div className="mt-16 flex h-full flex-col items-center text-center text-2xl">
        <p className="font-semibold">
          Besoin d&apos;aide pour former les équipes ?
        </p>
        <p className="mt-8">
          Utilisez notre super générateur d&apos;équipe aléatoire{" "}
          <a
            className="whitespace-nowrap font-semibold text-dark-orange"
            href="https://random-plouf.vercel.app/fr?lang=fr"
            target="_blank"
          >
            Random Plouf <FontAwesomeIcon icon={faSquareArrowUpRight} />
          </a>
        </p>
        <div className="mb-5 mt-auto flex flex-col sm:flex-row">
          <div className="mb-5 sm:mb-0 sm:mr-5">
            <SecondaryButton label="Retour" onClick={() => router.push("/")} />
          </div>
          <PrimaryButton
            label="Lancer la partie"
            onClick={() => router.push("/game")}
          />
        </div>
      </div>
    </main>
  );
}
