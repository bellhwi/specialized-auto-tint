'use client'
import Image from 'next/image'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

export default function CeramicCoating({ setOpenNav, setOpenQuote }) {
  return (
    <section className='lg:mx-auto lg:relative bg-white lg:w-2/3 lg:max-w-screen-lg'>
      <Navbar setOpenNav={setOpenNav} setOpenQuote={setOpenQuote} />
      <Image
        src='/img/ceramic-coating/hero.webp'
        width={1181}
        height={1705}
        alt='ceramic coating car'
        className='absolute inset-0 w-full z-20'
        priority
      />

      {/* main */}
      <section className='relative z-20 pt-44 md:pt-88 xl:pt-100 2xl:pt-104 '>
        <div className='container mx-auto'>
          <div className='pt-8 px-8'>
            <p className='text-gray-600 md:text-3xl lg:text-4xl font-godic-bold'>
              Best Quality of Auto Surface Protection
            </p>
            <h1 className='md:py-2 text-color-primary uppercase text-2xl md:text-5xl'>
              ceramic coating <br className='lg:hidden'></br>
              <span className='lg:text-2xl'>for cars</span>
            </h1>
            <div className='mt-4 text-left'>
              <p className='font-godic-bold text-color-primary md:text-xl'>
                REVOLUTIONARY TECHNOLOGY
              </p>
              <p className='leading-normal'>
                Q2 MOHS EVO uses fluoro modified polysilazanes for the first
                time in the car care industry.
              </p>
              <p className='mt-4 font-godic-bold '>Why is that so important?</p>
              <p className='leading-normal'>
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
        <div className='space-y-4 mt-16'>
          <div className='container mx-auto px-8'>
            <h2 className='uppercase text-3xl font-godic-thin md:text-5xl text-color-primary'>
              SPECIALIZED AUTO <br />{' '}
              <span className='font-godic-bold font-bold md:text-6xl'>
                MAINTENANCE <br />
                SYSTEM
              </span>
            </h2>
            <Image
              src='/img/ceramic-coating/maintenance.webp'
              width={640}
              height={218}
              className='mt-8 mx-auto md:w-2/3'
              alt='car maintenance'
            />
            <div className='border border-b border-gray-700 w-32 mx-auto mt-8'></div>
            <h3 className='mt-4 text-gray-700 text-center text-3xl md:text-5xl font-sarang '>
              Car Wash
            </h3>
            <p className='my-4 font-godic-thin  leading-normal text-center'>
              Our car washing process involves a meticulous 100% hand wash,
              followed by careful drying of the exterior.{' '}
              <br className='hidden lg:block'></br>Additionally, we thoroughly
              clean both the interior and exterior windows.{' '}
              <br className='hidden lg:block'></br>Finally, we ensure a pristine
              result by vacuuming the interior.
            </p>
          </div>
          <Image
            src='/img/ceramic-coating/car-wash.webp'
            width={1024}
            height={467}
            className='w-full pt-8'
            alt='car wash'
          />
        </div>
        <div className='space-y-4 pt-8'>
          <div className='container mx-auto px-8'>
            <div className='border border-b border-gray-700 w-32 mx-auto my-4'></div>
            <h3 className='text-gray-700 text-center text-3xl md:text-5xl font-sarang '>
              Clay & Prep
            </h3>
            <p className='my-4 text-center font-godic-thin  leading-normal'>
              Once the surface is clean, it is important to Clay & Prep the
              paint to remove <br className='hidden lg:block'></br>any surface
              contamination that washing may not have been able to remove.
            </p>
          </div>
          <Image
            src='/img/ceramic-coating/clay-prep.webp'
            width={1024}
            height={467}
            className='w-full pt-8'
            alt='clay and prep'
          />
        </div>
        <div className='space-y-4 pt-8'>
          <div className='container mx-auto px-8'>
            <div className='border border-b border-gray-700 w-32 mx-auto my-4'></div>
            <h3 className='text-gray-700 text-center text-3xl md:text-5xl font-sarang '>
              Coating Application
            </h3>
            <p className='my-4 font-godic-thin text-center leading-normal'>
              Apply the product liberally to a whole panel. <br></br> Once
              temperature and humidity rise, apply to smaller sections and wipe
              off immediately.
            </p>
          </div>
          <Image
            src='/img/ceramic-coating/coating.webp'
            width={1024}
            height={467}
            className='w-full pt-8'
            alt='coating application'
          />
        </div>

        {/* Benefits */}
        <div className='mx-auto container pt-16 pb-8 px-8 md:text-xl'>
          <h2 className='uppercase text-3xl md:text-6xl text-color-primary font-godic-thin'>
            Major
            <br /> <span className='font-godic-bold font-bold'>benefits</span>
          </h2>
          <p className='uppercase text-color-primary text-sm md:text-lg'>
            SPECIALIZED CERAMIC COATING BENEFITS <br />
            APPLIES TO ALL PAINT & CERTIFIED COATINGS
          </p>
          <Image
            src='/img/ceramic-coating/benefits.webp'
            width={640}
            height={163}
            className='mt-4 w-full md:w-2/3'
            alt='ceramic coating benefits'
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
          <div className='space-y-4 pt-8'>
            <div className='container mx-auto px-8'>
              <div className='border border-b border-gray-700 w-32 mx-auto my-4'></div>
              <h3 className='text-gray-700 text-center text-3xl md:text-5xl font-sarang '>
                Quality Assurance
              </h3>
              <p className='my-4 text-center font-godic-thin  leading-normal text-base'>
                Our ceramic coating for cars with Gyeonquartz warranty on the
                product itself, <br className='hidden md:block'></br>and
                Specialized Auto Tint 1 year limited warranty as well.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* map and footer */}
      <section
        className='relative z-20'
        style={{
          backgroundImage: 'linear-gradient(to bottom, transparent 30%, #ccc)',
        }}
      >
        <section className='container mx-auto px-8'>
          <Footer />
        </section>
      </section>
    </section>
  )
}
