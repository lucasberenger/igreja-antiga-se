import React from 'react'
import { useState } from 'react'

import './Formulary.modules.css'

import Maps from '../Maps/Maps'

import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

// https://www.youtube.com/watch?v=Zbg1BHOVzRg&ab_channel=Sujeitoprogramador

const Formulary = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

  return (
    <>
        <div className="form-container">

        <div className="form-map">
            <p><FaPhoneAlt /> (21) 98985-5508<br />
            <FaLocationDot /> Rua Sete de Setembro, 14 - Centro | Rio de Janeiro - RJ </p>
              <Maps />
          </div>
        
            <form className="form" onSubmit={()=>{}}>

                <h4>Entre em Contato!</h4>

                <input type="text"
                className='input'
                placeholder='Digite seu nome'
                onChange={(e) => setName(e.target.value)}
                value={name}
                />
                <input type="text"
                className='input'
                placeholder='Digite seu email'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                />
                <textarea
                className='textarea'
                placeholder='Digite sua mensagem...'
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                cols="30" rows="10"></textarea>
            </form>
        </div>
    </>
  )
}

export default Formulary