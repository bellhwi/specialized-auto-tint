import Image from 'next/image'

const Logo = ({ footer }) => {
  return (
    <Image
      src={footer ? '/logo-black.webp' : '/logo-mobile.webp'}
      alt='company logo'
      width={150}
      height={42}
    />
  )
}

export default Logo
