import { useParams } from "react-router";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Error from "./Error";
import Card from "../components/card";
import Console from "../components/buttons";
import { personnagesList } from "../datas/personnagesList";

function Vote() {
  const { name } = useParams();
  const personnage = personnagesList.find((p) => p.name.toLowerCase() === name.toLowerCase());
  if (!personnage) return <Error />;

  return (
    <div>
      <Header />
      <div className="votingCard">
        <Card name={personnage.name} src={personnage.src} />
      </div>
      {/* key: vote state and statistics start fresh for each character */}
      <Console key={personnage.id} personnage={personnage} />
      <Footer />
    </div>
  );
}

export default Vote;
