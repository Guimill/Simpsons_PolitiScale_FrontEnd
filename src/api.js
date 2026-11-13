// Appels à l'API (même domaine : nginx transmet /api au backend)
async function request(path, options) {
  const res = await fetch(`/api${path}`, options);
  const body = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(body.error || `Erreur ${res.status}`);
  return body;
}

export const getAllStats = () => request("/votes");

export const sendVote = (name, vote) =>
  request(`/votes/${encodeURIComponent(name)}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ vote }),
  });

// Pourcentage de votes "Gauche" (null s'il n'y a pas encore de vote)
export const percentGauche = (stats) => (stats && stats.total ? (stats.gauche / stats.total) * 100 : null);
