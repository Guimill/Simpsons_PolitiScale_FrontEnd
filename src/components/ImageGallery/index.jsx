import { Link } from "react-router";
import { personnagesList } from "../../datas/personnagesList";
import Card from "../card";

function ImageGallery() {
  return (
    <>
      <Link className="bilan-link" to="/Bilan">
        Bilan
      </Link>
      <h1 className="visually-hidden">Choisissez un personnage</h1>
      <ul className="gallery">
        {personnagesList.map(({ id, src, name }) => (
          <li key={id}>
            <Link to={`/Vote/${name}`}>
              <Card name={name} src={src} />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ImageGallery;
