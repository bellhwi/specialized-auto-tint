'use client'

import CeramicCoating from '@/pages/CeramicCoating'
import Main from '@/pages/Main'
import Portfolio from './Portfolio'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const SwiperContainer = () => {
  const handleSlideChange = () => {
    window.scrollTo(0, 0)
  }

  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      autoHeight={true}
      onSlidesUpdated={handleSlideChange}
      loop={true}
    >
      <SwiperSlide>
        <Main />
      </SwiperSlide>
      <SwiperSlide>
        <CeramicCoating />
      </SwiperSlide>
      <SwiperSlide>
        <Portfolio />
      </SwiperSlide>
    </Swiper>
  )
}

export default SwiperContainer
