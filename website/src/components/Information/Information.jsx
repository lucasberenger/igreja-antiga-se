import React from 'react'

import './Information.modules.css'

const Information = () => {
  return (
    <>
        <div className='information_container'>
            <h1>Horário de Missas</h1>
            <div className='information_text'>
                <div>
                    <p>Segunda a Sábado: 7h e 18h</p>
                </div>
                <div>
                    <p>Domingo: 11h e 19h</p>
                </div>
            </div>
        </div>
    </>
   
  )
}

export default Information