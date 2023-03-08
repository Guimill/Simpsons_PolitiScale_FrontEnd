import { personnagesList } from "../../datas/personnagesList";
import Card from "../card";
import styled from "styled-components";

const ImgGallery = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  
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
