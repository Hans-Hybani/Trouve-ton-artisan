import '../Components-Style/footer.scss'
import Logo from "../Assets/Logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

// import {faLocationDot} from '@fortawesome/free-solid-svg-icons'
// import { faSearchengin } from '@fortawesome/free-brands-svg-icons';
// import { faFileCode} from '@fortawesome/free-solid-svg-icons';


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
                                <a href='/'>Mentions légales</a>
                                <a href='/'>Données personnelles</a>
                                <a href='/'>Accessibilité</a>
                                <a href='/'>Gestion des cookies</a>
                        </div>
                </footer>
        )
}

export default Footer;