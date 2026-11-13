import { useEffect, useState } from "react";
import { Link } from "react-router";
import { personnagesList } from "../../datas/personnagesList";
import { getMyVotes } from "../../api";
import Card from "../card";

function ImageGallery() {
  const [myVotes, setMyVotes] = useState({});

  useEffect(() => {
    getMyVotes()
      .then(setMyVotes)
      .catch(() => {}); // badges are a bonus: the gallery works without them
  }, []);

  const done = personnagesList.filter((p) => myVotes[p.name]).length;

  return (
    <>
      <Link className="bilan-link" to="/Bilan">
        Bilan
      </Link>
      <h1 className="visually-hidden">Choisissez un personnage</h1>
      {done > 0 && (
        <p className="progress-note">
          {done} / {personnagesList.length} personnages votés
        </p>
      )}
      <ul className="gallery">
        {personnagesList.map(({ id, src, name }) => (
          <li key={id}>
            <Link to={`/Vote/${name}`}>
              <Card name={name} src={src} vote={myVotes[name]} />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ImageGallery;
