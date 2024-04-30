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
import 'photoswipe/dist/photoswipe.css'

import { Gallery, Item } from 'react-photoswipe-gallery'

export default function Portfolio({ setOpenNav }) {
  const suvArr = Array.from({ length: 34 }, (_, index) => index)
  const truckArr = Array.from({ length: 5 }, (_, index) => index)
  const sedanArr = Array.from({ length: 56 }, (_, index) => index)
  const sportArr = Array.from({ length: 10 }, (_, index) => index)

  const [isOpen, setIsOpen] = useState(null)
  const productsImageName = [
    'bg-fx-premium.png',
    'bg-color-stable.png',
    'bg-ir-ceramic.png',
    'bg-cr-crystalline.png',
  ]

  return (
    <section className='lg:mx-auto lg:relative bg-black'>
      <Navbar setOpenNav={setOpenNav} />
      <Image
        src='/img/portfolio/hero.png'
        width={1036}
        height={1243}
        alt='car'
        className='absolute inset-0 w-full z-20'
      />

      {/* main */}
      <section className='relative z-20 pt-56 lg:pt-72 '>
        <div className='container mx-auto text-center px-8'>
          <h1 className='text-white uppercase text-2xl lg:text-6xl'>
            portfolio
          </h1>
          <p className='text-sm font-thin text-gray-100 mt-4 text-justify'>
            We sincerely thank our customers for their support over the past 15
            years. We promise to continue to provide the best quality and
            service for customer satisfaction. <br />
          </p>
          <p className='text-white text-xs ml-auto font-thin text-gray-100 mt-2'>
            -Specialized Auto Tint owner / Jae H Park
          </p>
          <Image
            src='/img/portfolio/owner.png'
            width={643}
            height={421}
            className='w-full my-4'
          />
          <h2 className='relative text-2xl text-white font-thin'>
            Check our customer reviews on Google and Yelp.
          </h2>
          <p className='text-sm font-thin text-gray-400 mt-4 text-center'>
            &quot;I got my 2023 Tesla Model X tinted with the best tint, 3M
            Crystalline. Comparing another tint shops when it comes to the
            workmanship and tint quality, Specialized Auto Tint is on another
            level. Thanks for the great work gentlemen.&quot; <br></br> -
            Dec.20.2023 Yelp -
          </p>
        </div>
      </section>

      {/* Portfolio images */}
      <section className='py-8'>
        <div className='container mx-auto px-8'>
          <h3 className='relative text-lg text-white font-thin'>SUV & Truck</h3>
          <div className='grid grid-cols-2 gap-4 mt-4'>
            <Gallery>
              {suvArr.map((pic, index) => {
                return (
                  <Item
                    key={index}
                    original={`/img/portfolio/suv/${pic}.jpg`}
                    thumbnail={`/img/portfolio/suv/${pic}.jpg`}
                    width='4000'
                    height='3000'
                  >
                    {({ ref, open }) => (
                      <img
                        ref={ref}
                        onClick={open}
                        src={`/img/portfolio/suv/${pic}.jpg`}
                      />
                    )}
                  </Item>
                )
              })}
              {truckArr.map((pic, index) => {
                return (
                  <Item
                    key={index}
                    original={`/img/portfolio/truck/${pic}.jpg`}
                    thumbnail={`/img/portfolio/truck/${pic}.jpg`}
                    width='4000'
                    height='3000'
                  >
                    {({ ref, open }) => (
                      <img
                        ref={ref}
                        onClick={open}
                        src={`/img/portfolio/truck/${pic}.jpg`}
                      />
                    )}
                  </Item>
                )
              })}
            </Gallery>
          </div>
          <h3 className='relative text-lg text-white font-thin mt-8'>
            Sedan & Sports
          </h3>
          <div className='grid grid-cols-2 gap-4 mt-4'>
            <Gallery>
              {sedanArr.map((pic, index) => {
                return (
                  <Item
                    key={index}
                    original={`/img/portfolio/sedan/${pic}.jpg`}
                    thumbnail={`/img/portfolio/sedan/${pic}.jpg`}
                    width='4000'
                    height='3000'
                  >
                    {({ ref, open }) => (
                      <img
                        ref={ref}
                        onClick={open}
                        src={`/img/portfolio/sedan/${pic}.jpg`}
                      />
                    )}
                  </Item>
                )
              })}
              {sportArr.map((pic, index) => {
                return (
                  <Item
                    key={index}
                    original={`/img/portfolio/sport/${pic}.jpg`}
                    thumbnail={`/img/portfolio/sport/${pic}.jpg`}
                    width='4000'
                    height='3000'
                  >
                    {({ ref, open }) => (
                      <img
                        ref={ref}
                        onClick={open}
                        src={`/img/portfolio/sport/${pic}.jpg`}
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
          backgroundImage: 'linear-gradient(to bottom, black 30%, white 85%)',
        }}
      >
        <section className='container mx-auto px-8'>
          <Map />
          <Footer />
        </section>
      </section>
    </section>
  )
}
