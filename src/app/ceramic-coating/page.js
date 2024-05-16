import CeramicCoating from '@/pages/CeramicCoating'
import NavbarDesktop from '@/components/NavbarDesktop'
import TopBtn from '@/components/TopBtn'
import Image from 'next/image'
export const metadata = {
  title: 'Ceramic Coating for Cars | Specialized Auto Tint',
  description:
    'Protect your car with ceramic coating. Long-lasting shine, scratch resistance, and UV protection. Top-quality service in Irvine, CA. Get a free estimate now!',
}

export default function Home() {
  return (
    <section className='relative overflow-hidden'>
      <div className='absolute flex justify-between inset-0'>
        <div className='w-1/12' style={{ backgroundColor: '#e9e9e9' }}></div>
        <div className='w-1/12' style={{ backgroundColor: '#f0f0f0' }}></div>
        <div className='w-8/12' style={{ backgroundColor: '#f4f4f4' }}></div>
        <div className='w-1/12' style={{ backgroundColor: '#f9f9f9' }}></div>
        <div className='w-1/12' style={{ backgroundColor: '#f0f0f0' }}></div>
      </div>

      <CeramicCoating />
      {/* Desktop Navbar */}
      <div className='hidden lg:block'>
        <NavbarDesktop ceramic />
      </div>
    </section>
  )
}
