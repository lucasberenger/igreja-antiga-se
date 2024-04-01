import './App.css'

import Header from './components/Header/Header'
import CarouselSlide from './components/Carousel/CarouselSlide'
import Information from './components/Information/Information'
import Marriage from './components/Marriage/Marriage'
import Footer from './components/Footer/Footer'
import DonationPage from './components/Donation/DonationPage'

// router-dom

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";


function App() {
  return (
      <>
        <Header />
        <DonationPage />
        <CarouselSlide />
        <Information />
        <Marriage />
        <Footer />
      </>    
  )
}

export default App
