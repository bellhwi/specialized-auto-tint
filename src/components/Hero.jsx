'use client'
import Navbar from './Navbar'
import Image from 'next/image'
import { useRef, useEffect } from 'react'
import { Open_Sans } from 'next/font/google'

const open_sans = Open_Sans({ subsets: ['latin'] })

// Define the Hero component
const Hero = () => {
  const textRef = useRef(null)

  useEffect(() => {
    const text = '3M Authorized Dealer'
    const textElement = textRef.current

    let index = 0

    const typeText = () => {
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
    <div className='relative text-white text-center'>
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
      <Navbar />
      <div className='relative space-y-4 container mx-auto px-4 py-8'>
        <h1 className='text-4xl uppercase font-semibold'>auto window tint</h1>
        <div className='flex justify-center items-center'>
          <p
            className={`text-2xl overflow-hidden whitespace-nowrap ${open_sans.className}`}
            ref={textRef}
          ></p>
          <span className='animation-cursor w-0.5 h-8 bg-white'></span>
        </div>
      </div>
    </div>
  )
}

export default Hero
