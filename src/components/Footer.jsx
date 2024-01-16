import Logo from './Logo'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <section className='py-8 bg-primary'>
      <div className='flex flex-col justify-center items-center text-gray-100 space-y-4'>
        <Logo footer />
        {/* SNS CONTAINER */}
        <div className='flex items-center space-x-6'>
          <a
            href='https://www.yelp.com/biz/specialized-auto-tint-irvine'
            rel='noopener'
            target='_blank'
          >
            <i class='fa-brands fa-yelp'></i>
          </a>
          <a
            href='https://goo.gl/maps/8FHaqqzckjixYKap6'
            rel='noopener'
            target='_blank'
          >
            <i class='fa-brands fa-google'></i>
          </a>
        </div>
        {/* COPYWRITING */}
        <small>
          &copy; {currentYear} Specialized Auto Tint x Powered by{' '}
          <a href='https://webtamin.co/en' target='_blank' rel='noopener'>
            Webtamin
          </a>
        </small>
      </div>
    </section>
  )
}

export default Footer
