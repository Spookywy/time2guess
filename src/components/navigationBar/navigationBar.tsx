import {
  faBook,
  faCircleInfo,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import NavigationBarButton from "./navigationBarButton";

export type Pages = "home" | "rules" | "about";

type NavigationBarProps = {
  currentPage: Pages;
  changePage: (page: Pages) => void;
};

export default function NavigationBar({
  currentPage,
  changePage,
}: NavigationBarProps) {
  return (
    <nav
      aria-label="Navigation principale"
      className="flex w-full items-center rounded-2xl bg-jet p-1.5 gap-1.5 shadow-lg"
    >
      <NavigationBarButton
        icon={faBook}
        label="Règles"
        isSelected={currentPage === "rules"}
        onClick={() => changePage("rules")}
      />
      <NavigationBarButton
        icon={faHouse}
        label="Accueil"
        isSelected={currentPage === "home"}
        onClick={() => changePage("home")}
      />
      <NavigationBarButton
        icon={faCircleInfo}
        label="À propos"
        isSelected={currentPage === "about"}
        onClick={() => changePage("about")}
      />
    </nav>
  );
}
