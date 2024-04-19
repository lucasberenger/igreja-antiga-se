import React from 'react'
import './ChurchHistory.modules.css'

import domPedro2 from '../../assets/coroacaoDomPedro2.jpg'
import domPedro1 from '../../assets/coroacaoDomPedro.jpg'

import ScrollAnimation from '../ScrollAnimation/ScrollAnimation'
import '../../components/ScrollAnimation/ScrollAnimation.modules.css'

const ChurchHistory = () => {
  return (
    <>
    <ScrollAnimation/>
        <div className="history-container">
            <div className="history-title">
                <h1>A Igreja</h1>
                <h4>A história da Igreja de Nossa Senhora do Carmo da Antiga Sé se confunde com a história do Brasil.</h4>
                <img src={domPedro2} alt="Coroação de Dom Pedro I" />
            </div>

            <div className="history-content">

                <div className="history-content_text hidden">
                    <p>A Antiga Sé foi o palco de alguns dos mais importantes momentos dessa história, como a coroação de Dom Pedro I e Dom Pedro II, além de cenário dos casamentos reais.
                    <span className="spant-text">A Igreja nasceu como uma pequena ermida dedicada à Nossa Senhora do Ó</span>, construída poucos anos da ocupação portuguesa. As escavações realizadas durante a reforma feita em 2008 revelaram vestígios de mangue, o que indica que provavelmente ela foi construída muito próxima da areia e voltada para o mar. Ou melhor, como mandava a tradição na época, voltada para Portugal.</p>

                    <p>Quando a ordem carmelita chegou ao Brasil, por volta de 1590, ocuparam as instalações dos beneditinos, entre elas, a <span className="span-text">ermida, que foi convertida em Capela da Ordem do Carmo.</span> <br />
                    Em 1619, os frades iniciaram a construção de um convento, ao lado da capela e uniram os dois edifícios por de uma torre com portaria, posteriormente demolida para esticar a Rua Sete de Setembro <span className="span-text">(a torre agora existente é do século XX, realizada pelo Cardeal Arcoverde).</span></p>
                </div>

                <div className='history-content_image hidden'>
                    <img src={domPedro1} alt="Coroação Dom Pedro I" />
                    <p>A Coroação de D. Pedro I por Jean-Baptiste Debret.</p>
                </div>
            </div>

            </div>

                <div className="history-content_center-image">
                    <img src={domPedro2} alt="Coroação Dom Pedro II" />
                    <p>Coroação de D. Pedro II por François-René Moreaux</p>
                </div>

                <div className="history-container">
                    <div className='history-content_text hidden'>
                    <p>Em 1619, os frades iniciaram a construção de um convento, ao lado da capela e uniram os dois edifícios por de uma torre com portaria, posteriormente demolida para esticar a Rua Sete de Setembro (a torre agora existente é do século XX, realizada pelo Cardeal Arcoverde).</p>
                    <p>O convento, de dois andares e 13 janelas cada, voltado para a Praça XV de Novembro seria ocupado mais tarde, pela Rainha D. Maria. <span className="span-text">Anos depois, a capela, que estava em estado precário desabou</span> e por volta de 1761, foi construído um novo templo. O templo atual, da lavra de Mestre Manuel Alves Setúbal, com o nártex já voltado para o mar (a antiga capela, porém, era voltada para o convento).</p>
                    <p>O Mestre Inácio Ferreira Pinto realizou a <span className="span-text">belíssima talha dourada em estilo rococó.</span> Quanto ao exterior, apenas o primeiro andar da fachada, com os três portais em estilo pombalino lisboeta, é ainda original. <span className="span-text">Foi essa igreja que, em 1808, D. João VI transformou em Capela Real</span>, quando chegou ao Brasil. A família real foi instalada no então Palácio dos Vice-Reis, que hoje é o Paço Imperial, e que fica na Praça XV. </p>
                    
                    <p>Até 1976, quando foi inaugurada a Catedral Metropolitana, a Antiga Sé foi a igreja onde aconteceram algumas das cerimônias mais importantes da história do Brasil. Depois da morte de Dona Maria I, em 1816, a igreja ganhou novo sino e nova torre sineira para a aclamação de D. João VI como rei, em 20 de março do mesmo ano. Mais tarde, em 10 de dezembro de 1822, <span className="span-text">com a coroação de D. Pedro I como imperador e com o Brasil já independente de Portugal, o tempo passa a ser Capela Imperial.</span> </p>
                    <p>Mais tarde, também vai ser a igreja que acontece <span className="span-text">a coroação de D. Pedro II, além de todos os casamentos reais,</span> como o da princesa Isabel com Louis Phillippe Gaston d’Orléans, o Conde D’Eu, em 15 de outubro de 1864.</p>

                    <p>Com a proclamação da república, a igreja é remodelada pelo Cardeal D. Joaquim Arcoverde e <span className="span-text">é inaugurada como Catedral Metropolitana em 1º de maio de 1900.</span></p>
                    </div>
    
                </div>
    </>
  )
}

export default ChurchHistory