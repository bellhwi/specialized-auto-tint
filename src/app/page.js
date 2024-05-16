import Main from '@/pages/Main'
import NavbarDesktop from '@/components/NavbarDesktop'

export const metadata = {
  title: 'Window Tinting in Irvine | Specialized Auto Tint',
  description:
    'Professional window tinting services in Irvine, CA. Enhance privacy, reduce heat, and protect interiors with our expert installation. Call for a free quote today!',
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

      <Main />

      {/* Desktop Navbar */}
      <div className='hidden lg:block'>
        <NavbarDesktop main />
      </div>
    </section>
  )
}
