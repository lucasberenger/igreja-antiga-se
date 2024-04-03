import React from 'react'

import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react'
import { useState, useEffect } from 'react'

import './Chronology.modules.css'

import image1 from '../../assets/hist/1590.jpg'
import image2 from '../../assets/hist/1619.jpg'
import image3 from '../../assets/hist/1761.jpg'
import image4 from '../../assets/hist/1763.jpg'
import image5 from '../../assets/hist/1785.jpg'
import image6 from '../../assets/hist/1808.jpg'
import image7 from '../../assets/hist/1816.jpg'
import image8 from '../../assets/hist/1817.png'
import image9 from '../../assets/hist/1818.jpg'
import image10 from '../../assets/hist/1819.jpg'
import image11 from '../../assets/hist/1821.png'
import image12 from '../../assets/hist/1822.jpg'
import image13 from '../../assets/hist/1829.png'
import image14 from '../../assets/hist/1831.png'
import image15 from '../../assets/hist/1841.jpg'
import image16 from '../../assets/hist/1843.jpg'
import image17 from '../../assets/hist/1846.png'
import image18 from '../../assets/hist/1864.png'
import image19 from '../../assets/hist/1889.jpg'
import image20 from '../../assets/hist/1903.jpg'
import image21 from '../../assets/hist/1905.jpg'
import image22 from '../../assets/hist/1913.png'
import image23 from '../../assets/hist/1922.jpg'
import image24 from '../../assets/hist/1941.jpg'
import image25 from '../../assets/hist/1976.jpg'
import image26 from '../../assets/hist/2006.jpg'
import image27 from '../../assets/hist/2007.jpg'
import image28 from '../../assets/hist/2008.jpg'

const Chronology = () => {

    const [slidePerView, setSlidePerView] = useState(2)

  const images = [
    { id: '1', image: image1, year:'1590', text:'Os Carmelitas instalam-se na região da Várzea atual Rua Primeiro de Março, e fazem da ermida de Nossa Senhora do Ó sua capela conventual.'},
    { id: '2', image: image2, year:'1619', text:'Iniciada a construção do novo Convento dos Carmelitas, no terreno ao lado da capela, com vista para a atual Praça XV de novembro.'},
    { id: '3', image: image3, year:'1761', text:'Inaugurada a nova igreja do Convento dos Carmelitas, construído sobre as ruínas da primitiva Nossa Senhora do Ó, que havia desabado.'},
    { id: '4', image: image4, year:'1763', text:'O Rio de Janeiro passa a sediar o Vice-Reino do Brasil, com sede administrativa no atual edifício do Paço Imperial.'},
    { id: '5', image: image5, year:'1785', text:'Mestre Inácio Ferreira Pinto inicia a decoração do interior da capela do Convento dos Carmelitas, em estilo rococó.'},
    { id: '6', image: image6, year:'1808', text:'A Família Real desembarca no cais da Praça XV. D. João, eleva a Capela dos Carmelitas, inacabada, a Capela Real e Catedral.'},
    { id: '7', image: image7, year:'1816', text:'Morre a rainha D. Maria I. A missa é realizada na Capela Imperial.'},
    { id: '8', image: image8, year:'1817', text:'D. João ordena a conclusão da decoração interna da Capela Real. As pinturas são de José L. de Carvalho. As ruas são decoradas para a visita de D. Leopoldina.'},
    { id: '9', image: image9, year:'1818', text:'D. João é aclamado Rei, na Capela Real. A torre sineira da Capela Real ganha um novo sino, doado por Dom João VI.'},
    { id: '10', image: image10, year:'1819', text:'A princesa D. Maria da Glória, futura D. Maria II de Portugal, é batizada na Capela Real.'},
    { id: '11', image: image11, year:'1821', text:'A Familia Real e sua Corte embarcam de volta a Portugal. No Brasil, D. Pedro fica como Príncipe Regente.'},
    { id: '12', image: image12, year:'1822', text:'Dom Pedro declara a Independência, inaugurando o Império do Brasil. A Capela Real passa a ser Imperial. Dom Pedro é coroado na Capela Imperial.'},
    { id: '13', image: image13, year:'1829', text:'Dom Pedro I, viúvo, casa-se com D. Amélia, na Capela Imperial.'},
    { id: '14', image: image14, year:'1831', text:'D. Pedro I abdica do trono em favor de seu filho.'},
    { id: '15', image: image15, year:'1841', text:'Dom Pedro II é aclamado Imperador do Brasil, na Capela Imperial.'},
    { id: '16', image: image16, year:'1843', text:'D. Pedro II casa-se com D. Tereza Cristina na Capela Imperial.'},
    { id: '17', image: image17, year:'1846', text:'A Princesa Isabel é batizada na Capela Imperial.'},
    { id: '18', image: image18, year:'1864', text:'A Princesa Isabel e o Conde D’Eu casam-se na Capela Imperial.'},
    { id: '19', image: image19, year:'1889', text:'Com a Proclamação da República, a Capela Imperial passa a ser Catedral Metropolitana.'},
    { id: '20', image: image20, year:'1903', text:'Os resíduos mortais de Pedro Álvares Cabral são transferidos da Igreja NSra da Graça (Santarém - Portugal) para a Igreja Nossa Senhora do Carmo da Antiga Sé.'},
    { id: '21', image: image21, year:'1905', text:'É demolida a primitiva torre sineira da Catedral, como parte do projeto de remodelação comandado pelo Cardeal D. Joaquim Arcoverde, dando novo estilo, eclético.'},
    { id: '22', image: image22, year:'1913', text:'São concluídas as obras da nova torre sineira.'},
    { id: '23', image: image23, year:'1922', text:'Para as comemorações do centenário da Independência do Brasil, a fachada principal recebeu a imagem de São Sebastião, que tem 4.5 metros de altura.'},
    { id: '24', image: image24, year:'1941', text:'A Igreja Nossa Senhora do Carmo é tombada pelo Serviço do Patrimônio Histórico e Artístico Nacional - SPHAN.'},
    { id: '25', image: image25, year:'1976', text:'Com a construção da nova Catedral, na Avenida Chile, a antiga Capela dos Carmelitas passa a Chamar-se Igreja de Nossa Senhora do Carmo da Antiga Sé.'},
    { id: '26', image: image26, year:'2006', text:'Início das atuais obras de restauração da Igreja Nossa Senhora do Carmo da Antiga Sé.'},
    { id: '27', image: image27, year:'2007', text:'Arqueólogos anunciam a possível descoberta de vestígios das construções primitivas do século XVI.'},
    { id: '28', image: image28, year:'2008', text:'Entrega das obras de restauração da igreja, com o início do espetáculo de som e luz, em comemoração aos 200 anos da chegada da Família Real ao Brasil.'},
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

        <div className="crhonology-title">
            <h1>Cronologia Histórica</h1>
            <h4>História, Arqueologia e Restauração</h4>
        </div>

        <Swiper 
        slidesPerView={slidePerView}
        pagination= {{ clickable: true }}
        autoplay={{ delay: 10000 }}
        className='history-slider'
      >
        {images.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.image} 
            alt="Slider" 
            className='history-slide_item'
            />
            <h4>{item.year}</h4>
            <p>{item.text}</p>
          </SwiperSlide>
        ))}
      </Swiper>
        
        </>
      );
    }

export default Chronology