import Main from '@/pages/Main'
import NavbarDesktop from '@/components/NavbarDesktop'
import TopBtn from '@/components/TopBtn'

export default function Home() {
  return (
    <section className='relative overflow-hidden'>
      <div className='absolute flex justify-between inset-0'>
        <div className='w-1/12' style={{ backgroundColor: '#1a1a1a' }}></div>
        <div className='w-1/12' style={{ backgroundColor: '#1F1F1F' }}></div>
        <div className='w-8/12' style={{ backgroundColor: '#1a1a1a' }}></div>
        <div className='w-1/12' style={{ backgroundColor: '#171717' }}></div>
        <div className='w-1/12' style={{ backgroundColor: '#141414' }}></div>
      </div>

      <Main />

      {/* Desktop Navbar */}
      <div className='hidden lg:block'>
        <NavbarDesktop main />
      </div>

      {/* Mobile Call Button  */}
      <a href='tel:+19493419100' class='lg:hidden'>
        <div class='z-20 fixed right-0 bottom-0 m-4'>
          <div class='flex items-center justify-center rounded-full bg-primary text-white w-12 h-12'>
            <i class='fa-solid fa-phone'></i>
          </div>
        </div>
      </a>

      <TopBtn />
    </section>
  )
}
