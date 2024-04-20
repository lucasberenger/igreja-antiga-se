import React from 'react'
import './Footer.modules.css'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

import { Link, ScrollRestoration  } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="sb_footer section_padding">
            <div className="sb_footer-links">
                <div className="sb_footer-links_div">
                    <h3>Antiga Sé</h3>
                    <h5> (21) 98985-5508 <br />
                    Rua Sete de Setembro, 14 - Centro | Rio de Janeiro - RJ</h5>
                </div>
                <div className="sb_footer-links_div">
                <ScrollRestoration />
                    <h4>Igreja</h4>
                    <a>
                        <Link to='/casamentos'>
                            <p>Casamentos</p>
                        </Link>
                    </a>
                    <a href="#">
                        <p>Galeria</p>
                    </a>
                    <Link to='/acao-social'>
                            <p>Ações Sociais e Culturais</p>
                        </Link>
                    <a href="https://matterport.com/discover/space/fmSVBM1HoW6" target='blank'>
                        <p>Tour Virtual</p>
                    </a>
                </div>
                <div className="sb_footer-links_div">
                    <h4>Institucional</h4>
                    <Link to='/Igreja'>
                            <p>A Igreja</p>
                        </Link>
                    <Link to="/devocoes">
                        <p>Devoções</p>
                    </Link>
                    <Link to="/capelas">
                        <p>Capelas</p>
                    </Link>
                    <Link to="/narcoticos">
                        <p>Narcóticos Anônimos</p>
                    </Link>
                </div>
                <div className="sb_footer-links_div">
                    <h4>Redes Sociais</h4>
                    <div className="socialmedia">
                        <p><FaFacebook /></p>
                        <p><FaInstagram /></p>
                    </div>
                </div>
            </div>

            <hr></hr>

            <div className="sb_footer-below">
                <div className="sb_footer-copyright">
                    <p>
                         Paróquia Nossa Senhora do Carmo da Antiga Sé – {new Date().getFullYear()} © Todos os direitos reservados
                    </p>
                </div>
                <div className="sb_footer-below-links">
                    <a href="/terms"><div><p>Terms & Conditions</p></div></a>
                    <a href="/terms"><div><p>Privacy</p></div></a>
                    <a href="/security"><div><p>Security</p></div></a>
                    <a href="/cookie"><div><p>Cookie Declaration</p></div></a>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer