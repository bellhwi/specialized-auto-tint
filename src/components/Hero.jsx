import Image from 'next/image'
import Button from '@/app/components/Button'

const Hero = () => {
  return (
    <div className='relative text-white text-center'>
      <Image
        src='/sample.jpg'
        alt='Card sample Image'
        width={640}
        height={427}
        className='absolute w-full h-full object-cover brightness-50'
      />
      <div className='relative space-y-4 container mx-auto py-16'>
        <h1 className='text-4xl uppercase font-semibold'>auto window tint</h1>
        <p className='text-2xl'>
          The Highest Standard <br></br>of Precision Tinting in IRVINE
        </p>
        <Button href='#' title='learn more' />
      </div>
    </div>
  )
}

export default Hero
