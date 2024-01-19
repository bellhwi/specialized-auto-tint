const Map = () => {
  return (
    <div>
      <iframe
        width='600'
        height='450'
        loading='lazy'
        allowfullscreen
        src='https://www.google.com/maps/embed/v1/place?q=place_id:ChIJycWP7-Pn3IARTiG7pd2l22I&key=AIzaSyAsYP4vnD1mFgX4wWBRRd6CT0O1_hPhg6s'
        className='w-full border-none'
      ></iframe>
    </div>
  )
}

export default Map
