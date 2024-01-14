import React,{useEffect, useState} from "react";

import data from '../data.json'

import '../Components-Style/cards.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'


function Batiment(params) {

        //A commenter
        const [artisans, setArtisans] = useState([]);
                useEffect(() => {
                // Chargez les données depuis le fichier JSON ici
                setArtisans(data); // Le tableau vide signifie que useEffect ne s'exécute qu'une fois après le montage du composant
        }, []);

        

        let category = [];

        for (let i = 0; i < artisans.length; i++) {
                const artisan = artisans[i];

                if (artisan.category === "Bâtiment") {
                        category.push(artisan)
                }       
        }

        return(
                <section>
                        <h2>Nos artisan dans le batiment</h2>
                        <div className="card__artisan__box">
                                {/* A commenter */}
                                {category.map((artisan) => (
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

export default Batiment;