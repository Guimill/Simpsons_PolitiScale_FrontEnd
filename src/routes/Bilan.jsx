import { useState, useEffect } from "react";
import StatBox from "../components/statBox/index";
import Header from "../routes/Header/Header";
import Footer from "../routes/Footer/Footer";
import { personnagesList } from "../datas/personnagesList";
import { getAllStats, percentGauche } from "../api";

function Bilan() {
  const [stats, setStats] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllStats()
      .then((rows) => setStats(Object.fromEntries(rows.map((r) => [r.name, r]))))
      .catch((e) => setError(e.message));
  }, []);

  return (
    <>
      <Header />
      <main className="page">
        <h1 className="visually-hidden">Bilan des votes</h1>
        {error && (
          <p className="message" role="alert">
            {error}
          </p>
        )}
        {!stats && !error && <p className="message">Chargement…</p>}
        {stats && (
          <ul className="bilan">
            {personnagesList.map(({ id, name }) => {
              const s = stats[name] || { total: 0 };
              return (
                <li key={id} className="bilan__row">
                  <h2 className="bilan__name">{name}</h2>
                  <StatBox total={s.total} data={percentGauche(s)} />
                </li>
              );
            })}
          </ul>
        )}
      </main>
      <Footer />
    </>
  );
}

export default Bilan;
