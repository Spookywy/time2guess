import {
  APP_VERSION,
  GITHUB_REPO_URL,
  PERSONAL_WEBSITE_URL,
} from "@/utils/constants";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBug, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function About() {
  return (
    <div className="flex flex-col w-full max-w-sm mx-auto flex-1 pt-2">
      <h1 className="text-4xl font-extrabold text-jet mb-6">À propos</h1>

      {/* Author card */}
      <div className="rounded-3xl bg-jet px-6 py-6 mb-4 shadow-lg flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-dark-orange text-light-orange text-xl">
          <FontAwesomeIcon icon={faHeart} />
        </div>
        <div>
          <p className="text-xs text-paynes-grey uppercase tracking-wide font-semibold mb-1">
            Made with love by
          </p>
          <a
            href={PERSONAL_WEBSITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-extrabold text-light-orange hover:text-dark-orange transition-colors"
          >
            Valentin Menoret
          </a>
        </div>
      </div>

      {/* Links */}
      <div className="flex flex-col gap-3">
        <a
          href={GITHUB_REPO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 rounded-2xl bg-jet/10 border border-jet/10 px-5 py-4 text-jet font-semibold hover:bg-jet/20 transition-colors"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-jet text-light-orange text-lg">
            <FontAwesomeIcon icon={faGithub} />
          </div>
          Code source
        </a>

        <a
          href={`${GITHUB_REPO_URL}/issues/new`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 rounded-2xl bg-jet/10 border border-jet/10 px-5 py-4 text-jet font-semibold hover:bg-jet/20 transition-colors"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-dark-orange text-light-orange text-lg">
            <FontAwesomeIcon icon={faBug} />
          </div>
          Signaler un bug
        </a>

        {/* Version badge */}
        <div className="flex items-center justify-center mt-2">
          <span className="rounded-full bg-jet/10 border border-jet/10 px-4 py-1.5 text-xs font-semibold text-paynes-grey tracking-wide">
            Version {APP_VERSION}
          </span>
        </div>
      </div>
    </div>
  );
}
