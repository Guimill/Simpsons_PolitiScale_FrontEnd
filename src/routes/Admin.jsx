import { useCallback, useEffect, useState } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { personnagesList } from "../datas/personnagesList";
import { adminOverview, adminDeleteVote, adminResetCharacter, adminResetAll, percentGauche } from "../api";

// Admin page (/admin, not linked anywhere): see and reset votes.
// The password is checked by the API on every call; it is kept for this tab only (sessionStorage).
const STORAGE_KEY = "politiscale-admin";

const readPassword = () => {
  try {
    return sessionStorage.getItem(STORAGE_KEY) || "";
  } catch {
    return "";
  }
};
const savePassword = (value) => {
  try {
    if (value) sessionStorage.setItem(STORAGE_KEY, value);
    else sessionStorage.removeItem(STORAGE_KEY);
  } catch {
    /* private mode: the password just won't survive a reload */
  }
};

const formatDate = (iso) =>
  new Date(iso).toLocaleString("fr-FR", { dateStyle: "short", timeStyle: "short" });

function useNoIndex() {
  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);
    return () => meta.remove();
  }, []);
}

function Login({ onLogin, error, busy }) {
  const [value, setValue] = useState("");
  return (
    <form
      className="admin-login"
      onSubmit={(e) => {
        e.preventDefault();
        onLogin(value);
      }}
    >
      <h1>Administration</h1>
      <label htmlFor="admin-password">Mot de passe</label>
      <input
        id="admin-password"
        type="password"
        autoComplete="current-password"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required
        autoFocus
      />
      {error && (
        <p className="admin-error" role="alert">
          {error}
        </p>
      )}
      <button type="submit" className="admin-btn" disabled={busy || !value}>
        {busy ? "Connexion…" : "Se connecter"}
      </button>
    </form>
  );
}

function Admin() {
  useNoIndex();
  const [password, setPassword] = useState(readPassword);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState(null);

  const load = useCallback(async (pwd) => {
    setBusy(true);
    setError(null);
    try {
      setData(await adminOverview(pwd));
      setPassword(pwd);
      savePassword(pwd);
    } catch (e) {
      setData(null);
      if (e.status === 401) {
        setPassword("");
        savePassword("");
      }
      setError(e.message);
    } finally {
      setBusy(false);
    }
  }, []);

  useEffect(() => {
    if (password) load(password);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const run = async (action, message) => {
    setBusy(true);
    setError(null);
    try {
      const { deleted } = await action();
      setNotice(`${message} (${deleted} vote${deleted > 1 ? "s" : ""} supprimé${deleted > 1 ? "s" : ""}).`);
      await load(password);
    } catch (e) {
      setError(e.message);
      setBusy(false);
    }
  };

  const logout = () => {
    savePassword("");
    setPassword("");
    setData(null);
    setNotice(null);
  };

  if (!data) {
    return (
      <>
        <Header />
        <main className="page">
          {password && busy ? <p className="message">Chargement…</p> : <Login onLogin={load} error={error} busy={busy} />}
        </main>
        <Footer />
      </>
    );
  }

  // every known character, plus any other name present in the database
  const byName = Object.fromEntries(data.characters.map((c) => [c.name, c]));
  const names = [...personnagesList.map((p) => p.name), ...data.characters.map((c) => c.name)].filter(
    (n, i, all) => all.indexOf(n) === i
  );

  return (
    <>
      <Header />
      <main className="page admin">
        <div className="admin__bar">
          <h1>Administration</h1>
          <div className="admin__actions">
            <button type="button" className="admin-btn" onClick={() => load(password)} disabled={busy}>
              Actualiser
            </button>
            <button type="button" className="admin-btn admin-btn--ghost" onClick={logout}>
              Déconnexion
            </button>
          </div>
        </div>

        <ul className="admin__summary">
          <li>
            <strong>{data.total}</strong> votes
          </li>
          <li>
            <strong>{data.voters}</strong> votants
          </li>
          <li>
            <strong>{data.characters.length}</strong> / {personnagesList.length} personnages notés
          </li>
        </ul>

        {notice && (
          <p className="message" role="status">
            {notice}
          </p>
        )}
        {error && (
          <p className="message admin-error" role="alert">
            {error}
          </p>
        )}

        <section aria-labelledby="admin-characters">
          <h2 id="admin-characters">Par personnage</h2>
          <div className="admin__table-wrap">
            <table className="admin__table">
              <thead>
                <tr>
                  <th scope="col">Personnage</th>
                  <th scope="col">Gauche</th>
                  <th scope="col">Droite</th>
                  <th scope="col">Total</th>
                  <th scope="col" className="admin__opt">% gauche</th>
                  <th scope="col">
                    <span className="visually-hidden">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {names.map((name) => {
                  const s = byName[name] || { gauche: 0, droite: 0, total: 0 };
                  const pct = percentGauche(s);
                  return (
                    <tr key={name} className={s.total ? "" : "is-empty"}>
                      <th scope="row">{name}</th>
                      <td data-label="Gauche">{s.gauche}</td>
                      <td data-label="Droite">{s.droite}</td>
                      <td data-label="Total">{s.total}</td>
                      <td className="admin__opt" data-label="% gauche">{pct === null ? "–" : `${Math.round(pct)} %`}</td>
                      <td>
                        {s.total > 0 && (
                        <button
                          type="button"
                          className="admin-btn admin-btn--small"
                          disabled={busy}
                          onClick={() =>
                            window.confirm(`Remettre à zéro les ${s.total} votes de ${name} ?`) &&
                            run(() => adminResetCharacter(password, name), `${name} remis à zéro`)
                          }
                        >
                          Remettre à zéro
                        </button>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        <section aria-labelledby="admin-recent">
          <h2 id="admin-recent">Derniers votes</h2>
          {data.recent.length === 0 ? (
            <p className="message">Aucun vote.</p>
          ) : (
            <div className="admin__table-wrap">
              <table className="admin__table">
                <thead>
                  <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Personnage</th>
                    <th scope="col">Vote</th>
                    <th scope="col">Votant</th>
                    <th scope="col">
                      <span className="visually-hidden">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.recent.map((v) => (
                    <tr key={v.id}>
                      <td>
                        {formatDate(v.updatedAt)}
                        {v.updatedAt !== v.createdAt && <span className="admin__tag"> modifié</span>}
                      </td>
                      <th scope="row">{v.name}</th>
                      <td>
                        <span className={`admin__vote admin__vote--${v.vote.toLowerCase()}`}>{v.vote}</span>
                      </td>
                      <td>
                        <code>{v.voterId || "ancien"}</code>
                      </td>
                      <td>
                        <button
                          type="button"
                          className="admin-btn admin-btn--small"
                          disabled={busy}
                          onClick={() =>
                            window.confirm(`Supprimer ce vote ${v.vote} pour ${v.name} ?`) &&
                            run(() => adminDeleteVote(password, v.id), "Vote supprimé")
                          }
                        >
                          Supprimer
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        <section className="admin__danger" aria-labelledby="admin-danger">
          <h2 id="admin-danger">Tout remettre à zéro</h2>
          <p>Supprime définitivement les {data.total} votes de tous les personnages.</p>
          <button
            type="button"
            className="admin-btn admin-btn--danger"
            disabled={busy || !data.total}
            onClick={() =>
              window.prompt('Tapez RESET pour supprimer tous les votes :') === "RESET" &&
              run(() => adminResetAll(password), "Tous les votes ont été remis à zéro")
            }
          >
            Supprimer tous les votes
          </button>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Admin;
