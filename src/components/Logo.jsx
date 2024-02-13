import Image from 'next/image'

const Logo = ({ footer, main }) => {
  return (
    <Image
      src={
        footer
          ? '/logo-black.webp'
          : main
          ? '/logo.webp'
          : '/door_logo_white.webp'
      }
      alt='company logo'
      width={140}
      height={42}
    />
  )
}

export default Logo
