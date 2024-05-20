import Main from '@/pages/Main'
import NavbarDesktop from '@/components/NavbarDesktop'

export const metadata = {
  title: 'Window Tinting in Irvine | Specialized Auto Tint',
  description:
    'Professional window tinting services in Irvine, CA. Enhance privacy, reduce heat, and protect interiors with our expert installation. Call for a free quote today!',
}

export default function Home() {
  return (
    <section
      className='relative bg-black overflow-hidden'
      style={{ backgroundColor: '#0d0d0d' }}
    >
      <div className='absolute flex justify-between inset-0'>
        <div className='w-1/12' style={{ backgroundColor: '#0d0d0d' }}></div>
        <div className='w-1/12' style={{ backgroundColor: '#111' }}></div>
        <div
          style={{
            width: 'calc(100% - 4/12*100%)',
            backgroundColor: '#151515',
          }}
        ></div>
        <div className='w-1/12' style={{ backgroundColor: '#111' }}></div>
        <div className='w-1/12' style={{ backgroundColor: '#0d0d0d' }}></div>
      </div>

      <Main />

      {/* Desktop Navbar */}
      <div className='hidden lg:block'>
        <NavbarDesktop main />
      </div>
    </section>
  )
}
