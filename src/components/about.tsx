import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function About() {
  return (
    <div className="text-center text-jet">
      <h1 className="text-center text-6xl font-extrabold">À propos</h1>
      <div className="mt-16 text-2xl">
        <p className="mb-10">
          Made with
          <FontAwesomeIcon
            className="ml-2 mr-2 text-dark-orange"
            icon={faHeart}
          />
          by <b>Valentin Menoret</b>
        </p>
        <a href="https://github.com/Spookywy/time2guess">
          <FontAwesomeIcon className="mr-2" icon={faGithub} />
          Source code
        </a>
      </div>
    </div>
  );
}
