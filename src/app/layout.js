import './globals.css'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/components/Logo'
import TopBtn from '@/components/TopBtn'
import { GoogleTagManager } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  const schema = {
    '@context': 'http://www.schema.org',
    '@type': 'AutomotiveBusiness',
    name: 'Specialized Auto Tint',
    url: 'https://s-worktint.com/',
    logo: '/public/img/logos/logo.webp',
    description:
      'Specialized Auto Tint is the #1 choice for custom window tinting. Serving Irvine for over 10 years, we provide tinting of the highest quality with 3M films.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '8787 Irvine Center Dr.',
      addressLocality: 'Irvine',
      addressRegion: 'California',
      postalCode: '92618',
      addressCountry: 'United States',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '33.640888',
      longitude: '-117.742577',
    },
    openingHours: 'Mo, Tu, We, Th, Fr, Sa 08:00-17:00',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Phone, Email',
      telephone: '+1(949)341-9100',
    },
  }

  return (
    <html lang='en' className='scroll-smooth'>
      <GoogleTagManager gtmId='G-PTKG274ZEV' />

      <body className='relative'>
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

        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </body>
    </html>
  )
}
