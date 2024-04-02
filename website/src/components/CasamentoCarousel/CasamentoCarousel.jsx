import React from 'react'

import './CasamentoCarousel.modules.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import { useState, useEffect } from 'react'

import { FaClock } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa6";
import { IoPeopleCircleSharp } from "react-icons/io5";
import { MdLibraryMusic } from "react-icons/md";
import { IoFlower } from "react-icons/io5";


// pictures
import casamentoFoto from '../../assets/casamentoFoto.jpg'
import casamentoReal from '../../assets/casamentoReal.jpg'
import casamentoFoto2 from '../../assets/casamentoFoto2.jpg'
import casamentoFoto4 from '../../assets/casamentoFoto4.jpg'
import casamentoFoto5 from '../../assets/casamentoFoto5.jpg'
import casamentoFlores from '../../assets/casamentoFlores.jpg'
import casamentoIgreja from '../../assets/casamentoIgreja.jpg'
import casamentoIgreja2 from '../../assets/casamentoIgreja2.jpg'
import CasamentoPrincesa from '../../assets/casamentoPrincesa.jpg'
import CasamentoPrincesa2 from '../../assets/casamentoPrincesa2.jpg'
import IgrejaDecorada from '../../assets/IgrejaDecorada.jpg'
// -----------


const CasamentoCarousel = () => {

  const [slidePerView, setSlidePerView] = useState(2)

  const images = [
    { id: '1', image: casamentoFoto},
    { id: '2', image: casamentoReal},
    { id: '3', image: casamentoFoto2},
    { id: '4', image: casamentoFoto4},
    { id: '5', image: casamentoFoto5},
    { id: '6', image: casamentoFlores},
    { id: '7', image: casamentoIgreja},
    { id: '8', image: casamentoIgreja2},
    { id: '9', image: CasamentoPrincesa},
    { id: '10', image: CasamentoPrincesa2},
    { id: '10', image: IgrejaDecorada},
  ]

  useEffect(() => {
    function handleResize() {
      if(window.innerWidth < 900) {
        setSlidePerView(1)
      } else {
        setSlidePerView(3)
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return() => {
      window.removeEventListener('resize', handleResize)
    }

  }, [])
  
  return ( 

    <>

      <div className="marriage_container">

        <div className="marriage-title_container">
            
                <div className="marriage-title_text">
                    <h1>A agenda de 2023 a 2025 está aberta.</h1>
                    <p>O agendamento só é feito pessoalmente na secretaria da Igreja, mas você já pode conferir algumas informações.</p>
                </div>

            <img src={casamentoIgreja2} alt="Altar Antiga Sé"/>
            
        </div>

        <div className="marriage-information_container">

            <div className="marriage-information_text">
                <div className="information_box">
                    <FaClock />
                    <p>Funcionamento da secretaria: de segunda a sexta, das 08h às 17h, aos sábados de 09h30 às 12h.</p>
                </div>
                <div className="information_box">
                    <FaCalendarCheck />
                    <p>Dias e horários para casamentos: sextas e sábados, podendo ocorrer nos horários de 10h00, 18h00 ou 20h00, mas é possível agendar exclusividade e bloquear os dois horários.</p>
                </div>
                <div className="information_box">
                    <FaCheckCircle/>
                    <p>Confirmação da reserva é feita mediante o pagamento de 50% do valor acertado na secretaria.</p>
                </div>            
                <div className="information_box">
                    <IoPeopleCircleSharp />
                    <p>Capacidade: 250 pessoas sentadas.</p>
                </div>
                <div className="information_box">
                    <IoFlower />
                    <p>O valor inclui: celebrante, tapete, toldo, chuva de pétalas, iluminação especial da igreja, iluminação do chão, sino e abertura da tela com Nossa Senhora do Carmo no ato em que o noivo recebe a noiva no altar.</p>
                </div>
                <div className="information_box">
                    <MdLibraryMusic/>
                    <p>Só são permitidas músicas sacras e eruditas segundo o decreto da Arquidiocese do Rio de Janeiro.</p>
                </div>
            </div>
        </div>


      <Swiper 
      slidesPerView={slidePerView}
      pagination= {{ clickable: true }}
      autoplay={{ delay: 5000 }}
      className='casamento_slider'
      >
        {images.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.image} 
            alt="Slider" 
            className='casamento-slide_item'
            />
          </SwiperSlide>
        ))}
      </Swiper>

        <div className="about-marriage_container">
            <div className="about-marriage_text">
                <h2>Matrimônio Sacramento do Casal Cristão</h2>
                <p>“A aliança matrimonial, pela qual o homem e a mulher constituem entre si uma comunidade de vida toda, <span className="text-span">é ordenada por sua índole natural à prole,</span> e foi elevada, entre os batizados, à dignidade de Sacramento, por Cristo Senhor”</p>
                <h2>O Matrimônio Cristão</h2>
                <p>O casamento é um momento muito importante, o início de uma nova etapa na vida do casal. Para isso <span className="text-span">vocês se preparam muito tempo, para ver se Deus os chamou</span> para viver a dois, até que a morte os separe.
                <br /> <br />
                A celebração religiosa do casamento será vivida por vocês como o ponto alto de sua caminhada. <span className="text-span">Vocês vão administrar um ao outro o sacramento do Matrimônio.</span> Para que a celebração religiosa seja realmente o ponto de partida de uma nova vida, é bom observar o seguinte:
                <br /><br />
                <span className="text-span">Confissão:</span> Procurem confessar-se antes do casamento, para receber a graça do sacramento do Matrimônio.
                <br /><br />
                <span className="text-span">São Paulo diz:</span> “Maridos, amai as vossas mulheres, como Cristo amou a Igreja. É grande este mistério: refiro-me à relação entre Cristo e a sua Igreja” (Ef 5, 25.32).
                <br /><br />
                O Pacto Matrimonial, pelo qual um homem e uma mulher constituem entre si uma íntima comunidade de vida e de amor, foi fundado e dotado de suas leis próprias pelo criador. Por sua natureza é ordenado ao bem dos cônjuges como também à geração e educação dos filhos. Entre os batizados, foi elevado, por Cristo, à dignidade de Sacramento.
                <br /><br />
                O Sacramento do Matrimônio concede aos esposos <span className="text-span">a graça de amarem- se com o mesmo amor com que Cristo amou sua Igreja; a graça do Sacramento leva à perfeição o amor humano dos esposos,</span> consolida sua unidade indissolúvel e os santifica no caminho da vida eterna.
                <br /><br />
                O Matrimônio se baseia no consentimento dos contraentes, isto é, na vontade de doar-se mutuamente e definitivamente para viver uma aliança de amor fiel e fecundo. Como o Matrimônio estabelece os cônjuges num estado público de vida na Igreja, <span className="text-span">convém que sua celebração seja pública no quadro de uma Celebração Litúrgica</span> diante do sacerdote, das testemunhas e da assembleia dos fiéis.
                <br /><br />
                A unidade, a indissolubilidade e a abertura à fecundidade são essenciais ao Matrimônio. O <span className="text-span">lar cristão é o lugar em que os filhos recebem o primeiro anúncio da fé.</span> Por isso, o lar é chamado, com toda a razão, de “Igreja doméstica”, comunidade de amor, de graça e de oração, escola das virtudes humanas e da caridade cristã.</p>
            </div>
        </div>

      </div>       

    </>
    
  )
}

export default CasamentoCarousel