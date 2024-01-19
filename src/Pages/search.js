import React,{useEffect, useState} from "react";
import data from '../data.json'
import '../Components-Style/cards.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import StarRating from "../Components/stars";

function SearchArti(params) {

  const location = useLocation();

  const parcour = location.state?.parcour;
        
        const [artisans, setArtisans] = useState([]);
                useEffect(() => {
                setArtisans(data);
        }, []);

        let selected = [];

        for (let i = 0; i < artisans.length; i++) {
          const artisan = artisans[i];
        
          //récupération des données du fichier Json
          const name = artisan.name;
          const specialty = artisan.specialty;
          const location = artisan.location;

          // Extraction des termes de recherche 
          const searchTermName = parcour.name;
          const searchTermspecialty = parcour.specialty;
          const searchTermLocation = parcour.location;
        
          // Vérifier si au moins une propriété correspond
          if (name.includes(searchTermName)) {
            selected.push(artisan);
          }else if (specialty.includes(searchTermspecialty)) {
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
      {/* Utilisation de la méthode map pour créer une carte pour chaque artisan dans le tableau 'selected', En gro on affiche le resultat de recheche */}
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
                      <StarRating rating={artisan.note} />
              </div>
      </div>
      ))}
  </div>
  );
}

export default SearchArti;