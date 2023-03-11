import { personnagesList } from "../../datas/personnagesList";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

function Button({ hidden, setHidden, data, setData, total, setTotal}) {

    let location = useLocation();
    const urlName = location.pathname;
    const realUrlName = urlName.substring(1);
    let PersonnageData = personnagesList.filter(function (personnage) {
        return personnage.name === realUrlName
      });

    let personnageId = PersonnageData.map(personnage => {
        return personnage.id
    })

    personnageId++

    let personnageDataSuivant = personnagesList.filter(function (personnage) {
        return personnage.id === personnageId
      });

    const personnageNameSuivant = personnageDataSuivant.map(personnage => {
        return personnage.name
    })

        const realPersonnageNameSuivant = '/' + personnageNameSuivant

    const urlPostName = 'http://localhost:3000' + urlName

    const [buttonDisabled, setButtonDisabled] = useState(false);
        
          const handleSubmitGauchePost = (e) => {
            e.preventDefault();
            const userData = {
              name: realUrlName,
              vote: "Gauche"
            };
            axios.post({urlPostName}, userData).then((response) => {
              console.log(response.status);
            });
          };

          const handleSubmitDroitePost = (e) => {
            e.preventDefault();
            const userData = {
              name: realUrlName,
              vote: "Droite"
            };
            axios.post({urlPostName}, userData).then((response) => {
              console.log(response.status);
            });
          };

          const update = () => {
            axios.get(urlPostName).then((response) => {
                const total = response.data.length;
                setTotal(total);
                let vote = response.data.filter(function (vote) {
                    return vote.vote === "Gauche"
                  });
                let voteLength = vote.length;
                let result = ( voteLength / total ) * 100;
                setData(result);
                console.log(result);
            });
          };

          useEffect(update, []);


    return (
            <div class="console">
                <div class="console__containerTop">
                      <Link to={realPersonnageNameSuivant} onClick={() =>{ setButtonDisabled(false); setHidden(true)}}>
                          <button class="console__containerTop__button">
                            Personnage Suivant
                          </button>
                      </Link>
                </div>
                    <div class="console__containerBottom"> 
                        <form onSubmit={handleSubmitGauchePost}>
                            <button name="Gauche" type="submit" value={realUrlName} disabled={buttonDisabled}
                            onClick={() => { setButtonDisabled(true); setHidden(false); update()}}
                                class="console__containerBottom__button console__containerBottom__button--left">
                                Gauche
                            </button>
                        </form>
                        <form onSubmit={handleSubmitDroitePost}>
                            <button  name="Droite" type="submit" value={realUrlName} disabled={buttonDisabled}
                            onClick={() => { setButtonDisabled(true); setHidden(false); update()}}
                                class="console__containerBottom__button console__containerBottom__button--right">
                                Droite
                            </button>
                        </form>
                    </div>
                </div>
    );
  }


export default Button;