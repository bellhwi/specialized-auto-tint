import SwiperContainer from '@/pages/SwiperContainer'
import Pager from '@/components/Pager'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <section className='relative'>
      <div className='absolute flex justify-between inset-0'>
        <div className='w-1/12' style={{ backgroundColor: '#1a1a1a' }}></div>
        <div className='w-1/12' style={{ backgroundColor: '#1F1F1F' }}></div>
        <div className='w-8/12' style={{ backgroundColor: '#1a1a1a' }}></div>
        <div className='w-1/12' style={{ backgroundColor: '#171717' }}></div>
        <div className='w-1/12' style={{ backgroundColor: '#141414' }}></div>
      </div>
      <SwiperContainer />
    </section>
  )
}
