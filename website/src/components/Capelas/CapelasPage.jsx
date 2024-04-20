import React from 'react'
import './CapelasPage.modules.css'

import HorizontalLine from '../../components/HorizontalLine/HorizontalLine'

import { FaArrowRightLong } from "react-icons/fa6";

// images
import capelaSaoJose from '../../assets/capelaSaoJose.png'
import capelaSantaLuzia from '../../assets/capelaSantaLuzia.png'
import capelaBonsucesso from '../../assets/capelaBonsucesso.png'
import capelaParto from '../../assets/capelaParto.png'

const CapelasPage = () => {
  return (
    <>
        <div className="capelas-title">
            <h1>Capelas</h1>
        </div>

        <div className="capelas-container">
            <div className="capela-item">
                <img src={capelaSaoJose} alt="capela São José" />
                <div className="capela-item_text">
                    <h4>Capela São José</h4>
                    <p>O templo dedicado a São José teve sua origem em uma pequena ermida construída em 1608 pelo ermitão Egas Muniz, a capela serviu, a partir de 1659, como Matriz e Sé do Rio de Janeiro e foi submetida a diversas reconstruções. No século seguinte, a igreja voltou a sofrer novas obras entre 1725 e 1729. Em 1751 é a Matriz da freguesia de São José. Em 1807, a Irmandade de São José deu início às obras da atual Igreja sob a responsabilidade do Mestre Félix José de Souza, substituído, em 1815, pelo arquiteto do Paço, João da Silva Muniz, sendo inaugurada em 1842.</p>
                    <a href="https://www.facebook.com/pages/Igreja-De-S%C3%A3o-Jos%C3%A9-Centro-Do-RJ/1299550320137302" target='blank'>Ler mais <FaArrowRightLong/></a>
                </div>
            </div>

            <div className="capela-item">
                <img src={capelaSantaLuzia} alt="capela Santa Luzia" />
                <div className="capela-item_text">
                    <h4>Capela Santa Luzia</h4>
                    <p>
                    O culto a Santa Luzia teve início em nossa cidade em uma ermida localizada à beira-mar, no sopé do Morro Cara de Cão, neste local era cultuada uma imagem barroca de Santa Luzia trazida por Estácio de Sá para o Brasil. Com a transferência do núcleo urbano para o Morro do Castelo em 1565, a devoção Santa Luzia passou a se realizar na ermida de Nossa Senhora dos Navegantes ereta por pescadores junto ao sopé do Morro do Castelo.</p>
                    <a href="https://www.facebook.com/pages/Igreja-De-Santa-Luzia/105432676203401" target='blank'>Ler mais <FaArrowRightLong/></a>
                </div>
            </div>

            <div className="capela-item">
                <img src={capelaBonsucesso} alt="capela Nossa Senhora do Bonsucesso" />
                <div className="capela-item_text">
                    <h4>Capela Nossa Senhora do Bonsucesso</h4>
                    <p>A cidade de São Sebastião do Rio de Janeiro, fundada no ano de 1565 entre o Morro Cara de Cão e o Pão de Açúcar, foi em 1567 transferida para o Morro do Castelo, demolido no ano de 1922. A igreja de Nossa Senhora da Misericórdia foi construída no século XVII ao sopé do Morro, no mesmo local onde hoje está situada.</p>
                    <a href="https://pt.foursquare.com/v/igreja-nossa-senhora-do-bonsucesso/4cc356e4306e224b236e966c" target='blank'>Ler mais <FaArrowRightLong/></a>
                </div>
            </div>

            <div className="capela-item">
                <img src={capelaParto} alt="capela Nossa Senhora do Parto" />
                <div className="capela-item_text">
                    <h4>Capela Nossa Senhora do Parto</h4>
                    <p>A igreja de Nossa Senhora do Parto do Rio de Janeiro teve origem na compra de terras, a 16 de janeiro de 1649, pelo carpinteiro João Fernandes, pardo, natural da Ilha da Madeira, para levantar capela consagrada a Nossa Senhora.</p>
                    <a href="https://www.facebook.com/Igrejanossasenhoradopartorj/" target='blank'>Ler mais <FaArrowRightLong/></a>
                </div>
            </div>
        </div>

        
    </>
  )
}

export default CapelasPage