'use client'

import Image from 'next/image'
import Products from '@/components/Products'
import Hero from '@/components/Hero'
import WhyChooseUs from '@/components/WhyChooseUs'
import Heading from '@/components/Heading'
import Description from '@/components/Description'
import Contact from '@/components/Contact'
import Map from '@/components/Map'
import Footer from '@/components/Footer'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Pager from '@/components/Pager'

export default function CeramicCoating() {
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
    <section className='relative'>
      <Pager next='/portfolio' previous='/' />
      <Hero />
      <WhyChooseUs />

      <div className='bg-gradient-to-b from-zinc-950 to-zinc-100'>
        {/* CERAMIC COATING */}
        <div>
          <div className='container mx-auto px-4 py-8 space-y-4'>
            <Heading light title='ceramic coating' />
            <Image
              src='/sample.png'
              width='259'
              height='194'
              className='mx-auto w-full'
            />
          </div>
        </div>
        {/* PPF */}
        <div>
          <div className='container mx-auto px-4 py-8 space-y-4'>
            <Heading light title='paint protection film' />
            <Image
              src='/sample.png'
              width='259'
              height='194'
              className='mx-auto w-full'
            />
          </div>
        </div>
        <Contact />
      </div>
      <Map />
      <Footer />
    </section>
  )
}
