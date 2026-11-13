function StatBox({ data, total }) {
  const hasVotes = data !== null && data !== undefined;
  return (
    <div className="statistics">
      <div className="statistics__statBox">
        <div className="statistics__statBox--gauche">{hasVotes ? `${Math.round(data)}%` : "–"}</div>
        <div className="statistics__statBox--nombreDeVote">
          {total} vote{total > 1 ? "s" : ""}
        </div>
        <div className="statistics__statBox--droite">{hasVotes ? `${100 - Math.round(data)}%` : "–"}</div>
      </div>
    </div>
  );
}

export default StatBox;
