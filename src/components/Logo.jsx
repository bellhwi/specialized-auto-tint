import Image from 'next/image'

const Logo = ({ footer }) => {
  return (
    <Image
      src='/img/logos/logo.webp'
      alt='company logo'
      width={264}
      height={56}
      className={`${footer ? 'w-36' : 'w-28 lg:w-48'}`}
    />
  )
}

export default Logo
