'use client'

import CeramicCoating from '@/pages/CeramicCoating'
import Main from '@/pages/Main'
import Portfolio from './Portfolio'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Pager from '@/components/Pager'
import { useState } from 'react'

const SwiperContainer = () => {
  const [direction, setDirection] = useState('right')
  const handleScrollToTop = (swiper) => {
    window.scrollTo(0, 0)
  }
  const handlePagerDirection = (swiper) => {
    if (swiper.activeIndex === 0) {
      setDirection('right')
    } else if (swiper.activeIndex === 1) {
      setDirection('both')
    } else {
      setDirection('left')
    }
  }

  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      autoHeight={true}
      onSlideChange={handlePagerDirection}
      onSlideChangeTransitionEnd={handleScrollToTop}
    >
      <Pager direction={direction} />
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
