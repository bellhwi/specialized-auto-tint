'use client'

import Title from '@/components/Title'
import Navbar from '@/components/Navbar'
import Description from '@/components/Description'
import Car from '@/components/Car'
import Image from 'next/image'
import Contact from '@/components/Contact'
import Map from '@/components/Map'
import Footer from '@/components/Footer'
import Pager from '@/components/Pager'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const Portfolio = () => {
  const router = useRouter()

  useEffect(() => {
    document.addEventListener('touchstart', handleTouchStart, false)
    document.addEventListener('touchend', handleTouchEnd, false)

    return () => {
      document.removeEventListener('touchstart', handleTouchStart)
      document.removeEventListener('touchend', handleTouchEnd)
    }
  }, [])

  let xDown = null
  let yDown = null

  const navigateToNextPage = () => {
    router.push('/auto-surface-protection')
  }
  const navigateToPreviousPage = () => {
    router.push('/portfolio')
  }

  function handleTouchStart(event) {
    xDown = event.touches[0].clientX
    yDown = event.touches[0].clientY
  }

  function handleTouchEnd(event) {
    const xThreshold = 60
    const yThreshold = 120
    if (!xDown) {
      return
    }

    let xUp = event.changedTouches[0].clientX
    let yUp = event.changedTouches[0].clientY
    let xDiff = xUp - xDown
    let yDiff = yUp - yDown

    if (yDiff > yThreshold) return
    // Swipe to right
    if (xDiff < 0) {
      let abs = Math.abs(xDiff)
      abs > xThreshold && navigateToNextPage()
    }
    // Swipe to left
    else {
      let abs = Math.abs(xDiff)
      abs > xThreshold && navigateToPreviousPage()
    }

    xDown = null
    yDown = null
  }

  return (
    <section className='bg-zinc-950 relative'>
      <Pager next='/' previous='/auto-surface-protection' />
      <Navbar />
      <div className='max-w-sm text-center mx-auto p-4'>
        <Title title='portfolio' />
        <div className='mt-4'>
          <Description
            light
            desc='"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum esse voluptatibus aliquam, dignissimos hic tenetur asperiores. Suscipit animi deserunt ad similique, totam voluptates. Laboriosam doloribus similique nemo voluptates esse atque est."'
          />
          <Description light desc='- Jan. 23. 2024 Yelp -' />
        </div>
      </div>

      {/* CARS */}
      <div className='space-y-8 mt-8'>
        <div className='bg-gradient-to-b from-zinc-950 to-zinc-800'>
          <div className='text-left px-4'>
            <div className='text-lg'>
              <Description nomargin desc='Lorem Ipsum Dolor' light />
            </div>
            <div className='text-sm'>
              <Description nomargin desc='4 Side & Rear' light />
              <Description nomargin desc='Crystalline 25%' />
            </div>
          </div>
          <Image
            src='/portfolio-car-1.png'
            alt='portfolio car 1'
            width='1599'
            height='320'
            className='w-full px-16 pb-8'
          />
        </div>
        <div className='bg-gradient-to-b from-zinc-950 to-zinc-600'>
          <div className='text-left px-4'>
            <div className='text-lg'>
              <Description nomargin desc='Lorem Ipsum Dolor' light />
            </div>
            <div className='text-sm'>
              <Description nomargin desc='4 Side & Rear' light />
              <Description nomargin desc='Crystalline 25%' />
            </div>
          </div>
          <Image
            src='/portfolio-car-2.png'
            alt='portfolio car 1'
            width='1599'
            height='320'
            className='w-full px-16 pb-8'
          />
        </div>
      </div>
      <Contact light />
      <Map />
      <Footer />
    </section>
  )
}

export default Portfolio
