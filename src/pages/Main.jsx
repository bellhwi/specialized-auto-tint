'use client'
import Image from 'next/image'
import Products from '@/components/Products'
import Hero from '@/components/Hero'
import WhyChooseUs from '@/components/WhyChooseUs'
import Heading from '@/components/Heading'
import Description from '@/components/Description'
import Contact from '@/components/Contact'
import Map from '@/components/Map'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Accordion from '@/components/Accordion'
import { useState, useRef, useEffect } from 'react'
import { products } from '@/data/data'
import Logo from '@/components/Logo'

export default function Main({ setOpenNav, setOpenQuote }) {
  const currentYear = new Date().getFullYear()
  const [isOpen, setIsOpen] = useState(null)

  const mobileProductsImageName = [
    'bg-fx-premium.png',
    'bg-color-stable.png',
    'bg-ir-ceramic.png',
    'bg-cr-crystalline.png',
  ]

  const desktopProductsImageName = [
    'bg-fx-premium_desktop.png',
    'bg-color-stable_desktop.png',
    'bg-ir-ceramic_desktop.png',
    'bg-cr-crystalline_desktop.png',
  ]

  const allProductsImageName = [
    ...mobileProductsImageName,
    ...desktopProductsImageName,
  ]
  useEffect(() => {
    const scrollToBottom = sessionStorage.getItem('scrollToBottom')

    if (scrollToBottom === 'true') {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
      sessionStorage.removeItem('scrollToBottom') // Clear the flag
    }
  }, [])

  useEffect(() => {
    const preloadDiv = document.createElement('div')
    preloadDiv.style.display = 'none'
    document.body.appendChild(preloadDiv)

    allProductsImageName.forEach((imageName) => {
      const img = new window.Image()
      img.src = `/img/services/${imageName}`
      preloadDiv.appendChild(img)
    })

    return () => {
      if (document.body.contains(preloadDiv)) {
        document.body.removeChild(preloadDiv)
      }
    }
  }, [])

  return (
    <section className='relative lg:mx-auto lg:w-2/3 lg:max-w-screen-lg'>
      <Navbar main setOpenNav={setOpenNav} setOpenQuote={setOpenQuote} />
      <Image
        src='/img/services/bg-main.png'
        width={1036}
        height={7200}
        alt='main background'
        className='absolute inset-0 z-20'
      />

      {/* main */}
      <section className='relative z-20 pt-48 lg:pt-96 xl:pt-100 2xl:pt-104'>
        <div className='container mx-auto'>
          <div className='text-white w-full pt-8 px-8'>
            <p className='text-xl lg:text-4xl font-godic-bold text-gray-300'>
              The Highest Standard of
            </p>
            <h1 className='lg:my-2 uppercase lg:text-5xl text-xl tracking-tight'>
              window tinting {''}
              <span className='text-xs lg:text-2xl'>in irvine</span>
            </h1>
            <div className='flex items-center space-x-2'>
              <Image
                src='/img/logos/3m.png'
                width={574}
                height={296}
                className='w-16 lg:w-20'
              />
              <div className='w-5/6'>
                <p className=' text-primary text-xl lg:text-3xl font-godic-bold -mb-1'>
                  Authorized Dealer
                </p>
                <div className='flex items-center space-x-2'>
                  <p className='w-max text-xs lg:text-sm text-white'>
                    Automotive Window Films
                  </p>
                  <div className='h-2 flex flex-grow lg:w-48 lg:flex-none'>
                    <div className='bg-white h-full w-1/6'></div>
                    <div className='bg-zinc-200 h-full w-1/6'></div>
                    <div className='bg-zinc-400 h-full w-1/6'></div>
                    <div className='bg-zinc-500 h-full w-1/6'></div>
                    <div className='bg-zinc-700 h-full w-1/6'></div>
                    <div className='bg-zinc-800 h-full w-1/6'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Top Products */}
          <div
            id='products'
            className='flex text-white mt-8 items-start space-x-2 px-8'
          >
            <h2 className='font-bold relative top-0.5 uppercase text-xl lg:text-2xl'>
              Product
            </h2>
            <Products isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
          {/* Mobile Products */}
          <div className='lg:hidden'>
            {mobileProductsImageName.map((imageName, index) => (
              <Image
                key={imageName}
                src={`/img/services/${imageName}`}
                width={1036}
                height={6388}
                style={{ display: isOpen === index ? 'block' : 'none' }}
                alt='services background'
                className='w-full md:w-1/2 md:mx-auto'
              />
            ))}
          </div>
          {/* Desktop Products */}
          <div className='hidden lg:block'>
            {desktopProductsImageName.map((imageName, index) => (
              <Image
                key={imageName}
                src={`/img/services/${imageName}`}
                width={1036}
                height={6388}
                style={{ display: isOpen === index ? 'block' : 'none' }}
                alt='services background'
                className='w-full'
              />
            ))}
          </div>
        </div>
      </section>

      <section className='relative'>
        <Image
          src='/img/bg-overlay.png'
          width={1036}
          height={7867}
          alt='main background'
          className='absolute inset-0 h-full'
        />
        <div className='relative container mx-auto justify-between px-8 flex text-white items-start '>
          {isOpen === null || isOpen === 3 ? null : (
            // Bottom Products
            <div className='pt-8 flex w-full'>
              <h2 className='uppercase text-xl mr-4 font-bold relative z-20'>
                Product
              </h2>
              <div className='relative z-20 grow'>
                <Products isOpen={isOpen} setIsOpen={setIsOpen} rest />
              </div>
            </div>
          )}
        </div>
        {/* why choose us */}
        <section className='relative z-20 pt-12'>
          <div className='container mx-auto px-8 text-sm text-gray-300 space-y-4 lg:text-base'>
            <h2 className='flex justify-center relative text-3xl	font-godic-regular text-gray-300 w-full px-4 lg:text-4xl lg:w-max lg:mx-auto lg:px-8'>
              <Image
                src='/img/auto-window-tint/quote-1.png'
                width={63}
                height={62}
                className='w-6 absolute top-0 left-0'
              />
              How we provide <br className='lg:hidden' />
              best quality of services
              <Image
                src='/img/auto-window-tint/quote-2.png'
                width={63}
                height={62}
                className='w-6 absolute bottom-0 right-0'
              />
            </h2>
            {/* Service 1 */}
            <div className='text-gray-100 lg:pt-8'>
              <p className='font-godic-bold  text-white text-lg lg:text-xl mb-4'>
                <span className='text-5xl font-godic-bold mr-1 relative top-1'>
                  1
                </span>{' '}
                More than <span className='text-xl lg:text-2xl'>15 years</span>{' '}
                of experience
              </p>

              <p className='font-godic-thin text-gray-100'>
                Improve your comfort with quality window tints. When you are
                looking to add some character to your vehicle, let Specialized
                Auto Tint provide you with quality window tinting in irvine.
                With over 15 years of experience, you can be sure our team will
                have your window tints installed quickly and correctly.
              </p>
            </div>
            {/* Service 2 */}
            <div className='text-gray-100 flex items-start lg:py-8'>
              <div className='lg:w-2/3 lg:mr-4 space-y-4'>
                <p className='font-godic-bold text-white text-lg lg:text-xl mb-4'>
                  <span className='text-5xl font-godic-bold mr-1 relative top-1'>
                    2
                  </span>{' '}
                  Computerized Film Cutting System
                </p>
                <Image
                  src='/img/services/computerized-film-cutting-system.webp'
                  width={600}
                  height={400}
                  className='aspect-thumb rounded lg:hidden'
                />
                <p className='font-godic-thin text-gray-100'>
                  Computerized Film Cutting System-digitally generates and cuts
                  window tint patterns to your vehicle&apos;s exact
                  specifications, ensuring the best tint service every time.
                </p>
                <p className='font-godic-thin text-gray-100'>
                  Unlike other vehicle window tint services,
                  <span className='italic font-bold'>
                    we do not cut window tint on your vehicle,{' '}
                  </span>
                  which may risk damage to the glass and rubber seals.
                  Specialized Auto Tint computers pre-cut every vehicle window
                  tint to the exact make and model of your vehicle to provide
                  the very best tint accuracy and vehicle security for our
                  customers.
                </p>
              </div>
              <Image
                src='/img/services/computerized-film-cutting-system.webp'
                width={600}
                height={400}
                className='hidden aspect-thumb rounded w-1/3 lg:block'
              />
            </div>
            {/* Service 3 */}
            <div className='text-gray-100 flex items-start lg:py-8'>
              <div className='lg:w-2/3 lg:mr-4 space-y-4'>
                <p className='font-godic-bold  text-white text-lg lg:text-xl mb-4'>
                  <span className='text-5xl font-godic-bold mr-1'>3</span>{' '}
                  Shaved Top Window Edge
                </p>

                <video
                  width='320'
                  height='240'
                  controls
                  muted
                  className='rounded w-full aspect-thumb lg:hidden object-cover'
                  poster='/img/auto-window-tint/topshaving-thumb.png'
                >
                  <source
                    src='/img/auto-window-tint/topshaving.mp4'
                    type='video/mp4'
                  />
                  Your browser does not support the video tag.
                </video>
                <p className='font-godic-thin text-gray-100'>
                  Filed edges is a process where the film is positioned just
                  over the edge of the window and then filed so that no actual
                  gap is there to be seen. Our Shaved Top Window Edge{' '}
                  <span className='italic font-bold'>
                    produce your auto window much more of a factory look and is
                    far more clean in appearance.
                  </span>
                </p>
              </div>
              <video
                width='320'
                height='240'
                controls
                muted
                className='rounded hidden w-full aspect-thumb lg:block lg:h-full lg:w-1/3 object-cover'
                poster='/img/auto-window-tint/topshaving-thumb.png'
              >
                <source
                  src='/img/auto-window-tint/topshaving.mp4'
                  type='video/mp4'
                />
                Your browser does not support the video tag.
              </video>
            </div>
            {/* Service 4 */}
            <div className='text-gray-100 flex items-start'>
              <div className='lg:w-2/3 lg:mr-4 space-y-4'>
                <div className='flex items-center lg:mb-4'>
                  <p className='text-5xl text-white font-godic-bold mr-2'>4</p>

                  <p className='font-godic-bold  text-white text-lg leading-6 lg:text-xl'>
                    Prepare with <br className='lg:hidden'></br>Heat Shrinking
                    Method
                  </p>
                </div>
                <video
                  width='320'
                  height='240'
                  controls
                  muted
                  className='rounded w-full aspect-thumb lg:hidden object-cover'
                  poster='/img/auto-window-tint/heat-shrinking-thumb.png'
                >
                  <source
                    src='/img/auto-window-tint/heat-shrinking.mp4'
                    type='video/mp4'
                  />
                  Your browser does not support the video tag.
                </video>
                <p className='font-godic-thin text-gray-100'>
                  The wet heat shrinking method is a technique used to install
                  window tint with better control over the film and{' '}
                  <span className='italic font-bold'>
                    achieve a seamless, bubble-free finish, which can lead to
                    imperfections and a subpar outcome,
                  </span>{' '}
                  wet shrinking involves applying a solution to both the window
                  and the tint film.
                </p>
                <p className='font-godic-thin text-gray-100'>
                  This added moisture allows for easy manipulation of the film
                  during installation, ensuring a precise fit and minimizing the
                  risk of creases or air bubbles.
                </p>
              </div>
              <video
                width='320'
                height='240'
                controls
                muted
                className='rounded w-full aspect-thumb hidden lg:block lg:w-1/3 lg:h-full object-cover'
                poster='/img/auto-window-tint/heat-shrinking-thumb.png'
              >
                <source
                  src='/img/auto-window-tint/heat-shrinking.mp4'
                  type='video/mp4'
                />
                Your browser does not support the video tag.
              </video>
            </div>
            {/* Service 5 */}
            <div className='text-gray-100'>
              <p className='font-godic-bold text-white text-lg lg:text-xl mb-4'>
                <span className='text-5xl font-godic-bold mr-1 relative top-1'>
                  5
                </span>{' '}
                Quality Assurance
              </p>

              <p className='font-godic-thin text-gray-100'>
                Our window tinting{' '}
                <span className='italic font-bold'>
                  comes with 3M lifetime warranty
                </span>{' '}
                on the product itself, as well as a lifetime warranty on all
                labor.{' '}
                <div className='flex justify-end mt-1 lg:mt-0'>
                  <a
                    href='https://multimedia.3m.com/mws/media/157410O/lifetime-warranty-and-limited-remedy.pdf'
                    target='_blank'
                    rel='noopener'
                    className='inline-block text-blue-300'
                  >
                    <i className='fa-solid fa-download mr-1'></i> 3M Lifetime
                    Warranty.pdf
                  </a>
                </div>
              </p>
            </div>
          </div>
        </section>

        {/* contact */}
        <section
          className='mt-8 relative z-20 pb-8 contact bg-none'
          id='contact'
        >
          <div className='flex justify-between container mx-auto px-8 text-gray-100 text-sm mt-8 space-y-4 lg:space-y-0'>
            <div className='w-max'>
              <h2 className='relative text-xl text-white uppercase font-godic-bold mb-8 lg:text-2xl'>
                contact us & map
              </h2>
              <div className='font-godic-regular relative flex text-white justify-between space-x-4'>
                <div className='text-lg text-nowrap space-y-1'>
                  <div>
                    <i className='fa-solid fa-phone mr-1'></i> Call Us
                  </div>
                  <div>
                    <i className='fa-solid fa-envelope mr-1'></i> Email Us
                  </div>
                  <div>
                    <i className='fa-solid fa-location-dot mr-2'></i> Visit Us
                  </div>
                </div>
                <div className='text-base leading-7 grow space-y-1'>
                  <a
                    href='tel:9493419100'
                    className='w-max block text-blue-300'
                  >
                    (949) 341-9100
                  </a>
                  <a
                    href='mailto:irvinetint@gmail.com'
                    className='w-max block text-blue-300'
                  >
                    irvinetint@gmail.com
                  </a>
                  <p className='block text-gray-100 leading-normal relative top-0.5'>
                    8787 Irvine Center Dr. <br></br>
                    Irvine, CA 92618
                  </p>
                </div>
              </div>
              <div className='hidden lg:block mx-auto w-max mt-8'>
                <Logo footer />
              </div>
              {/* COPYWRITING */}
              <p className='hidden lg:block text-xs text-center text-gray-600 mt-4'>
                &copy; {currentYear} Specialized Auto Tint x Powered by{' '}
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
            <div className='hidden lg:block relative w-1/2'>
              <iframe
                width='600'
                height='450'
                loading='lazy'
                allowfullscreen
                src='https://www.google.com/maps/embed/v1/place?q=place_id:ChIJycWP7-Pn3IARTiG7pd2l22I&key=AIzaSyAsYP4vnD1mFgX4wWBRRd6CT0O1_hPhg6s'
                className='w-full h-full absolute top-0 left-0 rounded border-0'
              ></iframe>
            </div>
          </div>
        </section>

        {/* map and footer */}
        <section
          className='relative z-20 lg:hidden'
          style={{
            backgroundImage:
              'linear-gradient(to bottom, transparent 30%, white 85%)',
          }}
        >
          <div className='container mx-auto px-8'>
            <Map />
            <Footer />
          </div>
        </section>
      </section>
    </section>
  )
}
