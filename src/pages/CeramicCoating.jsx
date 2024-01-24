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
    document.addEventListener('touchmove', handleTouchMove, false)

    return () => {
      document.removeEventListener('touchstart', handleTouchStart)
      document.removeEventListener('touchmove', handleTouchMove)
    }
  }, [])

  let xDown = null
  const navigateToNextPage = () => {
    router.push('/portfolio')
  }
  const navigateToPreviousPage = () => {
    router.push('/')
  }

  function handleTouchStart(event) {
    xDown = event.touches[0].clientX
  }

  function handleTouchMove(event) {
    if (!xDown) {
      return
    }

    let xUp = event.touches[0].clientX
    let xDiff = xUp - xDown

    // Swipe to right
    if (xDiff < 0) {
      navigateToNextPage()
    }
    // Swipe to left
    else {
      navigateToPreviousPage()
    }

    xDown = null
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
        <Map />
        <Footer />
      </div>
    </section>
  )
}
