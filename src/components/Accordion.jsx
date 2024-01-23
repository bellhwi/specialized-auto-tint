'use client'
import Subheading from './Subheading'
import Image from 'next/image'

// Modify the Accordion component
const Accordion = ({ title, content, style, isOpen, onToggle }) => {
  const toggleAccordion = () => {
    onToggle() // Notify the parent component to toggle the open state
  }

  const contentStyle = [
    'bg-gradient-to-r from-orange-400 to-orange-600',
    'bg-gradient-to-r from-violet-400 to-violet-600',
    'bg-gradient-to-r from-indigo-400 to-indigo-600',
    'bg-gradient-to-r from-pink-400 to-pink-600',
  ]

  return (
    <div
      className={`border-b px-2 py-3 border-gray-700 last:border-none text-gray-800 ${
        isOpen && `${contentStyle[style]} border-none `
      }`}
      onClick={toggleAccordion}
    >
      <div className='flex justify-between items-center '>
        <div className='flex items-center'>
          <Image
            src='/3m-logo.png'
            alt='3m logo'
            width='24'
            height='12'
            className='w-8 mr-2'
          />
          <Subheading dark title={title} />
        </div>
        <button>
          {isOpen ? (
            <i className='fa-solid fa-chevron-up text-gray-800'></i>
          ) : (
            <i className='fa-solid fa-chevron-down text-gray-800'></i>
          )}
        </button>
      </div>
      {isOpen && <div className={`p-2 `}>{content} </div>}
    </div>
  )
}

export default Accordion
