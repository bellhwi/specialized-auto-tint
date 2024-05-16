import NavbarDesktop from '@/components/NavbarDesktop'
import Portfolio from '@/pages/Portfolio'
import TopBtn from '@/components/TopBtn'
export const metadata = {
  title: 'Portfolio | Specialized Auto Tint',
  description:
    'Explore our diverse portfolio showcasing expert auto tinting and ceramic coating projects. See how we enhance vehicles with precision and quality craftsmanship.',
}

export default function Home() {
  return (
    <section className='relative overflow-hidden'>
      <div className='absolute flex justify-between inset-0'>
        <div className='w-1/12' style={{ backgroundColor: '#030303' }}></div>
        <div className='w-1/12' style={{ backgroundColor: '#0a0a0a' }}></div>
        <div className='w-8/12' style={{ backgroundColor: '#0f0f0f' }}></div>
        <div className='w-1/12' style={{ backgroundColor: '#0a0a0a' }}></div>
        <div className='w-1/12' style={{ backgroundColor: '#030303' }}></div>
      </div>

      <Portfolio />
      {/* Desktop navbar */}
      <div className='hidden lg:block'>
        <NavbarDesktop portfolio />
      </div>
    </section>
  )
}
