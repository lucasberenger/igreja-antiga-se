import './Carousel.modules.css'

import { Swiper, SwiperSlide } from 'swiper/react'

import image1 from '../../assets/igrejaRua.png'
import image2 from '../../assets/topoAltar.jpg'
import image3 from '../../assets/teto.jpg'
import image4 from '../../assets/santissimo.jpg' 

const CarouselSlide = () => {

    const data = [
        { id: '1', image: image1},
        { id: '2', image: image2 },
        { id: '3', image: image3 },
        { id: '4', image: image4 }
    ]

    return (
        <>
            <Swiper 
            slidesPerView={1}
            pagination={{clickable: true}}
            navigation
            autoplay={{ delay: 3000 }}
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