import { Open_Sans } from 'next/font/google'

const open_sans = Open_Sans({ subsets: ['latin'] })

const Description = ({ desc, nomargin, light, dark, href, blue }) => {
  return (
    <p
      className={`${open_sans.className} ${nomargin ? null : 'mt-2'} ${
        light
          ? 'text-gray-300'
          : dark
          ? 'text-gray-800'
          : blue
          ? 'text-blue-600'
          : 'text-gray-600'
      }`}
    >
      {desc}{' '}
      {href && (
        <a
          href={href}
          target='_blank'
          rel='noopener noreferrer'
          className='uppercase text-blue-600 inline'
        >
          learn more
        </a>
      )}
    </p>
  )
}

export default Description
