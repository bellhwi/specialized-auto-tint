'use client'
import Link from 'next/link'

const NavbarDesktop = ({ main, ceramic, portfolio }) => {
  return (
    <div className='fixed inset-0 w-2/12 mt-40 hidden lg:block'>
      <ul className='text-right pr-4 text-sm space-y-6'>
        <li>
          <Link
            href='/'
            className={`${
              main ? 'text-primary' : ceramic ? 'text-gray-600' : 'text-white'
            } uppercase`}
          >
            window tint
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
            href='/ceramic-coating'
            className={`${ceramic ? 'text-primary' : 'text-white'} uppercase`}
          >
            ceramic coating
          </Link>
          <hr
            className={`mt-0.5 ${
              ceramic ? 'border-primary' : main && 'border-white'
            }`}
          />
        </li>
        <li>
          <a
            href='/portfolio'
            className={`${
              portfolio
                ? 'text-primary'
                : ceramic
                ? 'text-gray-600'
                : 'text-white'
            } uppercase`}
          >
            portfolio
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
            href='/'
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
            contact
          </Link>
          <hr
            className={`mt-0.5 ${ceramic ? 'border-gray-600' : 'border-white'}`}
          />
        </li>
      </ul>
    </div>
  )
}

export default NavbarDesktop
