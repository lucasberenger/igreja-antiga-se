import React from 'react'
import  { Link } from 'react-router-dom'

import './AcaoSocial.modules.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import { useState, useEffect } from 'react'

import Button from 'react-bootstrap/Button';

import { LuHeartHandshake } from "react-icons/lu";
import { GiCoffeeCup } from "react-icons/gi";
import { IoPeopleCircle } from "react-icons/io5";
import { FaHandHoldingHeart } from "react-icons/fa";

import img1 from '../../assets/acoes/img1.png'
import img2 from '../../assets/acoes/img2.png'
import img3 from '../../assets/acoes/img3.png'
import img4 from '../../assets/acoes/img4.png'
import img5 from '../../assets/acoes/img5.png'
import img6 from '../../assets/acoes/img6.png'
import img7 from '../../assets/acoes/img7.png'

const AcaoSocial = () => {

    const [slidePerView, setSlidePerView] = useState(2)

    const data = [
        { id: '1', image: img1 },
        { id: '2', image: img2},
        { id: '3', image: img3 },
        { id: '4', image: img4 },
        { id: '5', image: img5 },
        { id: '6', image: img6 },
        { id: '7', image: img7 },
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
    <Swiper 
      slidesPerView={slidePerView}
      pagination= {{ clickable: true }}
      autoplay={{ delay: 4000 }}
      className='acoes-slider'
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.image} 
            alt="Slider" 
            className='acoes-slide_item'
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="acao-container">

            <div className="acao-title">
                <h1>Ações Sociais</h1>
            </div>


            <div className="acao-container_box">

                <div className="acao-container_item">
                <IoPeopleCircle/>
                <p>O super café da manhã é uma iniciativa de fiéis voluntários da Igreja Nossa Senhora da Antiga Sé.</p>
                </div>

                <div className="acao-container_item">
                <GiCoffeeCup/>
                <p>Todo primeiro Domingo do mês os voluntários distribuem um super café da manhã para as pessoas em situação de rua do Centro do Rio de Janeiro, às 8h30.</p>
                </div>

                <div className="acao-container_item">
                <LuHeartHandshake/>
                <p>Você também pode ser voluntário, colaborando financeiramente via PIX: antigase@gmail.com ou com mantimentos ou ajudando na distribuição dos alimentos.</p>
                </div>
            </div>

            <Button 
            variant="outline-primary" 
            className='acao-btn' 
            as={Link} 
            to='/contato'><FaHandHoldingHeart/> Seja Voluntário</Button>
        </div>
      
    </>
  )
}

export default AcaoSocial