'use client'
import Image from 'next/image'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { useState } from 'react'
import 'photoswipe/dist/photoswipe.css'

import { Gallery, Item } from 'react-photoswipe-gallery'

export default function Portfolio({ setOpenNav, setOpenQuote }) {
  const suvTruckArr = Array.from({ length: 27 }, (_, index) => index)
  const sedanSportArr = Array.from({ length: 40 }, (_, index) => index)

  return (
    <section className='lg:mx-auto relative  lg:w-2/3 lg:max-w-screen-lg'>
      <Image
        src='/img/bg-overlay.png'
        width={1025}
        height={6155}
        className='inset-0 absolute h-full'
      />
      <Navbar setOpenNav={setOpenNav} setOpenQuote={setOpenQuote} />
      <Image
        src='/img/portfolio/hero.png'
        width={1036}
        height={1243}
        alt='car'
        className='absolute inset-0 w-full z-20'
      />

      {/* main */}
      <section className='relative z-20 pt-56 lg:pt-108'>
        <div className='max-w-screen-md mx-auto px-8'>
          <h1 className='text-white uppercase text-center text-2xl lg:text-6xl'>
            portfolio
          </h1>
          <p className='font-thin text-gray-100 mt-4 '>
            We sincerely thank our customers for their support over the past 15
            years. We promise to continue to provide the best quality and
            service for customer satisfaction. <br />
          </p>
          <p className='text-white w-max text-sm ml-auto font-thin text-gray-100 mt-2'>
            -Specialized Auto Tint owner / Jae H Park
          </p>
          <Image
            src='/img/portfolio/owner.png'
            width={643}
            height={421}
            className='w-full my-4'
          />
          <h2 className='relative text-gray-400 text-center text-2xl font-thin'>
            Check our customer reviews on Google and Yelp.
          </h2>
          <p className='max-w-lg mx-auto  font-thin text-gray-100 mt-4 text-center'>
            &quot;I got my 2023 Tesla Model X tinted with the best tint, 3M
            Crystalline. Comparing another tint shops when it comes to the
            workmanship and tint quality, Specialized Auto Tint is on another
            level. Thanks for the great work gentlemen.&quot; <br></br>{' '}
            <span className='text-gray-400 text-sm inline-block mt-2'>
              - Dec. 20. 2023 Yelp -
            </span>
          </p>
        </div>
      </section>

      {/* Portfolio images */}
      <section className='py-8'>
        <div className='container mx-auto px-8'>
          <h3 className='relative text-xl lg:text-2xl text-white font-thin'>
            SUV & Truck
          </h3>
          <div className='grid grid-cols-2 gap-4 mt-2 relative'>
            <Gallery>
              {suvTruckArr.map((pic, index) => {
                return (
                  <Item
                    key={index}
                    original={`/img/portfolio/suv-and-truck/${pic}.jpg`}
                    thumbnail={`/img/portfolio/suv-and-truck/${pic}.jpg`}
                    width='4000'
                    height='3000'
                  >
                    {({ ref, open }) => (
                      <img
                        ref={ref}
                        onClick={open}
                        src={`/img/portfolio/suv-and-truck/${pic}.jpg`}
                        className='object-cover aspect-thumb'
                      />
                    )}
                  </Item>
                )
              })}
            </Gallery>
          </div>
          <h3 className='relative text-xl lg:text-2xl text-white font-thin mt-8'>
            Sedan & Sports
          </h3>
          <div className='grid grid-cols-2 gap-4 mt-2 relative'>
            <Gallery>
              {sedanSportArr.map((pic, index) => {
                return (
                  <Item
                    key={index}
                    original={`/img/portfolio/sedan-and-sport/${pic}.jpg`}
                    thumbnail={`/img/portfolio/sedan-and-sport/${pic}.jpg`}
                    width='4000'
                    height='3000'
                  >
                    {({ ref, open }) => (
                      <img
                        ref={ref}
                        onClick={open}
                        src={`/img/portfolio/sedan-and-sport/${pic}.jpg`}
                        className='object-cover w-full h-full'
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
    </section>
  )
}
