const Description = ({ desc, nomargin, light, dark }) => {
  return (
    <p
      className={` ${nomargin ? null : 'mt-2'} ${
        light ? 'text-gray-300' : dark ? 'text-gray-800' : 'text-gray-600'
      }`}
    >
      {desc}
    </p>
  )
}

export default Description
