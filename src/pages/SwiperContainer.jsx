'use client'

import CeramicCoating from '@/pages/CeramicCoating'
import Main from '@/pages/Main'
import Portfolio from './Portfolio'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Pager from '@/components/Pager'
import { useState, useRef } from 'react'

const SwiperContainer = () => {
  const [direction, setDirection] = useState('right')
  const [openNav, setOpenNav] = useState(false)
  const [openQuote, setOpenQuote] = useState(false)
  const swiperRef = useRef(null)
  const handleOpenNav = () => {
    openNav ? setOpenNav(false) : setOpenNav(true)
  }
  const handleOpenQuote = () => {
    openQuote ? setOpenQuote(false) : setOpenQuote(true)
  }
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
  const handlePagerClick = (e) => {
    const pagerEl = e.target
    if (pagerEl.id === 'pager-left') {
      swiperRef.current.slidePrev()
    } else {
      swiperRef.current.slideNext()
    }
  }

  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      autoHeight={true}
      onSlideChange={handlePagerDirection}
      onSlideChangeTransitionEnd={handleScrollToTop}
      onSwiper={(swiper) => {
        swiperRef.current = swiper
      }}
    >
      {!openNav && !openQuote && (
        <div onClick={(e) => handlePagerClick(e)}>
          <Pager direction={direction} />
        </div>
      )}

      <SwiperSlide>
        <Main setOpenNav={handleOpenNav} setOpenQuote={handleOpenQuote} />
      </SwiperSlide>
      <SwiperSlide>
        <CeramicCoating
          setOpenNav={handleOpenNav}
          setOpenQuote={handleOpenQuote}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Portfolio setOpenNav={handleOpenNav} setOpenQuote={handleOpenQuote} />
      </SwiperSlide>
    </Swiper>
  )
}

export default SwiperContainer
