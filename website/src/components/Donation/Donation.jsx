import React, { useState } from 'react'
import './Donation.modules.css'


const Donation = () => {

    // const [showDonation, setShowDonation] = useState(false)

    const handleDonationToggle = () => {
        // setShowDonation(!showDonation)

        const donationBackground = document.querySelector('.donation-background');
        donationBackground.style.display = 'flex';
        
    }

  return (
    <>
    <div className='nav-donation' onClick={handleDonationToggle}>Faça a sua doação</div>


    
    </>
  )
}

export default Donation