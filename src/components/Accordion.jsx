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
            className={`text-base font-semibold lg:text-lg ${
              isOpen ? 'text-blue-400' : 'text-white'
            }`}
          >
            {title}
          </p>
        </div>
        <button>
          {isOpen ? (
            <i className='fa-solid fa-chevron-down text-blue-400'></i>
          ) : (
            <small className='text-blue-400'>Learn More</small>
          )}
        </button>
      </div>
    </div>
  )
}

export default Accordion
