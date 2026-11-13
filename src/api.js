// Appels à l'API (même domaine : nginx transmet /api au backend).
// Le navigateur est reconnu par un cookie anonyme posé par l'API : un seul vote par personnage.
async function request(path, options, okStatuses = []) {
  const res = await fetch(`/api${path}`, options);
  const body = await res.json().catch(() => ({}));
  if (!res.ok && !okStatuses.includes(res.status)) throw new Error(body.error || `Erreur ${res.status}`);
  return body;
}

export const getAllStats = () => request("/votes");

// { name, gauche, droite, total, myVote: "Gauche" | "Droite" | null }
export const getStats = (name) => request(`/votes/${encodeURIComponent(name)}`);

// { "Homer": "Gauche", ... }
export const getMyVotes = () => request("/my-votes");

// Renvoie les statistiques à jour ; si on avait déjà voté (409), celles-ci avec le vote existant
export const sendVote = (name, vote) =>
  request(
    `/votes/${encodeURIComponent(name)}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ vote }),
    },
    [409]
  );

// Pourcentage de votes "Gauche" (null s'il n'y a pas encore de vote)
export const percentGauche = (stats) => (stats && stats.total ? (stats.gauche / stats.total) * 100 : null);
