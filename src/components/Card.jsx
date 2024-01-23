import Image from 'next/image'
import Link from 'next/link'
import Subheading from './Subheading'
import Description from './Description'

const Card = ({
  light,
  dark,
  textOnly,
  title,
  desc,
  src,
  alt,
  width,
  height,
  ctaURL,
}) => {
  return (
    <div className='rounded-sm shadow-lg'>
      {textOnly ? null : (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className='w-full'
        />
      )}

      <div className='p-4'>
        {light ? (
          <>
            <Subheading light title={title} />
            <Description light desc={desc} />
          </>
        ) : dark ? (
          <>
            <Subheading dark title={title} />
            <Description dark desc={desc} />
          </>
        ) : (
          <>
            <Subheading title={title} />
            <Description desc={desc} />
          </>
        )}

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
