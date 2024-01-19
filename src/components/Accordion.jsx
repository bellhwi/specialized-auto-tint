'use client'

import { useState } from 'react'
import Link from 'next/link'
import Subheading from './Subheading'

const Accordion = ({ title, content, href }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div
      className='border-b-2 p-2 border-gray-200 last:border-none'
      onClick={toggleAccordion}
    >
      <div className='flex justify-between items-center'>
        <Subheading title={title} />
        <button>
          {isOpen ? (
            <i class='fa-solid fa-chevron-up text-gray-700'></i>
          ) : (
            <i class='fa-solid fa-chevron-down text-gray-700'></i>
          )}
        </button>
      </div>
      {isOpen && (
        <div className='py-2 text-gray-700'>
          {content}{' '}
          <Link href={href} className='uppercase text-blue-500'>
            learn more
          </Link>
        </div>
      )}
    </div>
  )
}

export default Accordion
