'use client'
import { useState, useEffect } from 'react'

const TopBtn = () => {
  const [showButton, setShowButton] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight
      const scrollPosition = window.innerHeight + window.scrollY
      setShowButton(scrollPosition >= scrollHeight - 400)
    }

    window.addEventListener('scroll', handleScroll)

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
            <i className='fa-solid fa-arrow-up'></i>
          </div>
        </div>
      )}
    </>
  )
}

export default TopBtn
