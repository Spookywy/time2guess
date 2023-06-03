"use client";
import NavigationBar, { Pages } from "@/components/navigationBar";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [currentPage, setCurrentPage] = useState<Pages>("home");

  function changePage(page: Pages) {
    setCurrentPage(page);
  }

  return (
    <main className="pt-5 flex flex-col items-center h-full">
      <h1 className="text-jet text-center text-6xl font-extrabold">
        Time 2 Guess
      </h1>
      <Link
        href="create-teams"
        className="text-light-orange bg-jet rounded-xl p-5 m-5 text-xl flex items-center hover:bg-light-orange hover:text-jet border-4 border-jet font-bold"
      >
        Jouer <FontAwesomeIcon icon={faGamepad} className="text-3xl ml-2" />
      </Link>
      <div className="mt-auto mb-5">
        <NavigationBar currentPage={currentPage} changePage={changePage} />
      </div>
    </main>
  );
}
