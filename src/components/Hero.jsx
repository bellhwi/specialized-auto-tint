'use client'
// Import necessary dependencies
import Image from 'next/image'
import { useRef, useEffect } from 'react'

// Define the Hero component
const Hero = () => {
  const textRef = useRef(null)

  useEffect(() => {
    const text = '3M Authorized Dealer'
    const textElement = textRef.current

    let index = 0
    let reverse = false

    const typeText = () => {
      if (!reverse && index <= text.length) {
        textElement.textContent = text.substring(0, index)
        index++
      } else if (!reverse) {
        reverse = true
      } else if (index >= 0) {
        textElement.textContent = text.substring(0, index)
        index--
      } else {
        reverse = false
        index = 0 // Reset index for next iteration
      }
    }

    const intervalId = setInterval(typeText, 80) // Adjust the interval for typing and removing speed

    return () => {
      clearInterval(intervalId) // Clear the interval on component unmount
    }
  }, [])

  return (
    <div className='relative text-white text-center'>
      <Image
        src='/super-car.jpg'
        alt='Super car'
        width={640}
        height={427}
        className='absolute w-full h-full object-cover brightness-50'
      />
      <div className='relative space-y-4 container mx-auto px-4 py-16'>
        <h1 className='text-4xl uppercase font-semibold'>auto window tint</h1>
        <div className='flex justify-center items-center'>
          <p
            className='text-2xl overflow-hidden whitespace-nowrap'
            ref={textRef}
          ></p>
          <span className='animation-cursor w-0.5 h-8 bg-white'></span>
        </div>
      </div>
    </div>
  )
}

export default Hero
