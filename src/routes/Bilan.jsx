import axios from 'axios';
import { useState, useEffect } from "react";
import StatBox from '../components/statBox/index'
import Header from '../routes/Header/Header'
import Footer from '../routes/Footer/Footer'
import { personnagesList } from '../datas/personnagesList';


function Bilan() {

  // utilisation d'un useState pour récupéré les données du get

  const [mergedData, setMergedData] = useState([])

  //requête pour récupéré les votes

  useEffect(() => {
    axios.get('/Bilan').then((response) => {
      const data = response.data;

      //fusion des objet ayant le même 'name' et aggrégation des votes

      let Merge = data.reduce((m,{name:n,vote:v})=>({...m,[n]:[...m[n]||[],v].flat(1)}),{})
      let voteMerge = Object.entries(Merge).map(([n,v])=>({name:n,vote:v}))


      for(let key in voteMerge) {
        const voteTotal = voteMerge[key].vote.length;
        const voteGauche = voteMerge[key].vote.filter((vote)=> vote === "Gauche")
        //création valeur somme des vote
        voteMerge[key].total = voteTotal;
        //création valeur moyenne des votes "gauche"
        voteMerge[key].vote = [Math.round((voteGauche.length/voteTotal)*100)]

        //fusion des array et export via le usestate

        const merged = {
          ...personnagesList,
          ...voteMerge
        };
        setMergedData(merged);

      }
    })},
  []);


  return (
    <div>
      <Header />
        <ul>
            <li>
                {Object.values(mergedData).map(({name,vote, total}) =>
                    <h1 id="nameBilan"> {name} :<StatBox total={total} name={name} data={vote} /> </h1>)}
            </li>
        </ul>
      <Footer />
    </div>
  );
}

export default Bilan;