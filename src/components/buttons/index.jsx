import { personnagesList } from "../../datas/personnagesList";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Button() {

    let location = useLocation();
    const UrlName = location.pathname;
    const realUrlName = UrlName.substring(1);
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

        const realPersonnageName = '/' + personnageNameSuivant


    return (
            <div class="console">
                <div class="console__containerTop">
                    <Link to={realPersonnageName}>
                        <button class="console__containerTop__button">
                          Personnage Suivant
                        </button>
                    </Link>
                </div>
                <form action="" method="get" class="console__containerBottom"> 
                    <button name="Gauche" type="Submit" value="Gauche" class="console__containerBottom__button console__containerBottom__button--left">
                        Gauche
                    </button>
                    <button name="Droite" type="Submit" value="Droite" class="console__containerBottom__button console__containerBottom__button--right">
                        Droite
                    </button>
                </form>
            </div>
    );
  }

export default Button;