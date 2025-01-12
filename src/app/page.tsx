"use client";
import About from "@/components/about";
import HomePage from "@/components/homepage";
import SettingsModal from "@/components/modals/settingsModal";
import NavigationBar, { Pages } from "@/components/navigationBar/navigationBar";
import Rules from "@/components/rules";
import { useState } from "react";

export default function Home() {
  const [currentPage, setCurrentPage] = useState<Pages>("home");
  const [showSettingsModal, setShowSettingsModal] = useState(false);

  function changePage(page: Pages) {
    setCurrentPage(page);
  }

  function handleCloseSettingsModal() {
    setShowSettingsModal(false);
  }

  function handleSettingsButtonClick() {
    setShowSettingsModal(true);
  }

  return (
    <main className="flex h-full flex-col items-center pt-5">
      {currentPage === "home" ? (
        <HomePage handleSettingsButtonClick={handleSettingsButtonClick} />
      ) : currentPage === "rules" ? (
        <Rules handleSettingsButtonClick={handleSettingsButtonClick} />
      ) : (
        <About />
      )}
      <div className="mb-5 mt-auto">
        <div className="mt-5">
          <NavigationBar currentPage={currentPage} changePage={changePage} />
        </div>
      </div>
      {showSettingsModal && (
        <SettingsModal onClose={handleCloseSettingsModal} />
      )}
    </main>
  );
}
