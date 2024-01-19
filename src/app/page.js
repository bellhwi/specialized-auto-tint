import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import WhyChooseUs from '@/components/WhyChooseUs'
import Heading from '@/components/Heading'
import Description from '@/components/Description'
import Contact from '@/components/Contact'
import Map from '@/components/Map'
import Footer from '@/components/Footer'
import Accordion from '@/components/Accordion'
import { products } from '@/data/data'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhyChooseUs />

      {/* OUR PRODUCTS */}
      <section className='bg-gray-100'>
        <div className='container mx-auto px-4 py-8 space-y-4 '>
          <Heading title='our products' />
          <div className=''>
            {products.map((product, index) => {
              return (
                <Accordion
                  key={index}
                  title={product.title}
                  content={product.content}
                  href={product.href}
                />
              )
            })}
          </div>
        </div>
      </section>

      {/* ABOUT US */}
      <section className='bg-gray-50' id='about-us'>
        <div className='container mx-auto px-4 py-8 space-y-4'>
          <Heading title='about us' />
          <Image
            src='/sample.png'
            width='259'
            height='194'
            className='mx-auto w-full'
          />
          <Description
            desc='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
            harum voluptatem quis. Velit quisquam iusto architecto at asperiores
            fugiat quod distinctio voluptas debitis ullam ipsum enim quos sed
            illo, magnam alias nulla non. Alias provident magnam ipsa, aliquid
            autem explicabo?'
          />
        </div>
      </section>

      {/* QUALITY ASSURANCE */}
      <section className='relative bg-gray-100' id='quality-assurance'>
        <div className='relative space-y-4 container mx-auto px-4 py-8'>
          <Heading title='quality assurance' />
          <p className='text-gray-600'>
            3M warrants to the original purchaser that each 3M brand
            Professional Line Product will be free from defects in materials and
            manufacture for as long as you own it.{' '}
            <a
              href='https://multimedia.3m.com/mws/media/157410O/lifetime-warranty-and-limited-remedy.pdf'
              target='_blank'
              rel='noopener noreferrer'
              className='uppercase text-blue-400'
            >
              learn more
            </a>
          </p>
        </div>
      </section>
      <Contact />
      <Map />
      <Footer />
    </main>
  )
}
