import { personnagesList } from "../../datas/personnagesList";
import Card from "../card";
import styled from "styled-components";

const ImgGallery = styled.nav`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 10px;
grid-auto-rows: minmax(100px, auto);
padding-left: 10em;
`

function ImageGallery() {
  return (
    <ImgGallery className="ImageGallery">
      {personnagesList.map(({ id, src, name }) => (
        <div key={id}>
          <Card name={name} src={src} />
        </div>
      ))}
     </ImgGallery>
  );
}

export default ImageGallery;
