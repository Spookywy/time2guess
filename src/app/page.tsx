import Link from "next/link";

export default function Home() {
  return (
    <main className="pt-5 flex flex-col items-center">
      <h1 className="text-jet text-center text-6xl font-extrabold">
        Time 2 Guess
      </h1>
      <Link
        href="create-teams"
        className="text-light-orange bg-jet rounded-xl p-5 mt-5 text-xl"
      >
        Jouer
      </Link>
    </main>
  );
}
