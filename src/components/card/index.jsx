function Card({name, src}) {

    return (
        <section role="section de présentation du personnage">
            <div class="personnage" >
                <h2>{name}</h2>
                <img class="personnage__img" src={src} alt={name} />
            </div>
        </section>
    );
  }

export default Card;
  