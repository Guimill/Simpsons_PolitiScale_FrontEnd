function Card({name, src, focus1}) {

    return (
            <div link to class="personnage" >
                <h2>{name}</h2>
                <img onFocus={focus1} class="personnage__img" src={src} alt={name} />
            </div>
    );
  }

export default Card;
  