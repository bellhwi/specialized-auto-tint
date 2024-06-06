'use client'
import Image from 'next/image'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import Link from 'next/link'
import QuoteModal from '@/components/QuoteModal'

export default function PortfolioKo({ setOpenNav, setOpenQuote }) {
  const suvTruckArr = Array.from({ length: 27 }, (_, index) => index)
  const sedanSportArr = Array.from({ length: 40 }, (_, index) => index)
  return (
    <section className='lg:mx-auto relative  lg:w-1/2 lg:max-w-screen-lg '>
      <Image
        src='/img/bg-overlay.webp'
        width={1025}
        height={6155}
        className='inset-0 absolute h-full'
        alt='gradient background'
        priority
      />
      <Navbar setOpenNav={setOpenNav} setOpenQuote={setOpenQuote} ko />
      <Image
        src='/img/portfolio/hero.webp'
        width={1036}
        height={1243}
        alt='super car'
        className='absolute inset-0 w-full z-20'
        priority
      />

      {/* main */}
      <section className='relative z-20 pt-56 md:pt-100 lg:pt-96  2xl:pt-108'>
        <div className='max-w-screen-md mx-auto px-8'>
          <h1
            className='text-white uppercase text-center text-4xl sm:text-6xl'
            style={{ fontFamily: 'Godic_bold, sans-serif' }}
          >
            포트폴리오
          </h1>
          <p className='font-thin text-gray-100 mt-4 text-sm lg:text-base'>
            지난 15년간 성원해주신 고객님들께 진심으로 감사드립니다. 앞으로도
            고객 만족을 위해 최고의 품질과 서비스를 제공할 것을 약속드립니다.
          </p>
          <p className='text-white text-right text-sm lg:text-base font-thin text-gray-100 mt-2'>
            -Specialized Auto Tint 대표 / 박재형
          </p>
          <Image
            src='/img/portfolio/owner.webp'
            width={643}
            height={421}
            className='w-full my-4'
            alt='owner of Specialized Auto Tint'
          />
          <h2 className='relative text-gray-400 text-center text-2xl md:text-3xl font-thin'>
            구글과 옐프 후기를 확인해보세요.
          </h2>
          <p className='max-w-lg mx-auto  font-thin text-gray-100 mt-4 text-center text-sm lg:text-base'>
            &quot;2023년형 테슬라 모델 X를 최고의 틴트인 3M Crystalline으로
            했습니다. 다른 틴트 가게들과 비교해보면, Specialized Auto Tint는
            서비스 기술과 품질면에서 차원이 다릅니다. 훌륭한 작업을 해주셔서
            감사합니다.&quot; <br></br>{' '}
            <span className='text-gray-400 inline-block mt-2'>
              - 2023년 12월 20일 Yelp -
            </span>
          </p>
        </div>
      </section>

      {/* Portfolio images */}
      <section className='py-8'>
        <div className='container mx-auto px-8'>
          <div className='relative flex justify-between items-center lg:justify-start'>
            <h3 className='relative text-xl md:text-2xl text-white font-thin lg:mr-4'>
              SUV & 트럭
            </h3>
            <div className='text-white relative flex items-center lg:hidden'>
              <Image
                src='/icons/expand.svg'
                width={16}
                height={16}
                alt='expand icon'
                className='mr-1'
              />
              <span className='relative top-0.5 text-gray-400'>
                이미지 클릭하여 확대하기
              </span>
            </div>
            {/* Desktop image expand hint */}
            <div className='hidden text-white flex text-lg items-center absolute -right-56 top-36 lg:flex'>
              <Image
                src='/icons/arrow-left.svg'
                width={24}
                height={24}
                alt='expand icon'
                className='mr-1'
              />
              <span className='relative top-0.5 text-gray-400'>
                이미지 클릭하여 확대하기
              </span>
            </div>
          </div>
          <div className='grid grid-cols-2 gap-4 mt-2 relative'>
            <Gallery>
              {suvTruckArr.map((pic, index) => {
                return (
                  <Item
                    key={index}
                    original={`/img/portfolio/suv-and-truck/${pic}.webp`}
                    thumbnail={`/img/portfolio/suv-and-truck/${pic}.webp`}
                    width='1280'
                    height='960'
                  >
                    {({ ref, open }) => (
                      <Image
                        ref={ref}
                        onClick={open}
                        src={`/img/portfolio/suv-and-truck/${pic}.webp`}
                        className='object-cover aspect-thumb'
                        width='1280'
                        height='960'
                        alt={`suv and truck ${pic}`}
                      />
                    )}
                  </Item>
                )
              })}
            </Gallery>
          </div>
          <div className='mt-16 flex justify-between items-center lg:justify-start'>
            <h3 className='relative text-xl md:text-2xl text-white font-thin lg:mr-4'>
              세단 & 스포츠
            </h3>
            <div className='text-white relative flex items-center lg:hidden'>
              <Image
                src='/icons/expand.svg'
                width={16}
                height={16}
                alt='expand icon'
                className='mr-1'
              />
              <span className='relative  top-0.5 text-gray-400'>
                이미지 클릭하여 확대하기
              </span>
            </div>
          </div>
          <div className='grid grid-cols-2 gap-4 mt-2 relative'>
            <Gallery>
              {sedanSportArr.map((pic, index) => {
                return (
                  <Item
                    key={index}
                    original={`/img/portfolio/sedan-and-sport/${pic}.webp`}
                    thumbnail={`/img/portfolio/sedan-and-sport/${pic}.webp`}
                    width='1280'
                    height='960'
                  >
                    {({ ref, open }) => (
                      <Image
                        ref={ref}
                        onClick={open}
                        src={`/img/portfolio/sedan-and-sport/${pic}.webp`}
                        className='object-cover aspect-thumb'
                        width='1280'
                        height='960'
                        alt={`sedan and sports car ${pic}`}
                      />
                    )}
                  </Item>
                )
              })}
            </Gallery>
          </div>
        </div>
      </section>

      {/* map and footer */}
      <section
        className='relative z-20'
        style={{
          backgroundImage: 'linear-gradient(to bottom, transparent, white 85%)',
        }}
      >
        <section className='container mx-auto px-8'>
          <Footer />
        </section>
      </section>

      {/* Pager */}
      <Link
        href='/ko/ceramic-coating'
        className='lg:hidden fixed top-1/2 left-0 transform -translate-y-1/2 z-20'
      >
        <Image src='/img/pager-left.png' width={32} height={32} />
      </Link>

      {/* Contact Button */}
      <QuoteModal ko />
    </section>
  )
}
