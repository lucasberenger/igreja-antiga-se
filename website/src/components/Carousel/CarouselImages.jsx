import React from 'react'

import img1 from '../../assets/topo2.jpg'
import img2 from '../../assets/santissimo.jpg'
import img3 from '../../assets/topoAltar.jpg'


const CarouselImages = () => {
  return (
    <img src={img1} alt="img 1" />,
    <img src={img2} alt="img 2" />,
    <img src={img3} alt="img 3" />
  )
}

export default CarouselImages