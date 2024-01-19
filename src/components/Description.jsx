const Description = ({ desc, nomargin }) => {
  return <p className={`text-gray-600 ${nomargin ? null : 'mt-2'}`}>{desc}</p>
}

export default Description
