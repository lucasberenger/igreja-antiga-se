import React from 'react'
import './Marriage.modules.css'

import Button from 'react-bootstrap/Button';

import { Swiper, SwiperSlide } from 'swiper/react'

import casamentoFoto from '../../assets/casamentoFoto.jpg'
import casamentoReal from '../../assets/casamentoReal.jpg'
import casamentoFoto2 from '../../assets/casamentoFoto2.jpg'
import casamentoFoto4 from '../../assets/casamentoFoto4.jpg'
import casamentoFoto5 from '../../assets/casamentoFoto5.jpg'
import casamentoFlores from '../../assets/casamentoFlores.jpg'

const images = [
  { id: '1', image: casamentoFoto},
  { id: '2', image: casamentoReal},
  { id: '3', image: casamentoFoto2},
  { id: '4', image: casamentoFoto4},
  { id: '5', image: casamentoFoto5},
  { id: '6', image: casamentoFlores},
]

const Marriage = () => {
  return (
    <div className='marriage-container'>

      <div className="marriage-container_text">

        <div className="marriage-container_title">
          <h1>Agenda de Casamentos está aberta! </h1>
          <p>"Faça como a Princesa Isabel: escolha a Antiga Sé para o seu casamento real. Agende sua data agora mesmo!"</p>
        </div>

        <div className="marriage-container_button">
        <Button variant="outline-primary" className='marriage_button'>Agende o seu!</Button>
        </div>
        
      </div>
    
      <div className="marriage-container_slides">
      
      <Swiper 
      slidesPerView={3}
      pagination= {{ clickable: true }}
      navigation
      autoplay={{ delay: 4000 }}
      className='marriage-slider'
      >
        {images.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.image} 
            alt="Slider" 
            className='marriage-slide_item'
            />
          </SwiperSlide>
        ))}
      </Swiper>
      
      </div>       
    </div>
  )
}

export default Marriage