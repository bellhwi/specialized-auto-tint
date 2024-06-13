'use client'
import Link from 'next/link'
import Image from 'next/image'

const NavbarDesktop = ({ main, ceramic, portfolio, ko }) => {
  return (
    <div className='fixed inset-0 w-2/12 mt-40 hidden lg:block'>
      <ul className='text-right pr-4 text-sm space-y-6'>
        <li>
          <Link
            href={ko ? '/ko' : '/'}
            className={`${
              main ? 'text-primary' : ceramic ? 'text-gray-600' : 'text-white'
            } uppercase`}
          >
            {ko ? '윈도우 틴트' : 'window tint'}
          </Link>
          <hr
            className={`mt-0.5 ${
              main
                ? 'border-primary'
                : ceramic
                ? 'border-gray-600'
                : 'border-white'
            }`}
          />
        </li>
        <li>
          <Link
            href={ko ? '/ko/ceramic-coating' : '/ceramic-coating'}
            className={`${ceramic ? 'text-primary' : 'text-white'} uppercase`}
          >
            {ko ? '세라믹 코팅' : 'ceramic coating'}
          </Link>
          <hr
            className={`mt-0.5 ${
              ceramic ? 'border-primary' : main && 'border-white'
            }`}
          />
        </li>
        <li>
          <a
            href={ko ? '/ko/portfolio' : '/portfolio'}
            className={`${
              portfolio
                ? 'text-primary'
                : ceramic
                ? 'text-gray-600'
                : 'text-white'
            } uppercase`}
          >
            {ko ? '포트폴리오' : 'portfolio'}
          </a>
          <hr
            className={`mt-0.5 ${
              portfolio
                ? 'border-primary'
                : main
                ? 'border-white'
                : 'border-gray-600'
            }`}
          />
        </li>
        <li>
          <Link
            href={ko ? '/ko' : '/'}
            onClick={(e) => {
              if (window.location.pathname === '/') {
                e.preventDefault()
                const scrollPosition = document.body.scrollHeight
                window.scrollTo({ top: scrollPosition, behavior: 'smooth' })
              } else {
                sessionStorage.setItem('scrollToBottom', 'true')
              }
            }}
            className={`${ceramic ? 'text-gray-600' : 'text-white'} uppercase`}
          >
            {ko ? '문의하기' : 'contact'}
          </Link>
          <hr
            className={`mt-0.5 ${ceramic ? 'border-gray-600' : 'border-white'}`}
          />
        </li>
      </ul>

      <div
        className={`top-16 mx-auto relative space-x-6 flex items-center justify-center`}
      >
        <Link href={'/'}>
          <Image
            src='/img/us-flag.webp'
            width={32}
            height={32}
            alt='united states flag'
            priority
          />
        </Link>
        <Link href={'/ko'}>
          <Image
            src='/img/ko-flag.webp'
            width={32}
            height={32}
            alt='korea flag'
            priority
          />
        </Link>
      </div>
    </div>
  )
}

export default NavbarDesktop
