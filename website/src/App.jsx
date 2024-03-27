import './App.css'

import Header from './components/Header/Header'
import Donation from './components/Donation/Donation'
import CarouselSlide from './components/Carousel/CarouselSlide'
import Information from './components/Information/Information'
import Marriage from './components/Marriage/Marriage'
import Footer from './components/Footer/Footer'


function App() {
  return (
      <>
        <Header />
        <CarouselSlide />
        <Donation />
        <Information />
        <Marriage />
        <Footer />
      </>    
  )
}

export default App
