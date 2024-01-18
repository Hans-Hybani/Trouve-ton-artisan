import React,{useEffect, useState} from "react";
import '../Pages-Style/home.scss'
import data from '../data.json'
import { useNavigate } from "react-router-dom";
import '../Components-Style/cards.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import artisan from '../Assets/artisan.PNG'
import categorie from '../Assets/categorie.PNG'
import formulaire from '../Assets/formulaire.PNG'
import message from '../Assets/message.PNG'



function Home(params) {
        
        //A commenter
        const [artisans, setArtisans] = useState([]);
                useEffect(() => {
                // Chargez les données depuis le fichier JSON
                setArtisans(data); // Le tableau vide signifie que useEffect ne s'exécute qu'une fois après le montage du composant
        }, []);

        // A commenter
        const topArtisans = artisans.sort((a, b) => parseFloat(b.note) - parseFloat(a.note)).slice(0, 3);
        
        const navigate = useNavigate();

        const handleCardClick = (selectedArtisan ) => {
                const { name, specialty, location, website, note } = selectedArtisan;
                // Redirigez vers la page "/sheets" lorsqu'une carte est cliquée
                
                navigate('/sheets', {
                        state: {
                            selectedArtisan: {
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
                <div>
                        <section>
                                <h2>Trouve ton artisan</h2>
                                <div className="step__find__artisan">
                                        <div className="step__one step">
                                                <h3>Etape 1</h3>
                                                <img src={categorie} alt="categorie d'artisans"/>
                                                <p>Dans le menue de navigation trouver la catégorie d'artisan que vous cherchez.</p>
                                        </div>
                                        <div className="step__two step">
                                                <h3>Etape 2</h3>
                                                <img src={artisan} alt="Artisans dans la categorie choisie"/>
                                                <p>Dans la catégorie choisie cliquer sur l'artisan qui vous interesse.</p>
                                        </div>
                                        <div className="step__three step">
                                                <h3>Etape 3</h3>
                                                <img src={formulaire} alt="Formulaire de contact"/>
                                                <p>Remplissez le formulaire avec vos information et votre demande.</p>
                                        </div>
                                        <div className="step__four step">
                                                <h3>Etape 4</h3>
                                                <img src={ message} alt="Message de confirmation"/>
                                                <p>A la soumission du formulaire vous verrez un message confirmation. Et une réponse vous sera apportée sous 48h</p>
                                        </div>
                                </div>
                        </section>
                        <section>
                                <h2>Artisans du mois</h2>
                                <div className="card__artisan__box">
                                        {/* A commenter */}
                                        {topArtisans.map((artisan) => (
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
                        </section>                        
                </div>
        )
}

export default Home;