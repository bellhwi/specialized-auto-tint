import Title from '@/components/Title'
import Navbar from '@/components/Navbar'
import Description from '@/components/Description'
import Car from '@/components/Car'
import Image from 'next/image'
import Contact from '@/components/Contact'
import Map from '@/components/Map'
import Footer from '@/components/Footer'

const Portfolio = () => {
  return (
    <section className='bg-zinc-950 overflow-hidden'>
      <div className='max-w-sm text-center mx-auto px-4 mt-20'>
        <Title title='portfolio' />
        <div className='mt-4'>
          <Description
            light
            desc='"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum esse voluptatibus aliquam, dignissimos hic tenetur asperiores. Suscipit animi deserunt ad similique, totam voluptates. Laboriosam doloribus similique nemo voluptates esse atque est."'
          />
          <Description light desc='- Jan. 23. 2024 Yelp -' />
        </div>
      </div>

      {/* CARS */}
      <div className='space-y-8 mt-8'>
        <div className='bg-gradient-to-b from-zinc-950 to-zinc-800'>
          <div className='text-left px-4'>
            <div className='text-lg'>
              <Description nomargin desc='Lorem Ipsum Dolor' light />
            </div>
            <div className='text-sm'>
              <Description nomargin desc='4 Side & Rear' light />
              <Description nomargin desc='Crystalline 25%' />
            </div>
          </div>
          <Image
            src='/portfolio-car-1.png'
            alt='portfolio car 1'
            width='1599'
            height='320'
            className='w-full px-16 pb-8'
          />
        </div>
        <div className='bg-gradient-to-b from-zinc-950 to-zinc-600'>
          <div className='text-left px-4'>
            <div className='text-lg'>
              <Description nomargin desc='Lorem Ipsum Dolor' light />
            </div>
            <div className='text-sm'>
              <Description nomargin desc='4 Side & Rear' light />
              <Description nomargin desc='Crystalline 25%' />
            </div>
          </div>
          <Image
            src='/portfolio-car-2.png'
            alt='portfolio car 1'
            width='1599'
            height='320'
            className='w-full px-16 pb-8'
          />
        </div>
      </div>
      <Contact />
      <Map />
      <Footer />
    </section>
  )
}

export default Portfolio
