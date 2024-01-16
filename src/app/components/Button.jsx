import Link from 'next/link'

const Button = ({ href, title }) => {
  return (
    <Link
      href={href}
      className='bg-primary inline-block w-max px-6 py-4 text-sm uppercase'
    >
      {title}
    </Link>
  )
}

export default Button
