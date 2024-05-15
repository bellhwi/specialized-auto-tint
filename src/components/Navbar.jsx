'use client'

import Link from 'next/link'
import Logo from './Logo'
import { useState } from 'react'
import Description from './Description'
import Subheading from './Subheading'
import Image from 'next/image'

const Navbar = ({ main, setOpenNav, setOpenQuote }) => {
  const handleMobileMenu = () => {
    setShowMobileNav(!showMobileNav)
    setOpenNav()
  }
  const handleQuotationModal = () => {
    setShowQuotationModal(!showQuotationModal)
    setOpenQuote()
  }
  const [showMobileNav, setShowMobileNav] = useState(false)
  const [showQuotationModal, setShowQuotationModal] = useState(false)

  return (
    <nav className='absolute left-0 top-0 right-0 text-white z-30 lg:hidden'>
      <div className='lg:hidden'>
        <Image
          src='/img/navbar-bg.png'
          width={1037}
          height={98}
          className='absolute inset-0 h-10'
        />
      </div>

      <div className='container mx-auto px-3 pt-2 flex justify-between items-center relative md:mt-4 lg:px-8'>
        <Link href={`/`}>
          <Logo />
        </Link>
        <div className='flex items-center space-x-4 lg:hidden'>
          <button
            className='contact-text bg-primary p-1 rounded-full text-xs uppercase relative bottom-0.5 font-sarang'
            onClick={handleQuotationModal}
          >
            contact & appointment
          </button>
          <Link href='#' onClick={handleMobileMenu}>
            <i className='fa-solid fa-bars text-xl text-white'></i>
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className='hidden flex items-center space-x-6 lg:block'>
          <Link href='#' className='uppercase'>
            home
          </Link>
          <Link href='#' className='uppercase'>
            about
          </Link>
          <Link href='#' className='uppercase'>
            services
          </Link>
          <Link href='#about-us' className='uppercase'>
            portfolio
          </Link>
          <Link
            href='#quality-assurance'
            className='uppercase'
            onClick={handleQuotationModal}
          >
            contact
          </Link>
        </ul>
      </div>

      {/* MOBILE SIDE MENU */}
      <ul
        className={`text-sm w-60 fixed right-0 top-0 bottom-0 p-6 space-y-4 text-left flex flex-col transition-all duration-500 z-50 ${
          showMobileNav ? 'translate-x-0' : 'translate-x-60'
        } bg-gradient-to-r from-zinc-900 from-30% via-zinc-800 via-60% to-zinc-600`}
      >
        <Link href='/' className='uppercase'>
          window tint
        </Link>
        <hr className={`w-full border-gray-200 `} />
        <Link href='/ceramic-coating' className='uppercase'>
          ceramic coating
        </Link>
        <hr className={`w-full border-gray-200 `} />
        <Link href='/portfolio' className='uppercase'>
          portfolio
        </Link>
        <div
          className={`top-8 mx-auto relative w-8 h-8 rounded-full flex items-center justify-center border p-4 cursor-pointer transition hover:rotate-90`}
          onClick={handleMobileMenu}
        >
          <i class='fa-solid fa-x'></i>
        </div>
      </ul>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={
          showMobileNav
            ? 'fixed top-0 left-0 bottom-0 right-0 bg-black opacity-75 z-30'
            : 'hidden'
        }
        onClick={handleMobileMenu}
      ></div>

      {/* QUOTATION MODAL */}
      {showQuotationModal && (
        <>
          <div
            className='fixed top-0 left-0 bottom-0 right-0 bg-black opacity-75 z-40'
            onClick={handleQuotationModal}
          ></div>
          <div className='absolute mt-24 left-1/2 transform -translate-x-1/2 p-8 z-50 w-4/5 rounded text-center bg-gradient-to-b from-zinc-400 from-20% to-white'>
            <p className='text-lg uppercase font-godic-bold text-black'>
              request a quote by
            </p>
            <div className='flex items-center justify-center mt-4 space-x-2'>
              <a href='tel:949-341-9100' className='p-4'>
                <div className='flex flex-col items-center justify-center'>
                  <i className='fa-solid fa-phone text-blue-600'></i>
                  <p className='text-sm mt-2 text-blue-600'>Calling Us</p>
                </div>
              </a>
              <div className='h-16 border-l border-gray-200'></div>
              <a href='mailto:irvinetint@gmail.com' className='p-4'>
                <div className='flex flex-col items-center justify-center'>
                  <i className='fa-solid fa-envelope text-blue-600'></i>
                  <p className='text-sm mt-2 text-blue-600'>Emailing Us</p>
                </div>
              </a>
            </div>
            <div
              className='text-gray-700 absolute top-0 right-0 m-4 cursor-pointer'
              onClick={handleQuotationModal}
            >
              <i class='fa-solid fa-x'></i>
            </div>
          </div>
        </>
      )}
    </nav>
  )
}

export default Navbar
