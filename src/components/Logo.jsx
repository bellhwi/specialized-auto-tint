import Image from 'next/image'

const Logo = ({ footer }) => {
  return (
    <Image
      src='/img/logos/logo.webp'
      alt='company logo'
      width={264}
      height={56}
      className={`${footer ? 'w-36' : 'w-24 md:w-full'}`}
    />
  )
}

export default Logo
