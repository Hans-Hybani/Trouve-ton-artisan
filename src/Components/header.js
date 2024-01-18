import React ,{useEffect, useState} from "react";
import Logo from "../Assets/Logo.png"
import '../Components-Style/header.scss'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import data from '../data.json'

function Header() {
  const [artisans, setArtisans] = useState([]);
  const [userInput, setUserInput] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setArtisans(data);
  }, []);

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const submit = () => {
    for (let i = 0; i < artisans.length; i++) {
      const parcour = artisans[i];
      const { name, location, category,note } = parcour;

      if (userInput === name || userInput === location || userInput === category ) {
        navigate("/Search", {
          state: {
            selectedArtisan: {
              name,
              location,
              category,
              note
            }
          },
        });
      }
    }
  };

  return (
    <header>
      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} className="nav">
          <Container fluid>
            <Navbar.Brand as={Link} to="/"><img src={Logo} alt="Logo du site"/></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton >
                <Nav.Link as={Link} to="/" className="nav__list">TROUVE TON ARTISAN</Nav.Link>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link as={Link} to="/Batiment" className="nav__list ">Bâtiment</Nav.Link>
                  <Nav.Link as={Link} to="/Service" className="nav__list ">Services</Nav.Link>
                  <Nav.Link as={Link} to="/Fabrication" className="nav__list">Fabrication</Nav.Link>
                  <Nav.Link as={Link} to="/Alimentation" className="nav__list">Alimentation</Nav.Link>
                </Nav>
                <Form className="search">
                  <Form.Control
                    type="search"
                    placeholder="Recherche"
                    className="me-2"
                    aria-label="Search"
                    id="userInput"
                    onChange={handleChange}
                    value={userInput}
                  />
                    <Button variant="outline-success" className="bouton" type="button" onClick={submit}>
                      Recherche
                    </Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </header>
  );
}

export default Header;
