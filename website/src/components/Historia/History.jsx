import React from 'react'
import './History.modules.css'

import Button from 'react-bootstrap/Button';
import { IoSearch } from "react-icons/io5";

import  { Link } from 'react-router-dom'

import coroacaoDomPedro from '../../assets/coroacaoDomPedro.jpg'

const History = () => {
  return (
    <>
        <div className="history_container">
            <div className="history_text">
                <h4>A história da Igreja de Nossa Senhora do Carmo da Antiga Sé se confunde com a história do Brasil.</h4>

                <p>A Antiga Sé foi o palco de alguns dos mais importantes momentos dessa história, como a coroação de Dom Pedro I e Dom Pedro II, além de cenário dos casamentos reais.</p>

                <Button variant="outline-primary" className='history_btn' as={Link} to='/igreja'><IoSearch/> Conheça Nossa História</Button>

            </div>
            <div className="history_image">
                <img src={coroacaoDomPedro} alt="Coroação de Dom Pedro I" />
            </div>
        </div>
    </>
  )
}

export default History