import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Header.modules.css'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="navbar_body">
          <Container>
            <div className='navbar_logo'>
                <Navbar.Brand href="#home"><h1>Nossa Senhora do Carmo</h1></Navbar.Brand>
                <Navbar.Brand href="#home"><h2>Antiga Sé</h2></Navbar.Brand>
            </div>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#features">Casamentos</Nav.Link>
                <Nav.Link href="#pricing">Vida Pastoral</Nav.Link>
                <Nav.Link href="#pricing">Galeria</Nav.Link>
                <Nav.Link href="#pricing">Ações Sociais e Culturais</Nav.Link>
                <NavDropdown title="Institucional" id="collapsible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Igreja</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Devoções</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.5">Capelas</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.6">
                    Narcóticos Anônimos
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link eventKey={2} href="#memes">
                  Contato
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

export default Header