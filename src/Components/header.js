import React from "react";
import Logo from "../Assets/Logo.png"
import '../Components-Style/header.scss'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';

function Header() {
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
                  <Nav.Link as={Link} to="/Categrorys" className="nav__list ">Bâtiment</Nav.Link>
                  <Nav.Link as={Link} to="/Categrorys" className="nav__list ">Services</Nav.Link>
                  <Nav.Link as={Link} to="/Categrorys" className="nav__list">Fabrication</Nav.Link>
                  <Nav.Link as={Link} to="/Categrorys" className="nav__list">Alimentation</Nav.Link>
                </Nav>
                <Form className="search">
                  <Form.Control
                    type="search"
                    placeholder="Recherche"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success" className="bouton">Recherche</Button>
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