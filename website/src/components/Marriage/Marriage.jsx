import React from 'react'
import './Marriage.modules.css'

import Button from 'react-bootstrap/Button';

import { Swiper, SwiperSlide } from 'swiper/react'
import { useState, useEffect } from 'react'

// pictures
import casamentoFoto from '../../assets/casamentoFoto.jpg'
import casamentoReal from '../../assets/casamentoReal.jpg'
import casamentoFoto2 from '../../assets/casamentoFoto2.jpg'
import casamentoFoto4 from '../../assets/casamentoFoto4.jpg'
import casamentoFoto5 from '../../assets/casamentoFoto5.jpg'
import casamentoFlores from '../../assets/casamentoFlores.jpg'
// -----------


const Marriage = () => {

  const [slidePerView, setSlidePerView] = useState(2)

  const images = [
    { id: '1', image: casamentoFoto},
    { id: '2', image: casamentoReal},
    { id: '3', image: casamentoFoto2},
    { id: '4', image: casamentoFoto4},
    { id: '5', image: casamentoFoto5},
    { id: '6', image: casamentoFlores},
  ]

  useEffect(() => {
    function handleResize() {
      if(window.innerWidth < 900) {
        setSlidePerView(2)
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
    <div className='marriage-container'>

      <div className="marriage-container_text">

        <div className="marriage-container_title">
          <h1>Agenda de Casamentos aberta! </h1>
          <p>Celebre o seu casamento na Igreja Nossa Senhora do Carmo.</p>
        </div>

        <div className="marriage-container_button">
        <Button variant="outline-primary" className='marriage_button'>Agende o seu!</Button>
        </div>

      </div>
    
      <div className="marriage-container_slides">
      
      <Swiper 
      slidesPerView={slidePerView}
      pagination= {{ clickable: true }}
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