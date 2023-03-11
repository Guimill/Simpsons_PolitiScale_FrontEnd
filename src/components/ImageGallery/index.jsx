import { personnagesList } from "../../datas/personnagesList";
import { Link } from "react-router-dom";
import Card from "../card";
import styled from "styled-components";

const ImgGallery = styled.nav`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 10px;
grid-auto-rows: minmax(100px, auto);
padding-left: 15vw;
`

function ImageGallery() {
  return (
    <ImgGallery className="ImageGallery">
      {personnagesList.map(({ id, src, name }) => (
        <div key={id}>
          <Link to={name}>
            <Card name={name} src={src} />
          </Link>
        </div>
      ))}
     </ImgGallery>
  );
}

export default ImageGallery;
