'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const TopBtn = () => {
  const [showButton, setShowButton] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight
      const scrollPosition = window.innerHeight + window.scrollY
      setShowButton(scrollPosition >= scrollHeight - 400)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <>
      {showButton && (
        <div
          className='z-20 fixed right-0 bottom-0 mx-4 mb-18 cursor-pointer lg:m-4 animate-fadeIn'
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className='flex items-center justify-center rounded-full bg-gray-400 text-white w-12 h-12'>
            <Image
              src='/icons/arrow-up.svg'
              width={24}
              height={24}
              alt='arrow up icon'
            />
          </div>
        </div>
      )}
    </>
  )
}

export default TopBtn
