import './globals.css'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/components/Logo'

export const metadata = {
  title: 'SPECIALIZED AUTO TINT',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='scroll-smooth'>
      <link
        rel='stylesheet'
        href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'
        integrity='sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=='
        crossorigin='anonymous'
        referrerPolicy='no-referrer'
      />

      <body className='relative'>
        <nav className='hidden absolute left-0 top-0 right-0 text-white z-30 lg:block'>
          <Image
            src='/img/navbar-bg.webp'
            width={5709}
            height={321}
            className='absolute inset-0 h-12 w-full'
          />

          <div className='w-2/12 flex justify-between items-center relative mt-2.5'>
            <Link href={`/`} className='ml-auto pr-4'>
              <Logo footer />
            </Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}
