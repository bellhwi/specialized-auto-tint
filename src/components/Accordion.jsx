'use client'

// Modify the Accordion component
const Accordion = ({ title, isOpen, onToggle }) => {
  const toggleAccordion = (e) => {
    e.preventDefault()
    onToggle() // Notify the parent component to toggle the open state
  }

  return (
    <div
      className={`border rounded-full py-1 px-3 ${
        isOpen ? `border-blue-300` : `border-white `
      }`}
      onClick={toggleAccordion}
    >
      <div className='flex justify-between items-center relative top-0.5 lg:top-0'>
        <div className='flex items-center'>
          <p
            className={`font-bold text-xl ${
              isOpen ? 'text-blue-300' : 'text-white'
            }`}
          >
            {title}
          </p>
        </div>
        <button className='text-sm text-blue-300'>
          {isOpen ? (
            <i className='fa-solid fa-chevron-down text-blue-300'></i>
          ) : (
            <>
              <span className='md:block font-godic-thin'>Learn More</span>
            </>
          )}
        </button>
      </div>
    </div>
  )
}

export default Accordion
