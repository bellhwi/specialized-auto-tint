import Heading from './Heading'
import Card from './Card'
import { specialties } from '@/data/data'

const WhyChooseUs = ({ alt }) => {
  return (
    <section className='bg-gray-50'>
      <div className='container mx-auto px-4 py-8 space-y-4'>
        <Heading title='what makes us better' />
        {alt ? (
          <div className='grid grid-cols-2 gap-4'>
            <Card
              title='3M Authorized Dealer'
              desc='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
              textOnly
            />
            <Card
              title='Computerized Machine Cut'
              desc='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
              textOnly
            />
            <Card
              title='Exquisite Finish'
              desc='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
              textOnly
            />
            <Card
              title='15+ Years of Experience'
              desc='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
              textOnly
            />
          </div>
        ) : (
          <div className='grid grid-cols-1 gap-4'>
            {specialties.map((item, index) => {
              return (
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
        )}
      </div>
    </section>
  )
}

export default WhyChooseUs
