import React from 'react'
import './Devotion.modules.css'

import HorizontalLine from '../HorizontalLine/HorizontalLine'

import nossaSenhora from '../../assets/PainelNossaSenhora.jpg'
import topoIgreja from '../../assets/topo2.jpg'
import tetoIgreja from '../../assets/topoIgreja.png'
import escapulario from '../../assets/escapulario.png'

import { TbCross } from "react-icons/tb";
import { PiHandsPraying } from "react-icons/pi";
import { IoSkullOutline } from "react-icons/io5";

const Devotion = () => {
  return (
    <>
    <div className="devotion-container">
            <div className="devotion-title">
                <h1>Devoções</h1>
                <h4>Devoção à Nossa Senhora do Carmo </h4>
                <img src={nossaSenhora} alt="Virgem do Carmo"/>
            </div>
     </div>

     <div className="devotion-content">

                <div className="devotion-content_text">
                    <p>No dia 16 de julho, celebra-se na Igreja Católica, a memória de Nossa Senhora do Carmo, <span className="span-text">um título da  Virgem Maria que remonta ao século XIII,</span> quando, no monte Carmelo, Palestina, começou a formar-se um grupo de eremitas. Estes, querendo imitar o exemplo do profeta Elias, reuniram-se ao redor de uma fonte chamada "fonte de Elias", e iniciaram um estilo de vida que, mais tarde, se estenderia ao mundo todo. <span className="span-text">Devido ao lugar onde nasceu este grupo de ex-cruzados e eremitas, foi chamado de "carmelitas"</span>. A história nos assegura que os eremitas construíram também uma pequena capela dedicada à Nossa Senhora que, mais tarde, e pela mesma circunstância de lugar, seria chamada de "Nossa Senhora do Carmo" ou " Nossa Senhora do Carmelo". Os carmelitas viram-se obrigados a emigrar para a Europa, para continuar a própria vida religiosa e lutar por seu espaço entre as várias ordens mendicantes. <span className="span-text">O título de Nossa Senhora do Carmo está unido ao "símbolo do escapulário".</span></p>
                </div>

                <div className='devotion-content_image'>
                    <img src={topoIgreja} alt="Topo Igreja Nossa Senhora do Carmo da Antiga Sé" />
                    <p>Nossa Senhora do Carmo</p>
                </div>
            </div>

            <HorizontalLine />

            <div className="history-content_center-image">
                <img src={nossaSenhora} alt="Coroação Dom Pedro II" />
                <p>Painel de Nossa Senhora do Carmo</p>
            </div>

            <div className="history-container">
                <div className='history-content_text'>
                <p>A presença de Maria com o nome de Nossa Senhora do Carmo foi se espalhando por toda a Europa, e esta devoção foi levada para a América Latina, na primeira hora da evangelização. <span className="span-text">É difícil encontrar uma diocese latino-americana que não tenha, pelo menos, uma igreja dedicada a Nossa Senhora do Carmo.</span> Não somente são igrejas matrizes ou catedrais dedicadas a Maria, sob o título de Nossa Senhora do Carmo, mas também lugarejos, capelas, oratórios etc. Isso prova como esta devoção saiu dos âmbitos restritos dos conventos carmelitanos e se tornou propriedade do povo e da Igreja Universal, como diz o Papa João Paulo II, em sua carta dirigida aos Superiores Gerais do <span className="span-text">"Carmelo da Antiga Observância e do Carmelo Descalço".</span> <br />Esta devoção, enraizada no coração do povo, está sendo resgatada, e os devotos de Nossa Senhora do Carmo aumentam cada vez mais.</p>
                <br />
                <h4>16 de Julho de Nossa Senhora do Carmo</h4>
                <br />
                <p>A festa da Padroeira da Ordem Carmelita foi, inicialmente, a da Assunção da Bem-Aventurada Virgem Maria, a 15 de agosto. Entretanto, <span className="span-text">entre 1376 e 1386, surgiu o costume de celebrar uma festa especial em honra de Nossa Senhora,</span> para comemorar a aprovação da regra pelo Papa Honório III, em 1226. Esse costume parece ter-se originado na Inglaterra. E a observância da <span className="span-text">festa foi fixada para o dia 16 de julho,</span> que é também a data em que, segundo a tradição carmelita, Nossa  Senhora apareceu a São Simão Stock e lhe entregou o escapulário.</p>
                <p>No início do século XVII, ela se transformou em definitivo na <span className="span-text">“festa do escapulário”, e logo começou a ser celebrada também fora da Ordem</span> e, em 1726, espalhou-se por toda a Igreja do Ocidente, por obra do Papa Bento XIII. No próprio da missa, o dia não se faz menção do escapulário ou da visão que teve São Simão; porém, ambos os fatos são mencionados nas leituras do segundo noturno das Matinas. E <span className="span-text">o escapulário de Nossa Senhora é mencionado no prefácio especial</span> usado pelos carmelitas, nesta festa.</p>
                <p>A ordem dos carmelitas, uma das mais antigas na história da Igreja, embora considere o profeta Elias como o seu patriarca modelo, não tem um verdadeiro fundador, mas tem um grande amor: o culto a Maria, honrada como a Bem-Aventurada Virgem do Carmo. <span className="span-text">“O Carmo – disse o cardeal Piazza, carmelita – existe para Maria e Maria é tudo para o Carmelo, na sua origem e na sua História, na sua vida de lutas e de triunfos, na sua vida interior e espiritual”.</span> Elias e Maria estão unidos numa narração que tem sabor de lenda. Refere o livro das instituições dos primeiros monges: Em lembrança da visão que mostrou ao profeta a vinda desta Virgem sob a figura de uma pequena nuvem que saia da terra e se dirigia para o Carmelo (cf. 1Rs 18,20-45), os monges, no ano 93 da Encarnação do Filho de Deus, destruíram sua antiga casa e construíram uma capela sobre o monte Carmelo, na Palestina, perto da fonte de Elias em <span className="span-text">honra desta primeira Virgem voltada a Deus.</span></p>
                <p>Expulsos pelos sarracenos no século XII, os monges que haviam entretanto recebido do patriarca de Jerusalém, santo Alberto, uma regra aprovada em 1226 pelo Papa Honório III, se voltaram ao Ocidente, e aí na Europa fundaram vários mosteiros, superando várias dificuldades, nas quais, porém, puderam experimentar a proteção da Virgem. Um episódio em particular sensibilizou os devotos:</p>
                <br />
                <p><span className="span-text">“Os irmãos suplicavam humildemente a Maria que os livrasse das insídias infernais. A um deles, Simão Stock, enquanto assim rezava, a Mãe de Deus apareceu acompanhada de uma multidão de anjos, segurando nas mãos o escapulário da ordem e lhe disse: Eis o privilégio que dou a ti e a todos os filhos do Carmelo: todo o que for revestido deste hábito será salvo”.</span></p>
                <br />
                <p>Os críticos consideram espúria, isto é, não autêntica, a bula de João XXIII em que se fala deste privilégio sabatino de ficar livres do inferno e do purgatório no primeiro sábado após a morte, mas muitos papas têm falado disso em sentido positivo. Numa bula de 11 de fevereiro de 1950, Pio XII convidava a <span className="span-text">“colocar em primeiro lugar, entre as devoções marianas, o escapulário que está ao alcance de todos”:</span> entendido como veste Mariana, esse é de fato um ótimo símbolo da proteção da Mãe celeste; enquanto sacramental, extrai o seu valor das orações da Igreja e da confiança e amor daqueles que o usam.</p>
                </div>
            </div>
            <div className="history-content_center-image">
                <img src={tetoIgreja} alt="Coroação Dom Pedro II" />
                <p>Painel de Nossa Senhora do Carmo</p>
            </div>
            <HorizontalLine />

            <div className="devotion-cards_container">
                <h4>Escapulário de Nossa Senhora do Carmo</h4>
                    <div className="devotion-cards_box">
                        <div className="devotion-card">
                        <TbCross />
                            <p>Usar o escapulário do Carmo, imposto e abençoado devidamente pelo sacerdote</p>
                        </div>
                        <div className="devotion-card">
                        <PiHandsPraying />
                            <p>Usá-lo piedosamente, ou seja, esforçando-se por cumprir os deveres cristãos</p>
                        </div>
                        <div className="devotion-card">
                            <IoSkullOutline />
                            <p>Levá-lo posto na hora da morte.</p>
                        </div>
                    </div>
                </div>

            <div className="devotion-content">
                <div className='devotion-content_text'>            
                <p>Uma das devoções marianas mais difundidas é o escapulário do Carmo. Assim como a água benta, o terço, as medalhas e as estampas bentas, <span className="span-text">o escapulário do Carmo é um sacramental.</span></p>
                <p>A palavra sacramental assemelha-se muito à palavra sacramento, e com razão, pois sacramental significa <span className="span-text">“algo semelhante a um sacramento”,</span> embora haja uma grande diferença entre um e outro. Um sacramento é um sinal externo instituído por Jesus Cristo para comunicar a graças às nossas almas, Um sacramental é também um sinal externo, mas os sacramentais foram instituídos pela Igreja e não trazem a graça por si mesmos, antes nos preparam para a graças, despertando em nós sentimentos de fé e de amor; e, além disso, tem o grande valor de uma intercessão da Igreja, diante de Deus, para que Ele nos conceda a sua graça. Qualquer <span className="span-text">graça que possamos obter pelo uso dos sacramentais depende do poder da oração da Igreja e das nossas disposições,</span> conforme podemos observar no Catecismo da Igreja Católica §1670.</p>
                <p>Portanto, o escapulário não dispensa os Sacramentos, que são os meios instituídos por Nosso Senhor como via normal para nos santificar, nem dispensa da prática das virtudes. Não leva automaticamente para o Céu as almas em pecado mortal, mas <span className="span-text">ajuda a buscar a conversão da alma, a receber bem os Sacramentos e a perseverar no bem.</span> Ajuda aquele que tiver um mínimo de boa vontade e se arrependa, a sair do estado de pecado mortal e alcançar a graça da perseverança final.</p>

                <p><span className="span-text">"O costume de usar o escapulário data da Idade Média. Naquela época, era frequente permitir-se aos leigos ingressarem nas ordens religiosas como oblatos ou membros associados"</span></p>

                </div>
                <div className='devotion-content_image'>
                    <img src={escapulario} alt="Coroação Dom Pedro I" />
                    <p>
                        Escapulário de Nossa Senhora do Carmo
                    </p>
                </div>
            </div>

            <div className="history-container">
                <div className="history-content_text">
                    <p>O costume de usar o escapulário data da Idade Média. Naquela época, era frequente permitir-se aos leigos ingressarem nas ordens religiosas como oblatos ou membros associados. Esses oblatos participavam das orações e boas obras dos monges, e era-lhes permitido usar o escapulário monástico. <span className="span-text">O escapulário era então uma longa peça de pano igual à que se enfia pela cabeça do monge,</span> cobrindo-lhe a frente e as costas, sobre a túnica. Para ficarem mais práticos, os escapulários usados pelos membros leigos das ordens terceiras começaram a diminuir de tamanho, até chegarem às pequenas dimensões dos escapulários de hoje.​</p>
                    <p>Nos nossos dias, <span className="span-text">há um total de dezoito tipos de escapulários difundidos entre os católicos,</span> cada um originado numa ordem religiosa diferente. Mas o mais usado é o escapulário marrom da ordem Carmelita, cuja especial padroeira é a Virgem do Carmo. <span className="span-text">A popularidade do escapulário marrom é devida, em parte, às graças específicas que estão associadas pela própria Virgem Maria</span> nas suas aparições a São Simão Stock e ao Papa João XII: a garantia de todo aquele que o usar devotamente não morrerá em pecado mortal, e o privilégio sabatino.</p>
                    <p>No entanto, é preciso entender corretamente o conteúdo dessa promessa feita pela Virgem: a perseverança final — isto é, a salvação — para quem morrer usando o escapulário. A graça que Nossa Senhora concede aos que <span className="span-text">usam o escapulário e morrem com ele é a de se arrependerem de todos os pecados</span> cometidos em vida, já que é uma verdade de fé que só se pode salvar quem estiver em estado de graça na hora da morte.</p>
                    <br />
                </div>
            </div>

            <HorizontalLine/>
    </>
  )
}

export default Devotion