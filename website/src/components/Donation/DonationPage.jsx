import React from 'react'
import './Donation.modules.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import CloseButton from 'react-bootstrap/esm/CloseButton'

import qrImage from '../../assets/qrCode.png'
import contaBancaria from '../../assets/contaBancaria.png'

const DonationPage = () => {

    const data = [
        { id: '1', image: qrImage},
        { id: '2', image: contaBancaria },
    ]

    const handleCloseButtonClick = () => {
        // setShowDonation(false)
        const donationBackground = document.querySelector('.donation-background');
        donationBackground.style.display = 'none';
    }


  return (
    <div className='donation-background'>
        <div className="donation-show">
          <div className="close-btn">
            <CloseButton onClick={handleCloseButtonClick}/>
          </div>
            <div className="code-qr">
            <Swiper 
            slidesPerView={1}
            navigation            
            >
                {data.map((item) => (
                    <SwiperSlide key={item.id}>
                        <img src={item.image}
                        alt="image1" 
                        className='slide-item'/>
                    </SwiperSlide>
                ))}
            </Swiper>

            </div>
        </div>
    </div>
  )
}

export default DonationPage