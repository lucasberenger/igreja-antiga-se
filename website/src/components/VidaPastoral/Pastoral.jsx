import React from 'react'
import './Pastoral.modules.css'

import Contact from '../../pages/Contact'

import missa from '../../assets/missa.jpg'
import fotoIgreja from '../../assets/igrejaRua.png'

import HorizontalLine from '../../components/HorizontalLine/HorizontalLine'

import { IoWaterOutline } from "react-icons/io5";
import { GoBook } from "react-icons/go";
import { BiConversation } from "react-icons/bi";

const Pastoral = () => {
  return (
    <>
        <div className="pastoral-title">
            <h1>Vida Pastoral</h1>
            <h4>Missa —  Confissão —  Batismo —  Catecumenato —  Visitação</h4>
            <img src={missa} alt="Missa" />     
        </div>

        <div className="pastoral-content">
            <h2>Horário de Missas</h2>
            <h4>Domingo: 11h</h4>
            <h4>Segunda a Sexta: 8h</h4>
        </div>

        <HorizontalLine />

        <div className="pastoral-container_box">
        
            <div className='pastoral-card'>
                <div className="box-icon">
                    <IoWaterOutline/>
                </div>
                <p>Você pode agendar o sacramento do batismo na Igreja Nossa Senhora do Carmo da Antiga Sé. 
                Batizado: 2° sábado do mês às 9h
                OBS: Outras datas, a consulta é feita na secretaria.
                </p>
            </div>
        
            <div className='pastoral-card'>
                <div className="box-icon">
                    <GoBook/>
                </div>
                    <p>As inscrições estão abertas para o catecumenato de Jovens e Adultos que não receberam o sacramento do batismo, primeira comunhão e confirmação (O Crisma).</p>
            </div>
        
            <div className='pastoral-card'>
                <div className="box-icon">
                    <BiConversation/>
                </div>
                <p>Os atendimentos de confissões acontecem de segunda-feira a sexta-feira após a Missa das 8h. Para confissões em outros dias e horários, basta dirigir-se à secretaria ou à sacristia.</p>
            </div>        
    </div>


    <div className="pastoral-title">
            <h1>Visitação</h1>
            <h4>Você pode fazer a visitação e conhecer melhor a Igreja Nossa Senhora do Carmo da Antiga Sé.</h4>
            <br />
            <h4>Todos os sábados do mês às 9h30 às 12h30</h4>
            <img src={fotoIgreja} alt="Missa" />     
    </div>

    <Contact/>



        




    </>
  )
}

export default Pastoral