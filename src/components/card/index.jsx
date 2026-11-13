// vote: "Gauche" | "Droite" | undefined (badge shown on the gallery when already voted)
function Card({ name, src, as: Title = "h2", vote }) {
  return (
    <div className={`personnage${vote ? " personnage--voted" : ""}`}>
      {vote && <span className={`personnage__badge personnage__badge--${vote.toLowerCase()}`}>✓ {vote}</span>}
      <Title>{name}</Title>
      <img className="personnage__img" src={src} alt="" loading="lazy" />
    </div>
  );
}

export default Card;
