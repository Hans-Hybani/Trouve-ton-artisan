import React, {useRef} from "react";
import '../Components-Style/cards.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Form from 'react-bootstrap/Form';
import '../Pages-Style/sheets.scss';
import Nav from 'react-bootstrap/Nav';
import { useLocation } from "react-router-dom";
import emailjs from '@emailjs/browser';
import Buton from "../Components/button";

function Sheets(params) {

        const sendEmail = (e) => {
                e.preventDefault();
            
                emailjs.sendForm('service_sjxjuxt', 'template_19dqh98', form.current, 'Igbi6Gu2-dn5NmWMt')
                  .then((result) => {
                      console.log(result.text);
                  }, (error) => {
                      console.log(error.text);
                  });
                  form.current.reset();
              };

        const form = useRef()

        const location = useLocation();

        const selectedArtisan = location.state?.selectedArtisan;

        return(
                <div>
                        <div className="card__artisan__box">
                                {/* A commenter */}
                                <div className="card__artisan">
                                        <p className="name__artisan">{selectedArtisan.name}</p>
                                        <div className="speciality__artisan artisan">
                                                <FontAwesomeIcon icon={faScrewdriverWrench} className="icon__cards"/>
                                                <p className="speciality__name data__artian">{selectedArtisan.specialty}</p>                                                                                                
                                        </div>
                                        <div className="localisation__artisan artisan">
                                                <FontAwesomeIcon icon={faLocationDot} className="icon__cards"/>
                                                <p className="localisation__name data__artian">{selectedArtisan.location}</p>                                                
                                        </div>
                                        <div className="note__artisan artisan">
                                                <FontAwesomeIcon icon={faStar} className="icon__cards star"/>
                                                <p className="note__name data__artian">{selectedArtisan.note}/5</p>
                                        </div>
                                </div>
                        </div>

                        <h2>A propos</h2>
                        <p className="apropos__txt">Lorem ipsum dolor sit amet, consectetur adipiscing<br/>
                                elit. Sed quis felis ac libero posuere congue. Proin<br/>
                                consequat, nisi vel vehicula tempus, libero justo<br/> 
                                cursus est, vel varius ipsum dolor ut nulla<br/>
                        </p>

                        <h2>Mon site</h2>
                        <div className="artisan__web">
                                <Nav.Link href={selectedArtisan?.website} target="_blank" rel="noopener noreferrer">{selectedArtisan.website}</Nav.Link>
                        </div>

                        <div className="contact__fomulaire">
                                <h2>Contactez cette Artisan</h2>
                                        <Form ref={form} className="fomulaire">
                                                <Form.Group className="mb-3" controlId="nom">
                                                        <Form.Control type="input" name='user_name' placeholder="Votre nom" />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="objet">
                                                        <Form.Control type="input" name='subject' placeholder="Objet" />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="textArea">
                                                        <Form.Control as="textarea" name='message' rows={3} />
                                                </Form.Group>
                                                <Buton onSendEmail={sendEmail} />
                                        </Form>
                        </div>
                </div>
        )
}

export default Sheets;