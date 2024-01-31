const Subheading = ({ title, light, dark, className }) => {
  return (
    <h3
      className={`text-2xl uppercase font-bold tracking-tighter ${
        light ? 'text-gray-200' : dark ? 'text-gray-900' : 'text-gray-700'
      } ${className}`}
    >
      {title}
    </h3>
  )
}

export default Subheading
