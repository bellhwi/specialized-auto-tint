import Image from 'next/image'
import Products from '@/components/Products'
import Hero from '@/components/Hero'
import WhyChooseUs from '@/components/WhyChooseUs'
import Heading from '@/components/Heading'
import Description from '@/components/Description'
import Contact from '@/components/Contact'
import Map from '@/components/Map'
import Footer from '@/components/Footer'

export default function CeramicCoating() {
  return (
    <section className='overflow-hidden'>
      <Hero />
      <WhyChooseUs />

      <div className='bg-gradient-to-b from-zinc-950 to-zinc-100'>
        {/* CERAMIC COATING */}
        <div>
          <div className='container mx-auto px-4 py-8 space-y-4'>
            <Heading light title='ceramic coating' />
            <Image
              src='/sample.png'
              width='259'
              height='194'
              className='mx-auto w-full'
            />
          </div>
        </div>
        {/* PPF */}
        <div>
          <div className='container mx-auto px-4 py-8 space-y-4'>
            <Heading light title='paint protection film' />
            <Image
              src='/sample.png'
              width='259'
              height='194'
              className='mx-auto w-full'
            />
          </div>
        </div>
        <Contact dark />
        <Map />
        <Footer />
      </div>
    </section>
  )
}
