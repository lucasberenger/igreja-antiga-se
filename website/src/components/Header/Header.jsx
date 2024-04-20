import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

// router
import { Link } from 'react-router-dom'

import Donation from '../Donation/Donation';

// logo
import logo from '../../assets/logo.png'

// header style
import './Header.modules.css'

const Header = () => {
  return (
      <Navbar collapseOnSelect expand="lg" className="navbar_body">
        <Container>
        <Navbar.Brand as={Link} to='/home' className='navbar_logo'>
          <img
            alt="logo"
            src= {logo}
            className="d-inline-block align-center"
          />{''}
          <div className="logo_text">
            <h2>Antiga Sé</h2>
          </div>
        </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/casamentos">Casamentos</Nav.Link>
              <Nav.Link as={Link} to="/vida-pastoral">Vida Pastoral</Nav.Link>
              <Nav.Link as={Link} to='/galeria'>Galeria</Nav.Link>
              <Nav.Link as={Link} to='/acao-social'>Ações Sociais e Culturais</Nav.Link>
              <NavDropdown title="Institucional" id="collapsible-nav-dropdown">
                <NavDropdown.Item as={Link} to='/igreja'>Igreja</NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/devocoes'>
                Devoções
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/capelas">Capelas</NavDropdown.Item>
                <NavDropdown.Item as={Link}  to="/narcoticos">Narcóticos Anônimos</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="https://matterport.com/discover/space/fmSVBM1HoW6" target='blank'>
                  Tour Virtual
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to='/contato'>
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