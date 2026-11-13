function Card({ name, src }) {
  return (
    <div className="personnage">
      <h2>{name}</h2>
      <img className="personnage__img" src={src} alt={name} />
    </div>
  );
}

export default Card;
