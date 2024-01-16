import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import WhyChooseUs from '@/components/WhyChooseUs'
import Heading from '@/components/Heading'
import Card from '@/components/Card'
import Description from '@/components/Description'
import Contact from '@/components/Contact'
import Map from '@/components/Map'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhyChooseUs main />

      {/* PRODUCTS */}
      <section className='bg-gray-100'>
        <div className='container mx-auto px-4 py-8 space-y-4 '>
          <Heading title='products' />
          <div className='grid grid-cols-1 gap-4'>
            <Card
              src='/sample.jpg'
              alt='sample image'
              width='640'
              height='467'
              title='3M Crystalline'
              desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quae! Impedit dignissimos iure quisquam a?'
              ctaURL='#'
            />
            <Card
              src='/sample.jpg'
              alt='sample image'
              width='640'
              height='467'
              title='3M Ceramic IR'
              desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quae! Impedit dignissimos iure quisquam a?'
              ctaURL='#'
            />
            <Card
              src='/sample.jpg'
              alt='sample image'
              width='640'
              height='467'
              title='3M Color Stable'
              desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quae! Impedit dignissimos iure quisquam a?'
              ctaURL='#'
            />
            <Card
              src='/sample.jpg'
              alt='sample image'
              width='640'
              height='467'
              title='3M FX Premium'
              desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quae! Impedit dignissimos iure quisquam a?'
              ctaURL='#'
            />
          </div>
        </div>
      </section>

      {/* ABOUT US */}
      <section className='bg-gray-50'>
        <div className='container mx-auto px-4 py-8 space-y-4'>
          <Heading title='about us' />
          <Description
            desc='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
            harum voluptatem quis. Velit quisquam iusto architecto at asperiores
            fugiat quod distinctio voluptas debitis ullam ipsum enim quos sed
            illo, magnam alias nulla non. Alias provident magnam ipsa, aliquid
            autem explicabo?'
          />
        </div>
      </section>
      <Contact />
      <Map />
      <Footer />
    </main>
  )
}
