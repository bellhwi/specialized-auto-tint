'use client'
import Image from 'next/image'
import ProductsKo from '@/components/ProductsKo'
import Map from '@/components/Map'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { useState, useEffect } from 'react'
import Logo from '@/components/Logo'
import Link from 'next/link'
import QuoteModal from '@/components/QuoteModal'

export default function Main({ setOpenNav, setOpenQuote }) {
  const currentYear = new Date().getFullYear()
  const [isOpen, setIsOpen] = useState(null)

  const mobileProductsImageName = [
    'bg-fx-premium.webp',
    'bg-color-stable.webp',
    'bg-ir-ceramic.webp',
    'bg-cr-crystalline.webp',
  ]

  const desktopProductsImageName = [
    'bg-fx-premium_desktop.webp',
    'bg-color-stable_desktop.webp',
    'bg-ir-ceramic_desktop.webp',
    'bg-cr-crystalline_desktop.webp',
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

  // Preload all product images
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
    <section className='relative lg:mx-auto lg:w-1/2 lg:max-w-screen-lg'>
      <Navbar setOpenNav={setOpenNav} setOpenQuote={setOpenQuote} ko />
      <Image
        src='/img/services/bg-main.webp'
        width={1036}
        height={7200}
        alt='main background'
        className='absolute inset-0 z-20'
        priority
      />

      {/* main */}
      <section className='relative z-20 pt-48 sm:pt-88 lg:pt-80 2xl:pt-104'>
        <div>
          <div className='container mx-auto text-white w-full pt-8 px-8'>
            <p className='text-xl sm:text-3xl font-godic-bold text-gray-300'>
              최고급의 기준을 제시하는
            </p>
            <h1
              className='my-1 sm:my-2 uppercase sm:text-6xl text-4xl tracking-tight'
              style={{ fontFamily: 'Godic_bold, sans-serif' }}
            >
              자동차 윈도우 틴팅
            </h1>
            <div className='flex items-center space-x-2 sm:space-x-4'>
              <Image
                src='/img/logos/3m.webp'
                width={128}
                height={66}
                className='w-20 md:w-24'
                alt='3m logo'
              />
              <div className='w-5/6'>
                <p className=' text-primary text-2xl md:text-3xl font-godic-bold -mb-1'>
                  공인 딜러
                </p>
                <div className='flex items-center space-x-2'>
                  <p className='w-max text-xs md:text-base text-white'>
                    자동차 윈도우 필름
                  </p>
                  <div className='h-2 flex flex-grow md:w-48 md:flex-none'>
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
            className='container mx-auto flex text-white mt-8 items-start space-x-2 px-8'
          >
            <h2 className='font-bold relative top-0.5 uppercase text-xl md:text-2xl'>
              제품
            </h2>
            <ProductsKo isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
          {/* Mobile Products */}
          <div className='md:hidden'>
            {mobileProductsImageName.map((imageName, index) => (
              <Image
                key={imageName}
                src={`/img/services/${imageName}`}
                width={1036}
                height={6388}
                style={{ display: isOpen === index ? 'block' : 'none' }}
                alt={`${imageName} features`}
                className='w-full'
                priority
              />
            ))}
          </div>
          {/* Desktop Products */}
          <div className='hidden md:block'>
            {desktopProductsImageName.map((imageName, index) => (
              <Image
                key={imageName}
                src={`/img/services/${imageName}`}
                width={1036}
                height={6388}
                style={{ display: isOpen === index ? 'block' : 'none' }}
                alt={`${imageName} features`}
                className='w-full'
                priority
              />
            ))}
          </div>
        </div>
      </section>

      <section className='relative'>
        <Image
          src='/img/bg-overlay.webp'
          width={1036}
          height={7867}
          alt='gradient background'
          className='absolute inset-0 h-full'
          priority
        />
        <div className='relative container mx-auto justify-between px-8 flex text-white items-start '>
          {isOpen === null || isOpen === 3 ? null : (
            // Bottom Products
            <div className='pt-8 flex w-full'>
              <h2 className='uppercase text-xl mr-4 font-bold relative z-20'>
                제품
              </h2>
              <div className='relative z-20 grow'>
                <ProductsKo isOpen={isOpen} setIsOpen={setIsOpen} rest />
              </div>
            </div>
          )}
        </div>
        {/* why choose us */}
        <section className='relative z-20 mt-16'>
          <div className='container mx-auto px-8 text-sm text-gray-300 space-y-8 sm:space-y-16 lg:text-base'>
            <h2 className='text-custom flex justify-center relative	font-godic-regular text-gray-300 w-full px-4 sm:text-4xl  sm:w-max sm:mx-auto sm:px-8'>
              <Image
                src='/img/auto-window-tint/quote-1.webp'
                width={63}
                height={62}
                className='w-6 absolute top-0 left-0'
                alt='quote icon left'
              />
              최상의 품질을 <br className='md:hidden' />
              이렇게 제공해드립니다
              <Image
                src='/img/auto-window-tint/quote-2.webp'
                width={63}
                height={62}
                className='w-6 absolute bottom-0 right-0'
                alt='quote icon right'
              />
            </h2>
            {/* Service 1 */}
            <div className='text-gray-100'>
              <p className='font-godic-bold  text-white text-lg md:text-xl mb-4'>
                <span className='text-5xl font-godic-bold relative top-1'>
                  1
                </span>{' '}
                경력 15년 이상
              </p>

              <p className='font-godic-thin text-gray-100'>
                Specialized Auto Tint에서 제공해드리는 고품질 윈도우 틴팅
                서비스로 남다른 편안함을 경험해보세요. 15년 이상의 윈도우 틴팅
                경험을 통해 정밀하고 신속한 서비스를 보장해드립니다.
              </p>
            </div>
            {/* Service 2 */}
            <div className='text-gray-100 flex items-start '>
              <div className='md:w-2/3 md:mr-4 space-y-4'>
                <p className='font-godic-bold text-white text-lg md:text-xl mb-4'>
                  <span className='text-5xl font-godic-bold mr-1 relative top-1'>
                    2
                  </span>{' '}
                  컴퓨터화 필름 절단 시스템
                </p>
                <Image
                  src='/img/services/computerized-film-cutting-system.webp'
                  width={600}
                  height={400}
                  className='aspect-thumb rounded md:hidden'
                  alt='computerized film cutting system'
                />
                <p className='font-godic-thin text-gray-100'>
                  컴퓨터화 필름 절단 시스템으로 윈도우 틴팅 서비스를
                  제공해드립니다. 컴퓨터화 필름 절단 시스템은 차량의 사양에
                  정확하게 맞춰 윈도우 틴트 모양을 디지털로 생성합니다. 이후
                  컴퓨터로 차량의 제조사 및 모델에 맞춰 미리 정확하게 윈도우
                  틴트를 절단합니다. 따라서 타업체와 달리 윈도우 틴팅시 유리 및
                  고무 씰 손상의 위험이 없습니다.
                </p>
              </div>
              <Image
                src='/img/services/computerized-film-cutting-system.webp'
                width={600}
                height={400}
                className='hidden aspect-thumb rounded w-1/3 md:block'
                alt='computerized film cutting system'
              />
            </div>
            {/* Service 3 */}
            <div className='text-gray-100 flex items-start '>
              <div className='md:w-2/3 md:mr-4 space-y-4'>
                <p className='font-godic-bold  text-white text-lg md:text-xl mb-4'>
                  <span className='text-5xl font-godic-bold mr-1'>3</span>{' '}
                  윈도우 가장자리 셰이빙
                </p>

                <video
                  width='320'
                  height='240'
                  controls
                  muted
                  className='rounded w-full aspect-thumb md:hidden object-cover'
                  poster='/img/auto-window-tint/topshaving-thumb.webp'
                >
                  <source
                    src='/img/auto-window-tint/topshaving.mp4'
                    type='video/mp4'
                  />
                  Your browser does not support the video tag.
                </video>
                <p className='font-godic-thin text-gray-100'>
                  윈도우 위에 필름의 틈새가 보이지 않도록 가장자리를
                  셰이빙합니다. 이 공정을 통해 차량의 창문을 공장식의 매우
                  깔끔한 외관으로 마무리할 수 있습니다.
                </p>
              </div>
              <video
                width='320'
                height='240'
                controls
                muted
                className='rounded hidden w-full aspect-thumb md:block md:h-full md:w-1/3 object-cover'
                poster='/img/auto-window-tint/topshaving-thumb.webp'
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
              <div className='md:w-2/3 md:mr-4 space-y-4'>
                <div className='flex items-center md:mb-4'>
                  <p className='text-5xl text-white font-godic-bold mr-2'>4</p>

                  <p className='font-godic-bold  text-white text-lg leading-6 md:text-xl'>
                    열 수축법
                  </p>
                </div>
                <video
                  width='320'
                  height='240'
                  controls
                  muted
                  className='rounded w-full aspect-thumb md:hidden object-cover'
                  poster='/img/auto-window-tint/heat-shrinking-thumb.webp'
                >
                  <source
                    src='/img/auto-window-tint/heat-shrinking.mp4'
                    type='video/mp4'
                  />
                  Your browser does not support the video tag.
                </video>
                <p className='font-godic-thin text-gray-100'>
                  습식 열 수축법은 거품이 없는 매끄러운 마감을 내기 위해 창문과
                  틴트에 가하는 작업입니다. 틴트 설치 중 필름을 쉽게 조작할 수
                  있어 정확한 착용을 보장하며 주름이나 기포의 위험을 최소화할 수
                  있습니다.
                </p>
              </div>
              <video
                width='320'
                height='240'
                controls
                muted
                className='rounded w-full aspect-thumb hidden md:block md:w-1/3 md:h-full object-cover'
                poster='/img/auto-window-tint/heat-shrinking-thumb.webp'
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
              <p className='font-godic-bold text-white text-lg md:text-xl mb-4'>
                <span className='text-5xl font-godic-bold mr-1 relative top-1'>
                  5
                </span>{' '}
                품질보증{' '}
              </p>

              <p className='font-godic-thin text-gray-100'>
                모든 제품 및 서비스에 대해 3M 평생 품질보증이 제공됩니다.
                <div className='flex justify-end mt-1 lg:mt-0'>
                  <a
                    href='https://multimedia.3m.com/mws/media/157410O/lifetime-warranty-and-limited-remedy.pdf'
                    target='_blank'
                    rel='noopener'
                    className='flex items-center text-blue-300'
                  >
                    <Image
                      src='/icons/download.svg'
                      width={24}
                      height={24}
                      alt='download icon'
                      className='relative bottom-0.5'
                    />{' '}
                    3M 평생 품질보증.pdf
                  </a>
                </div>
              </p>
            </div>
          </div>
        </section>

        {/* contact */}
        <section
          className='mt-16 relative z-20 pb-8 bg-none footer-gradient'
          id='contact'
        >
          <div className='flex justify-between container mx-auto px-8 text-gray-100 text-sm mt-8 space-y-4 md:space-y-0'>
            <div className='w-max'>
              <h2 className='relative text-xl text-white uppercase font-godic-bold mb-4 md:text-2xl'>
                연락하기 & 오시는 길
              </h2>
              <div className='font-godic-regular relative flex text-white justify-between space-x-4'>
                <div className='text-lg text-nowrap space-y-1'>
                  <div className='flex items-center'>
                    <Image
                      src='/icons/phone.svg'
                      width={16}
                      height={16}
                      className='mr-1'
                      alt='phone icon'
                    />{' '}
                    전화하기
                  </div>
                  <div className='flex items-center'>
                    <Image
                      src='/icons/mail.svg'
                      width={16}
                      height={16}
                      alt='mail icon'
                      className='mr-1'
                    />{' '}
                    이메일 보내기
                  </div>
                  <div className='flex items-center'>
                    <Image
                      src='/icons/location.svg'
                      width={16}
                      height={16}
                      alt='location icon'
                      className='mr-1'
                    />{' '}
                    방문하기
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
              <div className='hidden md:block mx-auto w-max mt-8'>
                <Logo footer />
              </div>
              {/* SNS CONTAINER */}
              <div className='hidden mx-auto w-max mt-4 flex items-center space-x-6 md:flex'>
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
              <p className='hidden md:block text-xs text-center text-gray-600 mt-4'>
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
            <div className='hidden md:block relative w-1/2'>
              <iframe
                width='600'
                height='450'
                loading='lazy'
                allowFullScreen
                src='https://www.google.com/maps/embed/v1/place?q=place_id:ChIJycWP7-Pn3IARTiG7pd2l22I&key=AIzaSyAsYP4vnD1mFgX4wWBRRd6CT0O1_hPhg6s'
                className='w-full h-full absolute top-0 left-0 rounded border-0'
                title='map'
              ></iframe>
            </div>
          </div>
        </section>

        {/* map and footer */}
        <section
          className='relative z-20 md:hidden'
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

      {/* Pager */}
      <Link
        href='/ko/ceramic-coating'
        className='lg:hidden fixed top-1/2 right-0 transform -translate-y-1/2 z-20'
      >
        <Image src='/img/pager-right.png' width={32} height={32} />
      </Link>

      {/* Contact Button */}
      <QuoteModal ko />
    </section>
  )
}
