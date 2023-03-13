import axios from 'axios';
import { useState, useEffect } from "react";
import StatBox from '../components/statBox/index'
import Header from '../routes/Header/Header'
import Footer from '../routes/Footer/Footer'
import { personnagesList } from '../datas/personnagesList';


function Bilan() {

  const [mergedData, setMergedData] = useState([])

  useEffect(() => {
    axios.get('/Bilan').then((response) => {
      const data = response.data;

      //fusion des objet ayant le même nom (key) et aggrégation des votes

      let Merge = data.reduce((m,{name:n,vote:v})=>({...m,[n]:[...m[n]||[],v].flat(1)}),{})
      let voteMerge = Object.entries(Merge).map(([n,v])=>({name:n,vote:v}))

      for(let key in voteMerge) {
        const voteTotal = voteMerge[key].vote.length;
        const voteGauche = voteMerge[key].vote.filter((vote)=> vote === "Gauche")
        voteMerge[key].total = voteTotal;
        voteMerge[key].vote = [Math.round((voteGauche.length/voteTotal)*100)]
        console.dir(voteMerge)
        const merged = {
          ...personnagesList,
          ...voteMerge
        };
        setMergedData(merged);

              }

          
              /*
      for(let key in voteMerge2) {
        const voteTotal = voteMerge2[key].vote.length;
        const voteGauche = voteMerge2[key].vote.filter((vote)=> vote === "Gauche")
        voteMerge2[key].vote = [Math.round((voteGauche.length/voteTotal)*100)]
        const voteMergeGaucheTotal = voteMerge2;
      };

      /*
      for(let key in voteMerge1) {
        for (let key1 in voteMerge1[key]) {
            const voteTotal = voteMerge1[key][key1].length;
            voteMerge1[key] = [voteTotal]
            const voteMergeTotal = voteMerge1;
            console.dir(voteMergeTotal)
        }
      };
      for(let key in voteMerge2) {
        for (let key1 in voteMerge2[key]) {
            const voteTotal = voteMerge2[key][key1].length;
            const voteGauche = voteMerge2[key][key1].filter((vote)=> vote === "Gauche");
            voteMerge2[key] = [Math.round((voteGauche.length/voteTotal)*100)]
            const voteMergeGaucheTotal = voteMerge2;
            console.dir(voteMergeGaucheTotal)
        }
      }*/

  })}, []);


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