import {
  faBook,
  faCircleInfo,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavigationBar() {
  return (
    <div className="flex bg-slate-500 rounded-full">
      <div className="flex flex-col rounded-full bg-white w-48 py-1 text-jet items-center">
        <FontAwesomeIcon icon={faBook} className="text-2xl" />
        <p>Règles</p>
      </div>
      <div className="flex flex-col w-48 py-1 text-jet items-center">
        <FontAwesomeIcon icon={faHouse} className="text-2xl" />
        <p>Acceuil</p>
      </div>
      <div className="flex flex-col w-48 py-1 text-jet items-center">
        <FontAwesomeIcon icon={faCircleInfo} className="text-2xl" />
        <p>À propos</p>
      </div>
    </div>
  );
}
