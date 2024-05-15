const Description = ({ desc, nomargin, light, dark, href, blue, white }) => {
  return (
    <p
      className={`${nomargin ? null : 'mt-2'} ${
        light
          ? 'text-gray-300'
          : dark
          ? 'text-gray-700'
          : blue
          ? 'text-blue-600'
          : white
          ? 'text-white'
          : 'text-gray-500'
      } text-sm`}
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
