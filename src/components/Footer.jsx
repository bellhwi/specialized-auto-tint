import Logo from './Logo'
import Image from 'next/image'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <section className='font-godic-regular py-8 relative z-20'>
      <div className='flex flex-col justify-center items-center space-y-4'>
        <Logo footer />
        {/* SNS CONTAINER */}
        <div className='flex items-center space-x-6'>
          <a
            href='https://www.yelp.com/biz/specialized-auto-tint-irvine'
            rel='noopener'
            target='_blank'
          >
            <Image
              src='/img/logos/yelp.png'
              width={1224}
              height={1533}
              className='w-4'
            />
          </a>
          <a
            href='https://goo.gl/maps/8FHaqqzckjixYKap6'
            rel='noopener'
            target='_blank'
          >
            <Image
              src='/img/logos/google.png'
              width={900}
              height={900}
              className='w-4'
            />
          </a>
        </div>
        {/* COPYWRITING */}
        <p className='text-sm text-center text-gray-800'>
          &copy; {currentYear} Specialized Auto Tint <br /> Powered by{' '}
          <a href='https://webtamin.co/en' target='_blank' rel='noopener'>
            Webtamin
          </a>
        </p>
      </div>
    </section>
  )
}

export default Footer
