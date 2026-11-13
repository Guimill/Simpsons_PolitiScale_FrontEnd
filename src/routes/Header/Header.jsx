import { Link } from "react-router";
import mail from "../../assets/images/mail.svg";
import github from "../../assets/images/github.svg";
import linkedin from "../../assets/images/linkedin.svg";

function Header() {
  return (
    <header className="banner">
      <div className="banner__top">
        <Link to="/" className="banner__title">
          SIMPSONS PolitiScale
        </Link>
        <nav className="banner__lang" aria-label="Langue">
          <Link to="/" lang="fr">
            FR
          </Link>
          <a href="https://en.duolingo.com/course/fr/en/Learn-French" lang="en">
            EN
          </a>
        </nav>
      </div>
      <nav className="banner__social" aria-label="Contact">
        <a href="mailto:guillaume.milleret@gmail.com">
          <img src={mail} alt="M'écrire un e-mail" />
        </a>
        <a href="https://github.com/Guimill">
          <img src={github} alt="Mon GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/guillaume-milleret/">
          <img src={linkedin} alt="Mon LinkedIn" />
        </a>
      </nav>
    </header>
  );
}

export default Header;
