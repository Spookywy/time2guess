"use client";
import About from "@/components/about";
import HomePage from "@/components/homepage";
import NavigationBar, { Pages } from "@/components/navigationBar/navigationBar";
import Rules from "@/components/rules";
import { useState } from "react";

export default function Home() {
  const [currentPage, setCurrentPage] = useState<Pages>("home");

  function changePage(page: Pages) {
    setCurrentPage(page);
  }

  return (
    <main className="flex h-full flex-col items-center pt-5">
      {currentPage === "home" ? (
        <HomePage />
      ) : currentPage === "rules" ? (
        <Rules />
      ) : (
        <About />
      )}
      <div className="mb-5 mt-auto">
        <div className="mt-5">
          <NavigationBar currentPage={currentPage} changePage={changePage} />
        </div>
      </div>
    </main>
  );
}
