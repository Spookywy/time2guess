"use client";
import About from "@/components/about";
import HomePage from "@/components/homepage";
import SettingsModal from "@/components/modals/settingsModal";
import NavigationBar, { Pages } from "@/components/navigationBar/navigationBar";
import Rules from "@/components/rules";
import { useEffect, useState } from "react";
import { sendEvent } from "@/utils/analytics";

export default function Home() {
  const [currentPage, setCurrentPage] = useState<Pages>("home");
  const [showSettingsModal, setShowSettingsModal] = useState(false);

  function changePage(page: Pages) {
    setCurrentPage(page);
    sendEvent("page_changed", {
      page,
    });
  }

  function handleCloseSettingsModal() {
    setShowSettingsModal(false);
  }

  function handleOpenSettingsModal(page: Pages) {
    setShowSettingsModal(true);
    sendEvent("settings_modal_viewed", {
      page,
    });
  }

  useEffect(() => {
    sessionStorage.setItem("homepageVisited", "true");
  }, []);

  return (
    <main className="flex h-full flex-col items-center pt-5">
      {currentPage === "home" ? (
        <HomePage
          handleOpenSettingsModal={() => handleOpenSettingsModal("home")}
        />
      ) : currentPage === "rules" ? (
        <Rules
          handleOpenSettingsModal={() => handleOpenSettingsModal("rules")}
        />
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
