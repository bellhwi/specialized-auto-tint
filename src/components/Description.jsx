const Description = ({ desc, nomargin }) => {
  return <p className={nomargin ? null : 'mt-2'}>{desc}</p>
}

export default Description
