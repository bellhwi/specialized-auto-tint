const Subheading = ({ title, light, dark }) => {
  return (
    <h3
      className={`text-xl uppercase font-semibold ${
        light ? 'text-gray-200' : dark ? 'text-gray-900' : 'text-gray-700'
      }`}
    >
      {title}
    </h3>
  )
}

export default Subheading
