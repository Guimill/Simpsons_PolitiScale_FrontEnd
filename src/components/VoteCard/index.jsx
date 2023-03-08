import { useLocation } from 'react-router-dom';
import { personnagesList } from '../../datas/personnagesList';
import Card from '../card';

function PersonnageCard() {

    let location = useLocation();
    const UrlName = location.pathname;
    const realUrlName = UrlName.substring(1);
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
         <div>
            <Card name={PersonnageName} src={PersonnageSrc} />
         </div>
    )
}

export default PersonnageCard