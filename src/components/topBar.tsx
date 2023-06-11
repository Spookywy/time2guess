"use client";

import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

export default function TopBar() {
  const router = useRouter();

  return (
    <div>
      <button onClick={() => router.push("/")}>
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>
    </div>
  );
}
