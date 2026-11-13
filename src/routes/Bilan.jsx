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
    <div>
      <Header />
      {error && (
        <p className="statistics" role="alert">
          {error}
        </p>
      )}
      {!stats && !error && <p className="statistics">Chargement…</p>}
      {stats && (
        <ul>
          {personnagesList.map(({ id, name }) => {
            const s = stats[name] || { total: 0 };
            return (
              <li key={id}>
                <h1 id="nameBilan">
                  {name} :<StatBox total={s.total} data={percentGauche(s)} />
                </h1>
              </li>
            );
          })}
        </ul>
      )}
      <Footer />
    </div>
  );
}

export default Bilan;
