import React from 'react'
import './Footer.modules.css'
import fb from '../../assets/faceimg.png'
import insta from '../../assets/instaimg.png'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import Maps from '../Maps/Maps';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="sb_footer section_padding">
            <div className="sb_footer-links">
                <div className="sb_footer-links-div">
                    <h4>Como chegar?</h4>
                    <Maps />
                </div>
                <div className="sb_footer-links_div">
                    <h4>Igreja</h4>
                    <a href="#">
                        <p>Casamentos</p>
                    </a>
                    <a href="#">
                        <p>Vida Pastoral</p>
                    </a>
                    <a href="#">
                        <p>Galeria</p>
                    </a>
                    <a href="#">
                        <p>Ações Sociais e Culturais</p>
                    </a>
                </div>
                <div className="sb_footer-links_div">
                    <h4>Institucional</h4>
                    <a href="#">
                        <p>Igreja</p>
                    </a>
                    <a href="#">
                        <p>Devoções</p>
                    </a>
                    <a href="#">
                        <p>Capelas</p>
                    </a>
                    <a href="#">
                        <p>Narcóticos Anônimos</p>
                    </a>
                    <a href="#">
                        <p>Tour Virtual</p>
                    </a>
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