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
                                                        <a href='/'>101 cours Charlemagne<br/>
                                                        CS 20033<br/>
                                                        69269 LYON CEDEX 02<br/>
                                                        France</a>
                                                </address>
                                        </div>
                                        <div className='location__number'>
                                                <FontAwesomeIcon icon={faPhone} className='footer__icon' />
                                                <a href="tel:0426734000">+33 (0)4 26 73 40 00</a>
                                        </div>
                                </div>
                        </div>
                        <div className='footer__separateur'>
                                <hr/>
                        </div>
                        <div className='mention'>
                                <Nav.Link as={Link} to="/Categrorys" className="footer__mention">Mentions légales</Nav.Link>
                                <Nav.Link as={Link} to="/Categrorys" className="footer__mention">Données personnelles</Nav.Link>
                                <Nav.Link as={Link} to="/Categrorys" className="footer__mention">Accessibilité</Nav.Link>
                                <Nav.Link as={Link} to="/Categrorys" className="footer__mention">Alimentation</Nav.Link>
                        </div>
                </footer>
        )
}

export default Footer;