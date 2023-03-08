function Card({name, src}) {

    return (
            <div class="personnage" >
                <h2>{name}</h2>
                <img class="personnage__img" src={src} alt={name} />
            </div>
    );
  }

export default Card;
  