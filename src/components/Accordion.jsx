'use client'
import Subheading from './Subheading'
import Image from 'next/image'
import Description from './Description'

// Modify the Accordion component
const Accordion = ({ title, isOpen, onToggle }) => {
  const toggleAccordion = (e) => {
    e.preventDefault()
    onToggle() // Notify the parent component to toggle the open state
  }

  return (
    <div
      className={`border-2 rounded-full py-1 px-3 ${
        isOpen ? `border-blue-400` : `border-white `
      }`}
      onClick={toggleAccordion}
    >
      <div className='flex justify-between items-center space-x-2 '>
        <div className='flex items-center'>
          <p
            className={`text-sm font-semibold lg:text-lg ${
              isOpen ? 'text-blue-400' : 'text-white'
            }`}
          >
            {title}
          </p>
        </div>
        <button className='text-xs text-blue-400'>
          {isOpen ? (
            <i className='fa-solid fa-chevron-up text-blue-400'></i>
          ) : (
            <>
              <span className='md:hidden'>
                <i className='fa-solid fa-chevron-down text-white'></i>
              </span>
              <span className='hidden md:block'>Learn More</span>
            </>
          )}
        </button>
      </div>
    </div>
  )
}

export default Accordion
