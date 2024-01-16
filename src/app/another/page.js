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
      <section className='space-y-16 mt-8'>
        <WhyChooseUs />

        {/* PRODUCTS */}
        <section className='container mx-auto px-4 space-y-4'>
          <Heading title='products' />
          <div className='grid grid-cols-2 gap-4'>
            <Card
              textOnly
              title='3M Crystalline'
              desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quae! Impedit dignissimos iure quisquam a?'
              ctaURL='#'
            />
            <Card
              textOnly
              title='3M Ceramic IR'
              desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quae! Impedit dignissimos iure quisquam a?'
              ctaURL='#'
            />
            <Card
              textOnly
              title='3M Color Stable'
              desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quae! Impedit dignissimos iure quisquam a?'
              ctaURL='#'
            />
            <Card
              textOnly
              title='3M FX Premium'
              desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quae! Impedit dignissimos iure quisquam a?'
              ctaURL='#'
            />
          </div>
        </section>

        {/* ABOUT US */}
        <section className='container mx-auto px-4 pb-8 space-y-4'>
          <Heading title='about us' />
          <Image
            src='/sample.jpg'
            alt='Card sample Image'
            width={640}
            height={427}
          />
          <Description
            desc='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
            harum voluptatem quis. Velit quisquam iusto architecto at asperiores
            fugiat quod distinctio voluptas debitis ullam ipsum enim quos sed
            illo, magnam alias nulla non. Alias provident magnam ipsa, aliquid
            autem explicabo?'
          />
        </section>
      </section>
      <Contact />
      <Map />
      <Footer />
    </main>
  )
}
