const Subheading = ({ title, white }) => {
  return (
    <h3
      className={`text-xl uppercase font-semibold ${
        white ? 'text-white' : 'text-gray-700'
      }`}
    >
      {title}
    </h3>
  )
}

export default Subheading
