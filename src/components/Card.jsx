import Image from 'next/image'
import Link from 'next/link'
import Subheading from './Subheading'
import Description from './Description'

const Card = ({ textOnly, title, desc, src, alt, width, height, ctaURL }) => {
  return (
    <div className='rounded shadow-lg'>
      {textOnly ? null : (
        <Image src={src} alt={alt} width={width} height={height} />
      )}

      <div className='p-4'>
        <Subheading title={title} />
        <Description desc={desc} />
        {ctaURL ? (
          <Link
            href={ctaURL}
            className='uppercase text-sm w-max underline underline-offset-4 inline-block mt-4'
          >
            learn more
          </Link>
        ) : null}
      </div>
    </div>
  )
}

export default Card
