import React from 'react'
import './Donation.modules.css'

import { FaHandHoldingHeart } from "react-icons/fa";

const Donation = () => {
  return (
    <>
    <div className='donation-container'>
        <FaHandHoldingHeart />
    </div>
    <div className="donation-details">
        <h2>Faça a sua doação</h2>
    </div>
    </>
  )
}

export default Donation