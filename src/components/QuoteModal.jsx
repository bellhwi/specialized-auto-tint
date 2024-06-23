'use client'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'

const QuoteModal = ({ ko }) => {
  const [showModal, setShowModal] = useState(false)

  const handleQuotationModal = () => {
    setShowModal(!showModal)
  }
  const handleOverlayClick = () => {
    setShowModal(false)
  }

  const handleModalContentClick = (e) => {
    e.stopPropagation()
  }
  return (
    <div className='hidden lg:block'>
      <div
        className={`absolute right-36 top-2.5 space-x-3 z-30 flex items-center justify-center`}
      >
        <p className='text-white font-bold'>{ko ? '언어:' : 'Language:'} </p>
        <Link className='mr-6' href={'/'}>
          <Image
            src='/img/us-flag.webp'
            width={32}
            height={32}
            alt='united states flag'
            priority
          />
        </Link>
        <Link href={'/ko'}>
          <Image
            src='/img/ko-flag.webp'
            width={32}
            height={32}
            alt='korea flag'
            priority
          />
        </Link>
      </div>
      <button
        className='absolute cursor-pointer mr-2	 right-0 top-0 z-30  mt-2 text-sm bg-primary px-3 py-2 rounded-full uppercase font-sarang text-white'
        onClick={handleQuotationModal}
      >
        {ko ? '견적 문의하기' : 'get quote'}
      </button>

      {showModal && (
        <div
          className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'
          onClick={handleOverlayClick}
        >
          <div
            className='relative bg-gradient-to-b from-zinc-400 from-20% to-white p-12 rounded shadow-lg w-96'
            onClick={handleModalContentClick}
          >
            <h2 className='text-2xl text-center font-godic-bold mb-4 uppercase'>
              {ko ? '견적 문의하기' : 'request a quote by'}
            </h2>
            <div className='flex items-center mb-2'>
              <Image
                src='/icons/phone-black.svg'
                width={24}
                height={24}
                alt='phone icon'
              />
              <p className='text-black text-lg relative top-0.5 ml-1'>
                (949) 341-9100
              </p>
            </div>

            <div className='flex items-center'>
              <Image
                src='/icons/mail-black.svg'
                width={24}
                height={24}
                alt='mail icon'
              />
              <a
                href='mailto:irvinetint@gmail.com'
                className='text-lg relative top-0.5 ml-1 text-blue-500'
              >
                irvinetint@gmail.com
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
        </div>
      )}
    </div>
  )
}

export default QuoteModal
