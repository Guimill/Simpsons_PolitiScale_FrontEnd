function Card({ name, src, as: Title = "h2" }) {
  return (
    <div className="personnage">
      <Title>{name}</Title>
      <img className="personnage__img" src={src} alt="" loading="lazy" />
    </div>
  );
}

export default Card;
