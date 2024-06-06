'use client'

import Link from 'next/link'
import Logo from './Logo'
import { useState } from 'react'
import Image from 'next/image'

const Navbar = ({ setOpenNav, setOpenQuote, ko }) => {
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
          src='/img/navbar-bg.webp'
          priority
          width={1037}
          height={98}
          className='absolute inset-0 h-10'
          alt='navigation bar background'
        />
      </div>

      <div className='container mx-auto px-3 pt-0.5 flex justify-between items-center relative lg:px-8'>
        <Link href={ko ? '/ko' : '/'}>
          <Logo />
        </Link>
        <div className='flex items-center space-x-4 lg:hidden'>
          <button
            className='text-xs bg-primary px-2 py-1.5 rounded-full uppercase font-sarang'
            onClick={handleQuotationModal}
          >
            {ko ? '견적 문의하기' : 'get quote'}
          </button>
          <Link href='#' onClick={handleMobileMenu}>
            <Image
              src='/icons/menu.svg'
              width={36}
              height={36}
              alt='menu icon'
            />
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
        className={`text-sm w-48 fixed right-0 top-0 bottom-0 p-6 space-y-3 text-left flex flex-col transition-all duration-500 z-50 ${
          showMobileNav ? 'translate-x-0' : 'translate-x-48'
        } bg-gradient-to-r from-zinc-900 from-30% via-zinc-800 via-60% to-zinc-600`}
      >
        <Link href={ko ? '/ko' : '/'} className='uppercase'>
          {ko ? '윈도우 틴트' : 'window tint'}
        </Link>
        <hr className={`w-full border-gray-200 `} />
        <Link
          href={ko ? '/ko/ceramic-coating' : '/ceramic-coating'}
          className='uppercase'
        >
          {ko ? '세라믹 코팅' : 'ceramic coating'}
        </Link>
        <hr className={`w-full border-gray-200 `} />
        <Link href={ko ? '/ko/portfolio' : '/portfolio'} className='uppercase'>
          {ko ? '포트폴리오' : 'portfolio'}
        </Link>
        <div
          className={`top-8 mx-auto relative w-8 h-8 rounded-full flex items-center justify-center border cursor-pointer transition hover:rotate-90`}
          onClick={handleMobileMenu}
        >
          <Image
            src='/icons/close.svg'
            width={16}
            height={16}
            alt='close icon'
          />
        </div>
        {/* Language Change */}
        {ko ? (
          <div
            className={`top-16 mx-auto relative space-x-6 flex items-center justify-center`}
          >
            <Link href={'/'}>
              <Image
                src='/img/us-flag.webp'
                width={32}
                height={32}
                alt='united states flag'
              />
            </Link>
            <Link href={'/ko'}>
              <Image
                src='/img/ko-flag.webp'
                width={32}
                height={32}
                alt='korea flag'
              />
            </Link>
          </div>
        ) : null}
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
              {ko ? '견적 문의하기' : 'request a quote by'}
            </p>
            <div className='flex items-center justify-center mt-4 space-x-2'>
              <a href='tel:949-341-9100' className='p-4'>
                <div className='flex flex-col items-center justify-center'>
                  <Image
                    src='/icons/phone-black.svg'
                    width={24}
                    height={24}
                    alt='phone icon'
                  />
                  <p className='text-sm mt-2 '>
                    {ko ? '전화하기' : 'Calling Us'}
                  </p>
                </div>
              </a>
              <div className='h-16 border-l border-black'></div>
              <a href='mailto:irvinetint@gmail.com' className='p-4'>
                <div className='flex flex-col items-center justify-center'>
                  <Image
                    src='/icons/mail-black.svg'
                    width={24}
                    height={24}
                    alt='mail icon'
                  />
                  <p className='text-sm mt-2 '>
                    {ko ? '이메일 보내기' : 'Emailing Us'}
                  </p>
                </div>
              </a>
            </div>
            <div
              className='text-gray-700 absolute top-0 right-0 m-4 cursor-pointer'
              onClick={handleQuotationModal}
            >
              <Image
                src='/icons/close-black.svg'
                width={24}
                height={24}
                alt='close icon'
              />
            </div>
          </div>
        </>
      )}
    </nav>
  )
}

export default Navbar
