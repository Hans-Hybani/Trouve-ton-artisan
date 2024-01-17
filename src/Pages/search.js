import React,{useEffect, useState} from "react";
import data from '../data.json'
import '../Components-Style/cards.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function SearchArti(params) {

  const location = useLocation();

  const selectedArtisan = location.state?.selectedArtisan;
        //A commenter
        const [artisans, setArtisans] = useState([]);
                useEffect(() => {
                // Chargez les données depuis le fichier JSON ici
                setArtisans(data); // Le tableau vide signifie que useEffect ne s'exécute qu'une fois après le montage du composant
        }, []);

        let selected = [];

        for (let i = 0; i < artisans.length; i++) {
          const artisan = artisans[i];
        
          const name = artisan.name;
          const category = artisan.category;
          const location = artisan.location;

          const searchTermName = selectedArtisan.name;
          const searchTermCategory = selectedArtisan.category;
          const searchTermLocation = selectedArtisan.location;
        
          // Vérifier si au moins une propriété correspond
          if (name.includes(searchTermName)) {
            selected.push(artisan);
          }else if (category.includes(searchTermCategory)) {
            selected.push(artisan);
          }else if(location.includes(searchTermLocation)){
            selected.push(artisan);
          }
        }

        const navigate = useNavigate();

        const handleCardClick = (selectedArtisan ) => {
          const { name, specialty, location, website, note } = selectedArtisan ;
          // Redirigez vers la page "/sheets" lorsqu'une carte est cliquée
          
          navigate('/sheets', {
                  state: {
                     selectedArtisan : {
                          name,
                          specialty,
                          location,
                          website,
                          note
                      }
                  }
          });    
  }

  return (
    <div className="card__artisan__box">
    {/* A commenter */}
    {selected.map((artisan) => (
    <div className="card__artisan" key={artisan.id} onClick={() => handleCardClick(artisan)}>
            <p className="name__artisan">{artisan.name}</p>
            <div className="speciality__artisan artisan">
                    <FontAwesomeIcon icon={faScrewdriverWrench} className="icon__cards"/>
                    <p className="speciality__name data__artian">{artisan.specialty}</p>                                                                                                
            </div>
            <div className="localisation__artisan artisan">
                    <FontAwesomeIcon icon={faLocationDot} className="icon__cards"/>
                    <p className="localisation__name data__artian">{artisan.location}</p>                                                
            </div>
            <div className="note__artisan artisan">
                    <FontAwesomeIcon icon={faStar} className="icon__cards star"/>
                    <p className="note__name data__artian">{artisan.note}/5</p>
            </div>
    </div>
    ))}
</div>
  );
}

export default SearchArti;