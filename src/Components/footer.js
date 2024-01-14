import '../Components-Style/footer.scss'
import Logo from "../Assets/Logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function Footer(params) {
        const FooterData = (props) => {
                return (
                  <div>
                    <p>{props.Nomville}</p>
                  </div>
                );
        };
                
        return(
                <footer>
                        <div>
                                <img src={Logo} alt="Logo du site"></img>
                        </div>
                        <div className='information__location'>
                                <div className='props__ville'>
                                        <FooterData Nomville="Lyon"/>
                                </div>
                                <div className='localisation'>
                                        <div className='location__adress'>
                                                <FontAwesomeIcon icon={faLocationDot} className='footer__icon'/>
                                                <address>
                                                        <Nav.Link href='https://maps.app.goo.gl/Aqr2yniq5tEvbwYM6' target='_blank' className='adresse'>101 cours Charlemagne<br/>
                                                        CS 20033<br/>
                                                        69269 LYON CEDEX 02<br/>
                                                        France</Nav.Link>
                                                </address>
                                        </div>
                                        <div className='location__number'>
                                                <FontAwesomeIcon icon={faPhone} className='footer__icon' />
                                                <Nav.Link href="tel:+330426734000" target='_blank' className='number'>+33 (0)4 26 73 40 00</Nav.Link>
                                        </div>
                                </div>
                        </div>
                        <div className='footer__separateur'>
                                <hr/>
                        </div>
                        <div className='mention'>
                                <Nav.Link as={Link} to="/MentionLegale" className="footer__mention">Mentions légales</Nav.Link>
                                <Nav.Link as={Link} to="/DonnePersonnelle" className="footer__mention">Données personnelles</Nav.Link>
                                <Nav.Link as={Link} to="/Accessibility" className="footer__mention">Accessibilité</Nav.Link>
                                <Nav.Link as={Link} to="/Cookie" className="footer__mention">Gestion des cookies</Nav.Link>
                        </div>
                </footer>
        )
}

export default Footer;