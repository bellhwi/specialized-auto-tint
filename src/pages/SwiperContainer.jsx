'use client'

import CeramicCoating from '@/pages/CeramicCoating'
import Main from '@/pages/Main'
import Portfolio from './Portfolio'
import { Swiper, SwiperSlide } from 'swiper/react'
import Navbar from '@/components/Navbar'
import 'swiper/css'

const SwiperContainer = () => {
  return (
    <Swiper spaceBetween={0} slidesPerView={1}>
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
