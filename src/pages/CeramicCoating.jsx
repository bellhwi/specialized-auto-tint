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

export default function CeramicCoating() {
  const [isOpen, setIsOpen] = useState(null)
  const productsImageName = [
    'bg-fx-premium.png',
    'bg-color-stable.png',
    'bg-ir-ceramic.png',
    'bg-cr-crystalline.png',
  ]

  return (
    <section className='lg:mx-auto lg:relative bg-white'>
      <Navbar />
      <Image
        src='/img/ceramic-coating/hero.png'
        width={331}
        height={504}
        alt='super car'
        className='absolute inset-0 w-full z-20'
      />

      {/* main */}
      <section className='relative z-20 pt-52 lg:pt-72 '>
        <div className='container mx-auto'>
          <div className='text-center pt-8 px-8'>
            <p className='text-2xl text-gray-500 lg:text-5xl'>
              Best Quality of <span className='text-primary-color'>AUTO</span>
            </p>
            <p className='text-2xl text-primary-color lg:text-5xl'>
              SURFACE PROTECTION
            </p>
            <h1 className='uppercase text-3xl font-bold lg:text-6xl'>
              ceramic coating
            </h1>
            <p className='text-2xl text-primary-color lg:text-5xl'>
              THE LEGENDARY COATING REINVENTED
            </p>
            <div className='mt-4 text-left'>
              <p className='font-semibold text-color-primary'>
                REVOLUTIONARY TECHNOLOGY
              </p>
              <p>
                Q2 MOHS EVO uses fluoro modified polysilazanes for the first
                time in the car care industry.
              </p>
              <p className='text-color-primary'>Why is that so important?</p>
              <p>
                Modifying polysilazanes at the precursory stages bring enormous
                benefits on all levels: durability, chemical resistance or ease
                of use. Amazingly easy to apply and wipe off, yet extremely
                chemical resistant, Slick and smooth, yet very durable, Gloss
                and extreme hydrophobic are just value-added.
              </p>
            </div>
          </div>
        </div>
        {/* Maintenance */}
        <div className='space-y-4'>
          <div className='container mx-auto px-8'>
            <h2 className='uppercase text-3xl lg:text-5xl text-color-primary'>
              SPECIALIZED AUTO <br />{' '}
              <span className='font-bold'>
                MAINTENANCE <br />
                SYSTEM
              </span>
            </h2>
            <Image
              src='/img/ceramic-coating/maintenance.png'
              width={914}
              height={312}
              className='mt-4'
            />
            <div className='border border-b border-black w-36 mx-auto my-4'></div>
            <h3 className='text-center text-4xl lg:text-4xl'>Car Wash</h3>
            <p className='my-4'>
              Our car washing process involves a meticulous 100% hand wash,
              followed by careful drying of the exterior. Additionally, we
              thoroughly clean both the interior and exterior windows. Finally,
              we ensure a pristine result by vacuuming the interior.
            </p>
          </div>
          <Image
            src='/img/ceramic-coating/car-wash.png'
            width={331}
            height={151}
            className='w-full'
          />
        </div>
        <div className='space-y-4 pt-4'>
          <div className='container mx-auto px-8'>
            <div className='border border-b border-black w-36 mx-auto my-4'></div>
            <h3 className='text-center text-4xl lg:text-4xl'>Clay & Prep</h3>
            <p className='my-4'>
              Once the surface is clean, it is important to Clay & Prep the
              paint to remove any surface contamination that washing may not
              have been able to remove.
            </p>
          </div>
          <Image
            src='/img/ceramic-coating/clay-prep.png'
            width={330}
            height={151}
            className='w-full'
          />
        </div>
        <div className='space-y-4 pt-4'>
          <div className='container mx-auto px-8'>
            <div className='border border-b border-black w-36 mx-auto my-4'></div>
            <h3 className='text-center text-4xl lg:text-4xl'>
              Coating Application
            </h3>
            <p className='my-4'>
              Apply the product liberally to a whole panel, Once temperature and
              humidity rise, apply to smaller sections and wipe off immediately.
            </p>
          </div>
          <Image
            src='/img/ceramic-coating/coating.png'
            width={330}
            height={151}
            className='w-full'
          />
        </div>

        {/* Benefits */}
        <div className='mx-auto container p-8'>
          <h2 className='uppercase text-3xl lg:text-5xl text-color-primary'>
            Major
            <br /> <span className='font-bold'>benefits</span>
          </h2>
          <p className='uppercase text-color-primary text-sm md:text-base'>
            SPECIALIZED CERAMIC COATING BENEFITS <br />
            APPLIES TO ALL PAINT & CERTIFIED COATINGS
          </p>
          <Image
            src='/img/ceramic-coating/benefits.png'
            width={276}
            height={68}
          />
          {/* Details */}
          <div className='mt-8'>
            <p>CONSUMPTION : 15-25ml/car</p>
            <p>PH TOLERANCE: 2-11</p>
            <p>DURABILITY: 40KKM for 1 layer</p>
          </div>
          <div className='mt-4'>
            <p>DURABILITY | &#9733; &#9733; &#9733; &#9733; &#9733;</p>
            <p>GLOSS | &#9733; &#9733; &#9733; &#9733; &#9733;</p>
            <p>BEADING | &#9733; &#9733; &#9733; &#9733; &#9733;</p>
            <p>SELF-CLEANING | &#9733; &#9733; &#9733; &#9733; &#9733;</p>
          </div>
          <div className='mt-4'>
            <p>Quality Assurance</p>
            <p className='mt-2'>
              Our ceramic coating with Gyeonquartz warranty on the product
              itself, and Specialized Auto Tint 1 year limited warranty as well.
            </p>
          </div>
        </div>
      </section>

      {/* map and footer */}
      <section
        className='relative z-20'
        style={{
          backgroundImage: 'linear-gradient(to bottom, white 30%, #ccc)',
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
