import Heading from './Heading'
import Card from './Card'
import { specialties } from '@/data/data'

const WhyChooseUs = () => {
  return (
    <section className='bg-gradient-to-b from-zinc-950 to-zinc-100'>
      <div className='container mx-auto px-4 py-8 space-y-4'>
        <Heading light title='what makes us better' />
        <div className='grid grid-cols-1 gap-4'>
          {specialties.map((item, index) => {
            return index == 0 ? (
              <Card
                key={index}
                light
                title={item.title}
                desc={item.desc}
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
              />
            ) : index == 1 ? (
              <Card
                key={index}
                dark
                title={item.title}
                desc={item.desc}
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
              />
            ) : (
              <Card
                key={index}
                title={item.title}
                desc={item.desc}
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
