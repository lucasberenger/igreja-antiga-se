import React from 'react'

import topoImg from './src/assets/topo.jpg';
import topo2Img from './src/assets/topo_2.jpg';
import topoSantissimoImg from './src/assets/topo-santissimo.jpg';

const CarouselImages = () => {
  return (
    <div>
        <img src={topoImg} alt="img 1" />
        <img src={topo2Img} alt="img 2" />
        <img src={topoSantissimoImg} alt="img 3" />
    </div>
  )
}

export default CarouselImages