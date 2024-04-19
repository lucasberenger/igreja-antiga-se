import './Carousel.modules.css'

import { Swiper, SwiperSlide } from 'swiper/react'

import image1 from '../../assets/igrejaRua.png'
import image2 from '../../assets/topoAltar.jpg'
import image3 from '../../assets/teto.jpg'
import image4 from '../../assets/santissimo.jpg' 
import PainelNossaSenhora from '../../assets/PainelNossaSenhora.jpg'
import topoIgreja from '../../assets/topoIgreja.png'
import santosIgreja from '../../assets/santosIgreja.png'

const CarouselSlide = () => {

    const data = [
        { id: '1', image: PainelNossaSenhora },
        { id: '2', image: image1},
        { id: '3', image: image2 },
        { id: '4', image: image3 },
        { id: '5', image: topoIgreja },
        
    ]

    return (
        <>
            <Swiper 
            slidesPerView={1}
            pagination={{clickable: true}}
            navigation
            autoplay={{ delay: 4000 }}
            
            >
                {data.map((item) => (
                    <SwiperSlide key={item.id}>
                        <img src={item.image}
                        alt="image1" 
                        className='slide-item'/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
      );
}

export default CarouselSlide