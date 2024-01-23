import Heading from './Heading'
import Card from './Card'
import { specialties, specialtiesPPF } from '@/data/data'

const WhyChooseUs = ({ main }) => {
  return (
    <section className='bg-gradient-to-b from-zinc-100 to-zinc-950'>
      <div className='container mx-auto px-4 py-8 space-y-4'>
        <Heading title='what makes us better' />
        <div className='grid grid-cols-1 gap-4'>
          {main
            ? specialties.map((item, index) => {
                return index == 0 ? (
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
                ) : index == 1 ? (
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
                ) : (
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
                )
              })
            : specialtiesPPF.map((item, index) => {
                return index == 0 ? (
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
                ) : index == 1 ? (
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
                ) : (
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
                )
              })}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
