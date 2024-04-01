import React from 'react'


import CarouselSlide from '../components/Carousel/CarouselSlide'
import Information from '../components/Information/Information'
import Marriage from '../components/Marriage/Marriage'
import DonationPage from '../components/Donation/DonationPage'
import History from '../components/Historia/History'

const Home = () => {
  return (
    <>
        <CarouselSlide />
        <DonationPage />
        <Information />
        <Marriage />
        <History />
    </>
  )
}

export default Home