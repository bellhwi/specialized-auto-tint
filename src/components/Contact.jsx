import Subheading from './Subheading'
import Description from './Description'

const Contact = () => {
  return (
    <section className='bg-black text-white py-8' id='contact'>
      <div className='grid grid-cols-1 gap-8'>
        <div className='flex flex-col items-center justify-center'>
          <Subheading title='Address' />
          <div className='flex items-center mt-2'>
            <i className='fa-solid fa-location-dot mr-2'></i>
            <Description
              nomargin
              desc='8787 Irvine Center Dr, Irvine, CA 92618'
            />
          </div>
        </div>

        <div className='flex flex-col items-center justify-center'>
          <Subheading title='Phone' />
          <div className='flex items-center mt-2'>
            <i className='fa-solid fa-phone mr-2'></i>
            <Description nomargin desc='(949) 341-9100' />
          </div>
        </div>

        <div className='flex flex-col items-center justify-center'>
          <Subheading title='Email' />
          <div className='flex items-center mt-2'>
            <i className='fa-solid fa-envelope mr-2'></i>
            <Description nomargin desc='irvinetint@gmail.com' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
