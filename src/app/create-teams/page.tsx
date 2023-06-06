export default function CreateTeams() {
  return (
    <main className="flex h-full flex-col items-center px-1 pt-5">
      <h1 className="text-center text-6xl font-extrabold text-jet">
        Formez 2 équipes
      </h1>
      <div className="mt-16 flex flex-col items-center text-center text-2xl">
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
          </a>
          .
        </p>
      </div>
    </main>
  );
}
