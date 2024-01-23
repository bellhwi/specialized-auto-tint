const Contact = () => {
  return (
    <section className='text-white py-8' id='contact'>
      <div className='grid grid-cols-1 gap-8'>
        <div className='flex flex-col items-center justify-center'>
          <h3 className='text-white text-xl font-semibold'>Call Us</h3>
          <div className='flex items-center mt-2'>
            <i className='text-gray-200 fa-solid fa-phone mr-2'></i>
            <a href='tel:949-341-9100' className='text-blue-400'>
              (949) 341-9100
            </a>
          </div>
        </div>
        <hr className='w-1/2 mx-auto border border-zinc-500' />
        <div className='flex flex-col items-center justify-center'>
          <h3 className='text-white text-xl font-semibold'>Email Us</h3>
          <div className='flex items-center mt-2'>
            <i className='text-gray-200 fa-solid fa-envelope mr-2'></i>
            <a href='mailto:irvinetint@gmail.com' className='text-blue-400'>
              irvinetint@gmail.com
            </a>
          </div>
        </div>
        <hr className='w-1/2 mx-auto border border-zinc-500' />
        <div className='flex flex-col items-center justify-center'>
          <h3 className='text-white text-xl font-semibold'>Visit Us</h3>
          <div className='flex items-center mt-2 text-gray-200'>
            <i className='fa-solid fa-location-dot mr-2'></i>
            8787 Irvine Center Dr, Irvine, CA 92618
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
