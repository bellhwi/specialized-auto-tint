'use client'

import CeramicCoating from '@/pages/CeramicCoating'
import Main from '@/pages/Main'
import Portfolio from './Portfolio'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Pager from '@/components/Pager'

const SwiperContainer = () => {
  const handleSlideChange = (swiper) => {
    window.scrollTo(0, 0)
    // console.log(swiper.activeIndex)
  }

  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      autoHeight={true}
      initialSlide={1}
      onSlideChange={handleSlideChange}
    >
      <Pager />
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
