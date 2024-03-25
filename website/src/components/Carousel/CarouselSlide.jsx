import './Carousel.modules.css'

import { Swiper, SwiperSlide } from 'swiper/react'

const CarouselSlide = () => {

    const data = [
     { id: '1', image: '../../assets/missa.jpg' },
     { id: '2', image: '../../assets/santissimo.jpg'},
     { id: '3', image: '../../assets/topo2.jpg' },
     { id: '4', image: '../../assets/topoAltar.jpg'}
]

    return (
        <>
            <Swiper 
            slidesPerView={1}
            pagination={{clickable: true}}
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