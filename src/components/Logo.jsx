import Image from 'next/image'

const Logo = ({ footer }) => {
  return (
    <Image
      src={footer ? '/logo-black.webp' : '/logo.webp'}
      alt='company logo'
      width={140}
      height={42}
    />
  )
}

export default Logo
