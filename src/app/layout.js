import './globals.css'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/components/Logo'
import TopBtn from '@/components/TopBtn'

export default function RootLayout({ children }) {
  return (
    <div className='relative'>
      <nav className='hidden absolute left-0 top-0 right-0 text-white z-30 lg:block'>
        <Image
          src='/img/navbar-bg.webp'
          priority
          width={5709}
          height={321}
          className='absolute inset-0 h-12 w-full'
          alt='navigation bar background'
        />

        <div className='w-2/12 flex justify-between items-center relative mt-2.5'>
          <Link href={`/`} className='ml-auto pr-4'>
            <Logo footer />
          </Link>
        </div>
      </nav>
      {children}

      {/* Mobile Call Button  */}
      <a href='tel:+19493419100' className='lg:hidden'>
        <div className='z-20 fixed right-0 bottom-0 m-4'>
          <div className='flex items-center justify-center rounded-full bg-primary text-white w-12 h-12'>
            <Image
              src='/icons/phone.svg'
              width={24}
              height={24}
              alt='phone icon'
            />
          </div>
        </div>
      </a>

      <TopBtn />
    </div>
  )
}
