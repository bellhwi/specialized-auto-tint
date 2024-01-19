const Subheading = ({ title, white, className }) => {
  return (
    <h3
      className={`text-xl uppercase font-semibold ${
        white ? 'text-white' : 'text-gray-700'
      } ${className}`}
    >
      {title}
    </h3>
  )
}

export default Subheading
