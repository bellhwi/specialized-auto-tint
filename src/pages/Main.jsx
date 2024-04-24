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

export default function Main() {
  const [isOpen, setIsOpen] = useState(null)
  const productsImageName = [
    'bg-fx-premium.png',
    'bg-color-stable.png',
    'bg-ir-ceramic.png',
    'bg-cr-crystalline.png',
  ]
  // useEffect(() => {
  //   if (isOpen) {
  //     document.body.style.overflow = 'hidden'
  //   } else {
  //     document.body.style.overflow = 'auto'
  //   }
  // }, [isOpen])

  return (
    <section className='lg:mx-auto lg:relative main'>
      <Navbar main />
      <Image
        src='/img/services/bg-main.png'
        width={1036}
        height={7200}
        alt='main background'
        className='absolute inset-0 z-20'
      />

      {/* main */}
      <section className='relative z-20 pt-52 lg:pt-72'>
        <div className='container mx-auto'>
          <div className='text-white pt-8 px-8'>
            <p className='text-2xl font-semibold lg:text-5xl'>
              The Highest Standard of
            </p>
            <h1 className='uppercase text-3xl font-bold lg:text-6xl'>
              auto window tint
            </h1>
            <div className='flex items-center space-x-4 mt-2'>
              <Image
                src='/img/logos/3m.png'
                width={574}
                height={296}
                className='w-1/6 lg:w-1/12'
              />
              <div className='w-5/6'>
                <p className='font-semibold text-primary text-2xl lg:text-3xl'>
                  Authorized Dealer
                </p>
                <div className='flex items-center space-x-2'>
                  <p className='w-max text-xs lg:text-sm'>
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
            className='flex text-white mt-8 items-start space-x-4 px-8'
          >
            <h2 className='uppercase text-xl font-semibold lg:text-2xl'>
              Product
            </h2>
            <Products isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
          {isOpen !== null && (
            <Image
              src={`/img/services/${productsImageName[isOpen]}`}
              width={1036}
              height={6388}
              priority={true}
              alt='services background'
            />
          )}
        </div>
      </section>

      <section>
        <div className='relative container mx-auto justify-between px-8 pt-8 flex text-white items-start '>
          <Image
            src='/img/bg-overlay.png'
            width={1036}
            height={7867}
            alt='main background'
            className='absolute inset-0'
          />
          {isOpen === null || isOpen === 3 ? null : (
            // Bottom Products
            <>
              <h2 className='uppercase text-xl mr-4 font-semibold relative z-20'>
                Product
              </h2>
              <div className='relative z-20 grow'>
                <Products isOpen={isOpen} setIsOpen={setIsOpen} rest />
              </div>
            </>
          )}
        </div>
        {/* why choose us */}
        <section className='relative z-20 mt-8'>
          <div className='container mx-auto px-8 text-sm text-gray-300 space-y-8 lg:text-base'>
            <h2 className='flex justify-center relative text-3xl text-white font-bold mx-auto w-max px-10 py-2 lg:text-4xl'>
              <Image
                src='/img/auto-window-tint/quote-1.png'
                width={63}
                height={62}
                className='w-8 absolute top-0 left-0'
              />
              How we provide <br className='md:hidden' />
              best quality of services
              <Image
                src='/img/auto-window-tint/quote-2.png'
                width={63}
                height={62}
                className='w-8 absolute bottom-0 right-0'
              />
            </h2>

            <div className='space-y-4'>
              <p className='text-white text-lg font-semibold lg:text-2xl'>
                <span className='text-4xl font-bold mr-2'>1</span> Computerized
                Film Cutting System
              </p>
              <Image
                src='/img/services/computerized-film-cutting-system.jpg'
                width={600}
                height={400}
              />
              <p>
                Computerized Film Cutting System-digitally generates and cuts
                window tint patterns to your vehicle&apos;s exact
                specifications, ensuring the best tint service every time.
                Unlike other vehicle window tint services,
                <span className='italic font-bold'>
                  we do not cut window tint on your vehicle,{' '}
                </span>
                which may risk damage to the glass and rubber seals.
              </p>
              <p>
                Specialized Auto Tint computers pre-cut every vehicle window
                tint to the exact make and model of your vehicle to provide the
                very best tint accuracy and vehicle security for our customers.
              </p>
            </div>
            <div className='space-y-4'>
              <p className='text-white text-lg font-semibold lg:text-2xl'>
                <span className='text-4xl font-bold mr-2'>2</span> Shaved Top
                Window Edge
              </p>
              <video width='320' height='240' controls className='w-full'>
                <source
                  src='/img/auto-window-tint/edging.mp4'
                  type='video/mp4'
                />
                Your browser does not support the video tag.
              </video>
              <p>
                Filed edges is a process where the film is positioned just over
                the edge of the window and then filed so that no actual gap is
                there to be seen.
              </p>
              <p>
                Our Shaved Top Window Edge{' '}
                <span className='italic font-bold'>
                  produce your auto window much more of a factory look and is
                  far more clean in appearance.
                </span>
              </p>
            </div>
            <div className='space-y-4'>
              <p className='text-white text-lg font-semibold lg:text-2xl'>
                <span className='text-4xl font-bold mr-2'>3</span> Prepare with
                Heat Shrinking Method
              </p>
              <video width='320' height='240' controls className='w-full'>
                <source
                  src='/img/auto-window-tint/heat-shrinking.mp4'
                  type='video/mp4'
                />
                Your browser does not support the video tag.
              </video>
              <p>
                The wet heat shrinking method is a technique used to install
                window tint with better control over the film and{' '}
                <span className='italic font-bold'>
                  achieve a seamless, bubble-free finish, which can lead to
                  imperfections and a subpar outcome,
                </span>{' '}
                wet shrinking involves applying a solution to both the window
                and the tint film.
              </p>
              <p>
                This added moisture allows for easy manipulation of the film
                during installation, ensuring a precise fit and minimizing the
                risk of creases or air bubbles.
              </p>
            </div>
            <div className='space-y-4'>
              <p className='text-white text-lg font-semibold lg:text-2xl'>
                <span className='text-4xl font-bold mr-2'>4</span> More than 15
                years of experience
              </p>

              <p>
                <span className='italic font-bold'>
                  Improve Your Comfort with Quality Window Tints
                </span>{' '}
                <br />
                When you are looking to add some character to your vehicle, let
                Specialized Auto Tint, Irvine provide you with quality window
                tinting.
              </p>
              <p>
                With over 15 years of experience, you can be sure our team will
                have your window tints installed quickly and correctly.
              </p>
            </div>
            <div className='space-y-4'>
              <p className='text-white text-lg font-semibold lg:text-2xl'>
                <span className='text-4xl font-bold mr-2'>5</span> Quality
                Assurance
              </p>

              <p>
                Our window tinting{' '}
                <span className='italic font-bold'>
                  comes with 3M lifetime warranty
                </span>{' '}
                on the product itself, as well as a lifetime warranty on all
                labor.{' '}
                <a
                  href='https://multimedia.3m.com/mws/media/157410O/lifetime-warranty-and-limited-remedy.pdf'
                  target='_blank'
                  rel='noopener'
                  className='text-blue-400'
                >
                  Learn more
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* contact */}
        <section className='my-8 relative z-20'>
          <div className='container mx-auto px-8 text-gray-300 text-sm mt-8 space-y-4'>
            <Image
              src='/img/bg-overlay.png'
              width={1036}
              height={7867}
              alt='main background'
              className='absolute inset-0'
            />
            <h2 className='relative text-2xl text-white font-semibold uppercase'>
              contact us & map
            </h2>
            <div className='flex items-center relative'>
              <i className='fa-solid fa-phone mr-2'></i>
              <p className='mr-2 w-20 text-base font-semibold'>Call Us</p>
              <a href='tel:9493419100' className='text-blue-400'>
                (949)341-9100
              </a>
            </div>
            <div className='flex items-center relative'>
              <i className='fa-solid fa-envelope mr-2'></i>
              <p className='mr-2 w-20 text-base font-semibold'>Email Us</p>
              <a href='mailto:irvinetint@gmail.com' className='text-blue-400'>
                irvinetint@gmail.com
              </a>
            </div>
            <div className='flex items-center relative'>
              <i className='fa-solid fa-location-dot mr-2'></i>
              <p className='mr-2 w-20 text-base font-semibold'>Visit Us</p>
              <p>8787 Irvine Center Dr, Irvine, CA 92618</p>
            </div>
          </div>
        </section>

        {/* map and footer */}
        <section>
          <div className='container mx-auto px-8'>
            <Map />
            <Footer />
          </div>
        </section>
      </section>
    </section>
  )
}
