import { personnagesList } from "../../datas/personnagesList";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { useScrollBy } from "react-use-window-scroll";

function Button({ hidden, setHidden, data, setData, total, setTotal, focus1, setFocus1, focus2, setFocus2}) {

  //permet de remonter en haut de la page après chaque appuye sur personnage suivant
  const scrollBy = useScrollBy();
  
  //récupération de l'url afin de filtrer personnagesList et récupéré les données personnalisé par url

    let location = useLocation();
    const urlName = location.pathname;
    const realUrlName = urlName.substring(6);
    let PersonnageData = personnagesList.filter(function (personnage) {
        return personnage.name === realUrlName
      });

    let personnageId = PersonnageData.map(personnage => {
        return personnage.id
    })

    //permet de passé d'un personnage à un autre avec le bouton suivant
    personnageId++

    let personnageDataSuivant = personnagesList.filter(function (personnage) {
        return personnage.id === personnageId
      });

    const personnageNameSuivant = personnageDataSuivant.map(personnage => {
        return personnage.name
    })

        const realPersonnageNameSuivant = '/Vote/' + personnageNameSuivant

    const urlPostName = 'http://localhost:3000/Vote/' + realUrlName
    const urlGetName = 'http://localhost:3000/Vote/' + realUrlName

    //désactive les boutons après utilisation afin d'éviter de multiplier les données
    const [buttonDisabled, setButtonDisabled] = useState(false);
        
    //envoie des données du bouton gauche vers le serveur
          const handleSubmitGauchePost = (e) => {
            e.preventDefault();
            const userData = {
              name: realUrlName,
              vote: "Gauche"
            };
            axios.post(urlPostName, userData).then((response) => {
              console.log(response.status);
            });
          };

    //envoie des données du bouton droit vers le serveur

          const handleSubmitDroitePost = (e) => {
            e.preventDefault();
            const userData = {
              name: realUrlName,
              vote: "Droite"
            };
            axios.post(urlPostName, userData).then((response) => {
              console.log(response.status);
            });
          };


          //récupération des statistiques pour les statBox

          const update = () => {
            axios.get(urlGetName).then((response) => {
                const total = response.data.length;
                setTotal(total);
                let vote = response.data.filter(function (vote) {
                    return vote.vote === "Gauche"
                  });
                let voteLength = vote.length;
                let result = ( voteLength / total ) * 100;
                setData(result);
            });
          };

          useEffect(update, []);

          


    return (
            <div class="console">
                <div class="console__containerTop">
                      <Link to={realPersonnageNameSuivant} onFocus={focus2} onClick={() =>{ setButtonDisabled(false); setHidden(true); scrollBy(-500, 0); setFocus1(true); setFocus2(false)}}>
                          <button class="console__containerTop__button">
                            Personnage Suivant
                          </button>
                      </Link>
                </div>
                    <div class="console__containerBottom"> 
                        <form onSubmit={handleSubmitGauchePost}>
                            <button name="Gauche" type="submit" value={realUrlName} disabled={buttonDisabled}
                            onClick={() => { setButtonDisabled(true); setHidden(false); update(); setFocus1(false); setFocus2(true)}}
                                class="console__containerBottom__button console__containerBottom__button--left">
                                Gauche
                            </button>
                        </form>
                        <form onSubmit={handleSubmitDroitePost}>
                            <button  name="Droite" type="submit" value={realUrlName} disabled={buttonDisabled}
                            onClick={() => { setButtonDisabled(true); setHidden(false); update(); setFocus1(false); setFocus2(true)}}
                                class="console__containerBottom__button console__containerBottom__button--right">
                                Droite
                            </button>
                        </form>
                    </div>
                </div>
    );
  }


export default Button;