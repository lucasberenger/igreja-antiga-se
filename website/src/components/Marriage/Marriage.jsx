import React from 'react'
import './Marriage.modules.css'
import Button from 'react-bootstrap/Button';

import casamentoImage from '../../assets/casamentoFoto.jpg'

const Marriage = () => {
  return (
    <div className='marriage-container'>

        <div className='marriage-text'>
            <h1>Casamentos</h1>
            <Button className='marriage-button'
            variant="outline-primary" 
            size='lg'>Agende o seu!
            </Button>{''}
        </div>
        
        <div className="marriage-image">
            <img src={casamentoImage} alt="casamento" />
        </div>
    </div>
  )
}

export default Marriage