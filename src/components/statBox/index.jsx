function StatBox({ data, total }) {
  const hasVotes = data !== null && data !== undefined;
  return (
    <div className="statBox">
      <div className="statBox__gauche" title="Gauche">
        {hasVotes ? `${Math.round(data)}%` : "–"}
      </div>
      <div className="statBox__total">
        {total} vote{total > 1 ? "s" : ""}
      </div>
      <div className="statBox__droite" title="Droite">
        {hasVotes ? `${100 - Math.round(data)}%` : "–"}
      </div>
    </div>
  );
}

export default StatBox;
