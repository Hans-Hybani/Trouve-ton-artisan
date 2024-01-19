import React,{useEffect, useState} from "react";
import data from '../data.json'
import '../Components-Style/cards.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";
import StarRating from "../Components/stars";

function Batiment(params) {

        const [artisans, setArtisans] = useState([]);
                useEffect(() => {
                setArtisans(data);
        }, []);

        let category = [];

        // Utilisation d'une boucle for pour filtrer les artisans par catégorie
        for (let i = 0; i < artisans.length; i++) {
                const artisan = artisans[i];

                if (artisan.category === "Bâtiment") {
                        category.push(artisan)
                }       
        }

        const navigate = useNavigate();

        // Définition de la fonction "handleCardClick" pour gérer le clic sur une carte d'artisan
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

        return(
                <section>
                        <h2>Nos artisan dans le batiment</h2>
                        <div className="card__artisan__box">
                                {/* Utilisation de la méthode map pour créer une carte pour chaque artisan dans la catégorie */}
                                {category.map((artisan) => (
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
                </section>
        )
}

export default Batiment;