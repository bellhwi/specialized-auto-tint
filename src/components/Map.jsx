const Map = () => {
  return (
    <div className='relative z-20'>
      <iframe
        width='600'
        height='450'
        loading='lazy'
        allowFullScreen
        src='https://www.google.com/maps/embed/v1/place?q=place_id:ChIJycWP7-Pn3IARTiG7pd2l22I&key=AIzaSyAsYP4vnD1mFgX4wWBRRd6CT0O1_hPhg6s'
        className='w-full rounded border-0'
        title='map'
      ></iframe>
    </div>
  )
}

export default Map
