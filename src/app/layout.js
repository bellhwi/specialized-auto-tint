import './globals.css'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/components/Logo'
import Head from 'next/head'
import TopBtn from '@/components/TopBtn'

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className='relative'>
        <Head>
          <link
            rel='stylesheet'
            href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'
            integrity='sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=='
            crossorigin='anonymous'
            referrerPolicy='no-referrer'
          />
        </Head>
        <nav className='hidden absolute left-0 top-0 right-0 text-white z-30 lg:block'>
          <Image
            src='/img/navbar-bg.webp'
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
        <a href='tel:+19493419100' class='lg:hidden'>
          <div class='z-20 fixed right-0 bottom-0 m-4'>
            <div class='flex items-center justify-center rounded-full bg-primary text-white w-12 h-12'>
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
      </body>
    </html>
  )
}
