import Image from 'next/image'
import Description from './Description'

const Car = () => {
  return (
    <div>
      <div className='text-left'>
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
        className='w-full px-8'
      />
    </div>
  )
}

export default Car
