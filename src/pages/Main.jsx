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

export default function Main() {
  return (
    <section>
      <Navbar main />
      <Hero main />
      <WhyChooseUs main />

      <section className='bg-gradient-to-b from-zinc-950 to-zinc-100'>
        <Products />
        {/* ABOUT US */}
        <section id='about-us'>
          <div className='container mx-auto px-4 py-8 space-y-4'>
            <Heading light title='about us' />
            <Description
              light
              desc='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
            harum voluptatem quis. Velit quisquam iusto architecto at asperiores
            fugiat quod distinctio voluptas debitis ullam ipsum enim quos sed
            illo, magnam alias nulla non. Alias provident magnam ipsa, aliquid
            autem explicabo?'
            />
            <Image
              src='/sample.png'
              width='259'
              height='194'
              className='mx-auto w-full'
            />
          </div>
        </section>

        {/* QUALITY ASSURANCE */}
        <section className='relative' id='quality-assurance'>
          <div className='relative space-y-4 container mx-auto px-4 py-8'>
            <Heading dark title='quality assurance' />
            <Description
              dark
              desc='3M warrants to the original purchaser that each 3M brand
              Professional Line Product will be free from defects in materials
              and manufacture for as long as you own it.'
              href='https://multimedia.3m.com/mws/media/157410O/lifetime-warranty-and-limited-remedy.pdf'
            />
          </div>
        </section>
        <Contact />
      </section>
      <Map />
      <Footer />
    </section>
  )
}
