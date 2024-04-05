import React from 'react'

import './Information.modules.css'
import { MdChurch } from "react-icons/md";
import { PiHandsPrayingFill } from "react-icons/pi";
import { GiDiamondRing } from "react-icons/gi";

import HorizontalLine from '../HorizontalLine/HorizontalLine';

const Information = () => {
  return (
    <>

        <div className="information_container">

            <h2>Igreja Nossa Senhora do Carmo <br /> Antiga Sé</h2>
            
            
            <div className="cards_container">
                <div className="cards">
                    <MdChurch />
                    <h4>A Igreja</h4>
                    <p>A história da Igreja de Nossa Senhora do Carmo da Antiga Sé se confunde com a história do Brasil.</p>
                </div>
                <div className="cards">
                    <PiHandsPrayingFill />
                    <h4>Horários de Missa</h4>
                    <p>Segunda a Sexta: 8h</p>
                    <p>Domingo: 11h</p>
                </div>
                <div className="cards">
                    <GiDiamondRing />
                    <h4>Casamentos</h4>
                    <p>Faça como a Princesa Isabel: escolha a Antiga Sé para o seu casamento real. Agende sua data agora mesmo!</p>
                </div>
            </div>
        </div>
        <HorizontalLine />
    </>
   
  )
}

export default Information