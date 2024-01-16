'use client'

import Link from 'next/link'
import Logo from './Logo'
import { useState } from 'react'

const Navbar = () => {
  const handleMobileMenu = () => {
    setShowMobileNav(!showMobileNav)
  }
  const [showMobileNav, setShowMobileNav] = useState(false)
  return (
    <nav>
      <div className='container mx-auto p-4 flex justify-between items-center'>
        <Link href={`/page.js`}>
          <Logo />
        </Link>
        <div className='flex space-x-6'>
          <Link href='#contact' className='uppercase'>
            Contact
          </Link>
          <Link href='#' onClick={handleMobileMenu}>
            <i className='fa-solid fa-bars'></i>
          </Link>
        </div>
      </div>

      {/* MOBILE SIDE MENU */}

      <ul
        className={
          showMobileNav
            ? 'translate-x-0 w-64 fixed right-0 top-0 bottom-0 p-8 space-y-4 bg-black text-white flex flex-col z-50 transition-all duration-500'
            : 'translate-x-64 w-64 fixed right-0 top-0 bottom-0 p-8 space-y-4 bg-black text-white flex flex-col z-50 transition-all duration-500'
        }
      >
        <Link href='#' className='uppercase'>
          auto window tint
        </Link>
        <hr className='w-full border-gray-400' />
        <Link href='#' className='uppercase'>
          ceramic coating & PPF
        </Link>
        <hr className='w-full border-gray-400' />
        <Link href='#' className='uppercase'>
          portfolio
        </Link>
        <div
          className='top-8 mx-auto relative w-8 h-8 rounded-full flex items-center justify-center border-white border p-4 cursor-pointer transition hover:rotate-90'
          onClick={handleMobileMenu}
        >
          X
        </div>
      </ul>

      {/* BACKGROUND DARK OVERLAY */}
      <div
        className={
          showMobileNav
            ? 'fixed top-0 left-0 bottom-0 right-0 bg-black opacity-50 z-10'
            : 'hidden'
        }
        onClick={handleMobileMenu}
      ></div>
    </nav>
  )
}

export default Navbar
