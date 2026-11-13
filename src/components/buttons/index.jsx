import { Link } from "react-router";
import { useState } from "react";
import { personnagesList } from "../../datas/personnagesList";
import { sendVote, percentGauche } from "../../api";
import Statistics from "../statistics";

// Vote buttons, then the statistics once the vote is recorded
function Console({ personnage }) {
  const [stats, setStats] = useState(null);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(null);

  const index = personnagesList.findIndex((p) => p.id === personnage.id);
  const suivant = personnagesList[index + 1];

  const vote = async (choix) => {
    setSending(true);
    setError(null);
    try {
      setStats(await sendVote(personnage.name, choix));
    } catch (e) {
      setError(e.message);
      setSending(false);
    }
  };

  const voted = stats !== null;

  return (
    <>
      {voted && <Statistics data={percentGauche(stats)} total={stats.total} />}
      {error && (
        <p className="statistics" role="alert">
          {error}
        </p>
      )}
      <div className="console">
        <div className="console__containerTop">
          <Link
            to={suivant ? `/Vote/${suivant.name}` : "/Bilan"}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <button className="console__containerTop__button" tabIndex={-1}>
              {suivant ? "Personnage Suivant" : "Voir le bilan"}
            </button>
          </Link>
        </div>
        <div className="console__containerBottom">
          <button
            type="button"
            disabled={voted || sending}
            onClick={() => vote("Gauche")}
            className="console__containerBottom__button console__containerBottom__button--left"
          >
            Gauche
          </button>
          <button
            type="button"
            disabled={voted || sending}
            onClick={() => vote("Droite")}
            className="console__containerBottom__button console__containerBottom__button--right"
          >
            Droite
          </button>
        </div>
      </div>
    </>
  );
}

export default Console;
