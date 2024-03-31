import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

import Donation from '../Donation/Donation';

// logo
import logo from '../../assets/logo.png'

// header style
import './Header.modules.css'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="navbar_body">
          <Container>
          <Navbar.Brand href="#home" className='navbar_logo'>
            <img
              alt="logo"
              src= {logo}
              width="100"
              height="100"
              className="d-inline-block align-center"
            />{''}
            <div className="logo_text">
              <h1>Nossa Senhora do Carmo da</h1>
              <h2><span className="span-logo">Antiga</span> Sé</h2>
            </div>
          </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#features">Casamentos</Nav.Link>
                <Nav.Link href="#pricing">Galeria</Nav.Link>
                <Nav.Link href="#pricing">Ações Sociais e Culturais</Nav.Link>
                <NavDropdown title="Institucional" id="collapsible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Igreja</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                  Devoções
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Capelas</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.5">Narcóticos Anônimos</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.6">
                    Tour Virtual
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
              <Nav.Link eventKey={1} href="#memes">
                  Contato
                </Nav.Link>
                <Nav.Link eventKey={2} className='nav-donation'>
                <Donation />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

export default Header