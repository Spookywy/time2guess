import { APP_VERSION, GITHUB_REPO_URL } from "@/utils/constants";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBug, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function About() {
  return (
    <div className="text-center text-jet">
      <h1 className="text-center text-5xl font-extrabold">À propos</h1>
      <div className="mt-16 text-2xl flex gap-10 flex-col">
        <p>
          Made with
          <FontAwesomeIcon
            className="ml-2 mr-2 text-dark-orange"
            icon={faHeart}
          />
          by <b>Valentin Menoret</b>
        </p>
        <p>Version {APP_VERSION}</p>
        <a href={GITHUB_REPO_URL} target="_blank">
          <FontAwesomeIcon className="mr-2" icon={faGithub} />
          Source code
        </a>
        <a href={`${GITHUB_REPO_URL}/issues/new`} target="_blank">
          <FontAwesomeIcon className="mr-2" icon={faBug} />
          Signaler un bug
        </a>
      </div>
    </div>
  );
}
