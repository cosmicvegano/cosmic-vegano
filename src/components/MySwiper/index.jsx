import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Keyboard, Pagination } from 'swiper'
import Box from '@mui/material/Box'

import soon from '../../assets/soon.png'
import MediaCard from '../MediaCard'

import 'swiper/css'
import 'swiper/css/pagination'
import './styles.scss'

const MySwiper = ({ carouselClasses, carouselItems, category }) => {
  return (
    <Box className={carouselClasses} component="section">
      <Swiper
        className="my-swiper"
        keyboard={{
          enabled: true,
        }}
        modules={[Keyboard, Pagination]}
        pagination={{
          clickable: true,
        }}
        slidesPerView={'auto'}
        spaceBetween={24}
      >
        {carouselItems.length > 0 ? (
          carouselItems.map((item, index) => (
            <SwiperSlide key={index}>
              <MediaCard {...item} categoria={category.nombre} tipo={category.tipo} />
            </SwiperSlide>
          ))
        ) : (
          <img alt="Próximamente..." className="soon" src={soon} />
        )}
      </Swiper>
    </Box>
  )
}

export default MySwiper
