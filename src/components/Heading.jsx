const Heading = ({ title, white }) => {
  return (
    <h2
      className={`text-2xl uppercase font-semibold ${
        white ? 'text-white' : 'text-gray-800'
      }`}
    >
      {title}
    </h2>
  )
}

export default Heading
