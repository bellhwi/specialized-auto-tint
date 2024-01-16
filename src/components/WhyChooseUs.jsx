import Heading from './Heading'
import Card from './Card'

const WhyChooseUs = ({ main }) => {
  return (
    <section className='bg-gray-50'>
      <div className='container mx-auto px-4 py-8 space-y-4'>
        <Heading title='why choose us' />
        {main ? (
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
            <Card
              title='3M Authorized Dealer'
              desc='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
              src='/sample.jpg'
              alt='sample image'
              width='640'
              height='467'
            />
            <Card
              title='Computerized Machine Cut'
              desc='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
              src='/sample.jpg'
              alt='sample image'
              width='640'
              height='467'
            />
            <Card
              title='Exquisite Finish'
              desc='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
              src='/sample.jpg'
              alt='sample image'
              width='640'
              height='467'
            />
          </div>
        )}
      </div>
    </section>
  )
}

export default WhyChooseUs
