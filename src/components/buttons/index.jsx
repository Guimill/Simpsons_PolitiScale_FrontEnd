import { Link } from "react-router";
import { useEffect, useState } from "react";
import { personnagesList } from "../../datas/personnagesList";
import { getStats, sendVote, percentGauche } from "../../api";
import Statistics from "../statistics";

// Vote buttons, then the statistics once voted. One vote per character per browser
// (the API remembers it with an anonymous cookie), which can be changed at any time.
function Console({ personnage }) {
  const [stats, setStats] = useState(null); // includes myVote
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    getStats(personnage.name)
      .then((s) => !cancelled && setStats(s))
      .catch((e) => !cancelled && setError(e.message))
      .finally(() => !cancelled && setLoading(false));
    return () => {
      cancelled = true;
    };
  }, [personnage.name]);

  const index = personnagesList.findIndex((p) => p.id === personnage.id);
  const precedent = personnagesList[index - 1];
  const suivant = personnagesList[index + 1];
  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const vote = async (choix) => {
    setSending(true);
    setError(null);
    try {
      setStats(await sendVote(personnage.name, choix));
    } catch (e) {
      setError(e.message);
    } finally {
      setSending(false);
    }
  };

  const myVote = stats && stats.myVote;
  const busy = loading || sending;

  return (
    <>
      {myVote && (
        <>
          <p className="message" role="status">
            Vous avez voté <strong>{myVote}</strong> pour {personnage.name}. Vous pouvez changer d'avis à tout moment.
          </p>
          <Statistics data={percentGauche(stats)} total={stats.total} />
        </>
      )}
      {error && (
        <p className="message" role="alert">
          {error}
        </p>
      )}
      <div className="console">
        <div className="console__choices">
          <button
            type="button"
            disabled={busy || myVote === "Gauche"}
            aria-pressed={myVote === "Gauche"}
            onClick={() => vote("Gauche")}
            className="console__button--left"
          >
            {myVote === "Gauche" ? "✓ Gauche" : "Gauche"}
          </button>
          <button
            type="button"
            disabled={busy || myVote === "Droite"}
            aria-pressed={myVote === "Droite"}
            onClick={() => vote("Droite")}
            className="console__button--right"
          >
            {myVote === "Droite" ? "✓ Droite" : "Droite"}
          </button>
        </div>
        <nav className="console__nav" aria-label="Navigation entre personnages">
          <Link className="console__button--nav" to={precedent ? `/Vote/${precedent.name}` : "/"} onClick={toTop}>
            {precedent ? "← Précédent" : "← Accueil"}
          </Link>
          <Link className="console__button--nav" to={suivant ? `/Vote/${suivant.name}` : "/Bilan"} onClick={toTop}>
            {suivant ? "Suivant →" : "Bilan →"}
          </Link>
        </nav>
      </div>
    </>
  );
}

export default Console;
