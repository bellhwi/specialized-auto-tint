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
              src='/img/logos/yelp.webp'
              width={32}
              height={40}
              className='w-4'
              alt='yelp logo'
            />
          </a>
          <a
            href='https://goo.gl/maps/8FHaqqzckjixYKap6'
            rel='noopener'
            target='_blank'
          >
            <Image
              src='/img/logos/google.webp'
              width={32}
              height={32}
              className='w-4'
              alt='google logo'
            />
          </a>
        </div>
        {/* COPYWRITING */}
        <p className='text-sm text-center text-gray-800'>
          &copy; {currentYear} Specialized Auto Tint <br /> Powered by{' '}
          <a
            href='https://webtamin.co/'
            target='_blank'
            rel='noopener'
            className='hover:text-primary'
          >
            Webtamin
          </a>
        </p>
      </div>
    </section>
  )
}

export default Footer
