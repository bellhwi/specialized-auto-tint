'use client'
import Subheading from './Subheading'
import Image from 'next/image'
import Description from './Description'

// Modify the Accordion component
const Accordion = ({
  title,
  content,
  heading,
  features,
  style,
  isOpen,
  onToggle,
}) => {
  const toggleAccordion = () => {
    onToggle() // Notify the parent component to toggle the open state
  }

  const contentStyle = [
    'bg-gradient-to-r from-orange-500 to-orange-700',
    'bg-gradient-to-r from-violet-500 to-violet-700',
    'bg-gradient-to-r from-indigo-500 to-indigo-700',
    'bg-gradient-to-r from-pink-500 to-pink-700',
  ]

  return (
    <div
      className={`border-b px-2 py-3 border-gray-700 last:border-none text-gray-800 ${
        isOpen && `${contentStyle[style]} border-none rounded-b`
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
          <Subheading light title={title} />
        </div>
        <button>
          {isOpen ? (
            <i className='fa-solid fa-chevron-up text-gray-300'></i>
          ) : (
            <i className='fa-solid fa-chevron-down text-gray-300'></i>
          )}
        </button>
      </div>
      {isOpen && (
        <div className='p-2'>
          <h4 className='text-gray-100 font-semibold text-lg'>{heading}</h4>
          <Description light desc={content} />
          {features}
        </div>
      )}
    </div>
  )
}

export default Accordion
