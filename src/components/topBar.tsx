"use client";

import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ExitGameModal from "./exitGameModal";

export default function TopBar() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  function handleCancelExitGame() {
    setShowModal(false);
  }

  return (
    <div>
      <button
        onClick={() => setShowModal(true)}
        className="ml-2 flex h-12 items-center text-xl text-jet"
      >
        <FontAwesomeIcon icon={faAngleLeft} className="mr-2 text-3xl" />
        Quitter la partie
      </button>
      {showModal && <ExitGameModal onCancel={handleCancelExitGame} />}
    </div>
  );
}
