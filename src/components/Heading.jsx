const Heading = ({ title, light, dark }) => {
  return (
    <h2
      className={`text-3xl uppercase font-bold tracking-tighter	 ${
        light ? 'text-gray-100' : dark ? 'text-black' : 'text-gray-800'
      }`}
    >
      {title}
    </h2>
  )
}

export default Heading
