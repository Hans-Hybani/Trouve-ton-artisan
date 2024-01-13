import React,{useEffect, useState} from "react";
import '../Pages-Style/home.scss'
import data from '../data.json'

import '../Components-Style/cards.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'



function Home(params) {

        // const ArtisanData = ({ name, specialty, location, note }) => {
        //         return (
        //           <div>
        //             <p>{name}</p>
        //             <p>{specialty}</p>
        //             <p>{location}</p>
        //             <p>{note}/5</p>
        //           </div>
        //         );
        // };

        //A commenter
        const [artisans, setArtisans] = useState([]);
                useEffect(() => {
                // Chargez les données depuis le fichier JSON ici
                setArtisans(data); // Le tableau vide signifie que useEffect ne s'exécute qu'une fois après le montage du composant
        }, []);

        // A commenter
        const topArtisans = artisans.sort((a, b) => parseFloat(b.note) - parseFloat(a.note)).slice(0, 3);
        
        return(
                <section>
                        <h2>Artisans du mois</h2>
                        <div className="card__artisan__box">
                                {/* A commenter */}
                                {topArtisans.map((artisan) => (
                                <div className="card__artisan">
                                        <p className="name__artisan">{artisan.name}</p>
                                        <div className="speciality__artisan artisan">
                                                <FontAwesomeIcon icon={faScrewdriverWrench} className="icon__cards"/>
                                                <p className="speciality__name data__artian">{artisan.specialty}</p>                                                                                                </div>
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
                </section>
        )
}

export default Home;