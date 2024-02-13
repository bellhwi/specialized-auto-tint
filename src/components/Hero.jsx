'use client'
import Navbar from './Navbar'
import Image from 'next/image'
import { useRef, useEffect } from 'react'
import { Open_Sans } from 'next/font/google'
import Title from './Title'

const open_sans = Open_Sans({ subsets: ['latin'] })

// Define the Hero component
const Hero = ({ main }) => {
  const textRef = useRef(null)

  useEffect(() => {
    const text = '3M Authorized Dealer'
    const textElement = textRef.current

    let index = 0

    const typeText = () => {
      if (textElement === null) return

      if (index <= text.length) {
        textElement.textContent = text.substring(0, index)
        index++
      } else {
        clearInterval(intervalId) // Clear the interval after typing is complete
      }
    }

    const intervalId = setInterval(typeText, 100) // Adjust the interval for typing speed

    return () => {
      clearInterval(intervalId) // Clear the interval on component unmount
    }
  }, [])

  return (
    <div
      className={`relative text-white text-center ${!main && 'bg-zinc-950'}`}
    >
      {main && (
        <>
          <Image
            src='/red-porsche.jpg'
            alt='Red porsche'
            width={2048}
            height={1536}
            className='absolute w-full h-full object-cover brightness-50'
          />
          <div class='absolute flex inset-0 opacity-70'>
            <div className='w-1/6 h-full bg-zinc-400'></div>
            <div className='w-1/6 h-full bg-zinc-500'></div>
            <div className='w-1/6 h-full bg-zinc-600'></div>
            <div className='w-1/6 h-full bg-zinc-700'></div>
            <div className='w-1/6 h-full bg-zinc-800'></div>
            <div className='w-1/6 h-full bg-zinc-950'></div>
          </div>
        </>
      )}
      {main ? (
        <div className='relative space-y-4 container mx-auto px-4 py-16'>
          <div className='mt-8'>
            <Title title='auto window tint' />
            <div className='flex justify-center items-center mt-4'>
              <p
                className={`text-2xl overflow-hidden whitespace-nowrap ${open_sans.className}`}
                ref={textRef}
              ></p>
              <span className='animation-cursor w-0.5 h-8 bg-white'></span>
            </div>
          </div>
        </div>
      ) : (
        <div className='relative space-y-4 container mx-auto px-4 py-12'>
          <div className='mt-12'>
            <Title title='auto surface protection' />
            <p className={`text-2xl mt-4 ${open_sans.className}`}>
              Ceramic Coating <br></br>&<br></br> Paint Protection Film
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Hero
