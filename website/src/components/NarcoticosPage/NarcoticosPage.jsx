import React from 'react'

import './NarcoticosPage.modules.css'

import narcoticoImage from '../../assets/narcoticosTitleImage.png'

import ScrollAnimation from '../../components/ScrollAnimation/ScrollAnimation'

import Formulary from '../../components/Form/Formulary'


import { FaPeopleRoof } from "react-icons/fa6";
import { FaHandsHelping } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";

const NarcoticosPage = () => {
  return (
    <>
    <ScrollAnimation />
        <div className="narcoticos-title">
                <h1>Narcóticos Anônimos</h1>
                <img src={narcoticoImage} alt="Narcóticos Anônimos" />
        </div>

        <div className='narcoticos-boxes_container'>
                <div className="narcoticos_box hidden">
                        <div className="narcoticos-icon">
                         <FaHandsHelping />
                        </div>
                        <p>Qualquer pessoa pode se juntar a nós!</p>
                </div>
                <div className="narcoticos_box hidden">
                        <div className="narcoticos-icon">
                         <FaPeopleRoof />
                        </div>
                        <p>As reuniões são realizadas de
                        segunda a sexta, das 12h às 14h
                        (entrada pela Rua Primeiro de Março)</p>
                </div>
                <div className="narcoticos_box hidden">
                        <div className="narcoticos-icon">
                         <FaHeart />
                        </div>
                        <p>Sem fins lucrativos</p>
                </div>
            </div>

        <div className="narcoticos-container">
            <div className="narcoticos-text hidden">
            <p>Narcóticos Anônimos ou NA é uma Irmandade ou Sociedade sem fins lucrativos, de <span className="span-text">homens e mulheres para quem as drogas se tornaram um problema maior.</span> Somos adictos em recuperação, que nos reunimos regularmente para ajudarmos uns aos outros a nos mantermos limpos.</p>
            <p>Este é um programa de total abstinência de todas as drogas e há somente um requisito para ser membro: <span className="span-text">o desejo de parar de usar.</span> Sugerimos que você mantenha a mente aberta e dê a si mesmo uma oportunidade. Nosso programa é um conjunto de princípios escritos de uma maneira tão simples que podemos segui-los nas nossas vidas diárias. <span className="span-text">O mais importante é que eles funcionam.</span></p>
            <p>NA não tem subterfúgios, não somos filiados a nenhuma outra organização, não temos matrícula nem taxas, não há compromissos escritos, nem promessas a fazer à ninguém. <span className="span-text">Não estamos ligados a nenhum grupo político, religioso ou policial</span> e, em nenhum momento, estamos sob vigilância.</p>
            <p>O recém–chegado é a pessoa mais importante em qualquer reunião, porque só dando podemos manter o que temos.
            <span className="span-text">Qualquer pessoa pode juntar-se a nós,</span> independentemente da idade, situação financeira, raça, orientação sexual, crença, religião ou falta de religião.</p>
            <p>
            Não estamos interessados no que ou quanto você usou, quais eram os seus contatos, no que fez no passado, no quanto você tem ou deixa de ter; só <span className="span-text">nos interessa o que você quer fazer a respeito do seu problema</span> e como podemos ajudar.
            </p>
            <p>Aprendemos com nossa experiência coletiva que aqueles que continuam voltando regularmente às nossas reuniões mantêm-se limpos.</p>
            
            </div>
        </div>

        <Formulary/>
    </>
  )
}

export default NarcoticosPage