// Appels à l'API (même domaine : nginx transmet /api au backend).
// Le navigateur est reconnu par un cookie anonyme posé par l'API : un seul vote par personnage,
// que l'on peut changer à volonté.
async function request(path, options) {
  const res = await fetch(`/api${path}`, options);
  const body = await res.json().catch(() => ({}));
  if (!res.ok) {
    const error = new Error(body.error || `Erreur ${res.status}`);
    error.status = res.status;
    throw error;
  }
  return body;
}

export const getAllStats = () => request("/votes");

// { name, gauche, droite, total, myVote: "Gauche" | "Droite" | null }
export const getStats = (name) => request(`/votes/${encodeURIComponent(name)}`);

// { "Homer": "Gauche", ... }
export const getMyVotes = () => request("/my-votes");

// Vote (ou change de vote) ; renvoie les statistiques à jour avec myVote
export const sendVote = (name, vote) =>
  request(`/votes/${encodeURIComponent(name)}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ vote }),
  });

// --- Administration (mot de passe envoyé à chaque appel) ---
const admin = (password, path, options = {}) =>
  request(`/admin${path}`, {
    ...options,
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${password}` },
  });

export const adminOverview = (password) => admin(password, "/votes");
export const adminDeleteVote = (password, id) => admin(password, `/votes/id/${id}`, { method: "DELETE" });
export const adminResetCharacter = (password, name) =>
  admin(password, `/votes/${encodeURIComponent(name)}`, { method: "DELETE" });
export const adminResetAll = (password) =>
  admin(password, "/votes", { method: "DELETE", body: JSON.stringify({ confirm: "RESET" }) });

// Pourcentage de votes "Gauche" (null s'il n'y a pas encore de vote)
export const percentGauche = (stats) => (stats && stats.total ? (stats.gauche / stats.total) * 100 : null);
