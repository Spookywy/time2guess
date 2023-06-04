"use client";
import NavigationBar, { Pages } from "@/components/navigationBar";
import { faGamepad, faStopwatch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [currentPage, setCurrentPage] = useState<Pages>("home");

  function changePage(page: Pages) {
    setCurrentPage(page);
  }

  return (
    <main className="flex h-full flex-col items-center pt-5">
      <h1 className="text-center text-6xl font-extrabold text-jet">
        Time 2 Guess
      </h1>
      <div className="flex flex-grow flex-col items-center justify-center">
        <FontAwesomeIcon
          icon={faStopwatch}
          className="animate-stretch-shake text-9xl text-dark-orange"
        />
        <Link
          href="create-teams"
          className="mt-16 flex items-center rounded-xl border-4 border-jet bg-jet p-5 text-xl font-bold text-light-orange hover:bg-light-orange hover:text-jet"
        >
          Jouer <FontAwesomeIcon icon={faGamepad} className="ml-2 text-3xl" />
        </Link>
      </div>
      <div className="mb-5 mt-auto">
        <NavigationBar currentPage={currentPage} changePage={changePage} />
      </div>
    </main>
  );
}
