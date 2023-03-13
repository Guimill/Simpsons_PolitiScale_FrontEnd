import { useLocation } from 'react-router-dom';
import { personnagesList } from '../../datas/personnagesList';
import Card from '../card';


function PersonnageCard({focus1}) {


    //récupération de l'url afin de filtrer personnagesList et récupéré les données personnalisé par url

    let location = useLocation();
    const UrlName = location.pathname;
    const realUrlName = UrlName.substring(6);
    let PersonnageData = personnagesList.filter(function (personnage) {
        return personnage.name === realUrlName
      });

    const PersonnageName = PersonnageData.map(personnage => {
        return personnage.name
    })

    const PersonnageSrc = PersonnageData.map(personnage => {
        return personnage.src
    })

    return(
         <div class="votingCard">
            <Card focus={focus1} name={PersonnageName} src={PersonnageSrc}/>
         </div>
    )
}

export default PersonnageCard