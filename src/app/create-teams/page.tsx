"use client";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

export default function CreateTeams() {
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
        <p className="mt-2">
          Utilisez notre générateur d&apos;équipe aléatoire{" "}
          <a
            className="font-semibold text-dark-orange"
            href="https://random-plouf.vercel.app/fr?lang=fr"
            target="_blank"
          >
            RandomPlouf 
            <FontAwesomeIcon icon={faSquareArrowUpRight} />
          </a>
          .
        </p>
        <div className="mb-5 mt-auto flex flex-col sm:flex-row">
          <button
            className="mb-5 h-20 w-64 rounded-full border-4 border-dark-orange bg-jet font-semibold text-light-orange hover:border-jet sm:mb-0 sm:mr-5"
            onClick={() => router.push("/")}
          >
            Retour
          </button>
          <button
            className="h-20 w-64 rounded-full border-4 border-dark-orange bg-dark-orange font-semibold text-light-orange hover:border-jet hover:text-jet"
            onClick={() => router.push("/game")}
          >
            Lancer la partie
          </button>
        </div>
      </div>
    </main>
  );
}
