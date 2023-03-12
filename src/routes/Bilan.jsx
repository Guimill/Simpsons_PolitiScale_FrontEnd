import axios from 'axios';
import { useState, useEffect } from "react";
import StatBox from '../components/statBox/index'
import Header from '../routes/Header/Header'
import Footer from '../routes/Footer/Footer'
import { personnagesList } from '../datas/personnagesList';


function Bilan() {

  const [data, setData] = useState(null);
  const [total, setTotal] = useState(null);
  
  const update = () => {
    axios.get('/Bilan').then((response) => {
      const total = response.data.length
      for (let i = 0; i<total; i++ ) {
        
      }
      let vote = response.data.filter(function (vote) {
        return vote.vote === "Gauche"
      });
      let voteLength = vote.length;
      let result = ( voteLength / total ) * 100;
      console.log(result);
      let resultatParPersonnage = new Map();
  });
  };
  
  useEffect(update, []);
  

  return (
    <div>
      <Header />
        <ul>
            <li>
                {personnagesList.map(({name, id}) =>
                    <h1 id="nameBilan"> {name} :<StatBox total={total} data={data} name={name} key={id} /> </h1>)}
            </li>
        </ul>
      <Footer />
    </div>
  );
}

export default Bilan;