'use client'

import CeramicCoating from '@/pages/CeramicCoating'
import Main from '@/pages/Main'
import Portfolio from './Portfolio'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Pager from '@/components/Pager'
import { useState } from 'react'

const SwiperContainer = () => {
  const [direction, setDirection] = useState('both')
  const handleSlideChange = (swiper) => {
    window.scrollTo(0, 0)

    if (swiper.activeIndex === 1) {
      setDirection('both')
    } else if (swiper.activeIndex === 0) {
      setDirection('right')
    } else {
      setDirection('left')
    }
  }

  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      autoHeight={true}
      initialSlide={1}
      onSlideChange={handleSlideChange}
    >
      <Pager direction={direction} />
      <SwiperSlide>
        <CeramicCoating />
      </SwiperSlide>
      <SwiperSlide>
        <Main />
      </SwiperSlide>
      <SwiperSlide>
        <Portfolio />
      </SwiperSlide>
    </Swiper>
  )
}

export default SwiperContainer
