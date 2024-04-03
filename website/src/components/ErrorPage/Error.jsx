import React from 'react'
import "./Error.modules.css"

import { BiSolidMessageError } from "react-icons/bi";

import Button from 'react-bootstrap/Button';
import  { Link } from 'react-router-dom'


const Error = () => {
  return (
    <>
    <div className="error_container">
        <h3>Página não encontrada! <BiSolidMessageError /></h3>
        <Button variant="outline-primary" className='back-home' as={Link} to='/home'>Voltar para página Inicial</Button>
    </div>
    </>
  )
}

export default Error