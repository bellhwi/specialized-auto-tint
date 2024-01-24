import Description from './Description'
import Subheading from './Subheading'
const Contact = ({ dark }) => {
  return (
    <section className='text-white py-8' id='contact'>
      <div className='grid grid-cols-1 gap-8'>
        <div className='flex flex-col items-center justify-center'>
          {dark ? (
            <Subheading dark title='Call us' />
          ) : (
            <Subheading title='Call us' />
          )}

          <div className='flex items-center mt-2'>
            <i
              className={`${
                dark ? 'text-gray-800' : 'text-gray-200'
              } fa-solid fa-phone mr-2`}
            ></i>
            <a href='tel:949-341-9100'>
              {dark ? (
                <Description desc='(949) 341-9100' nomargin white />
              ) : (
                <Description desc='(949) 341-9100' nomargin blue />
              )}
            </a>
          </div>
        </div>
        <hr className='w-1/2 mx-auto border border-gray-400' />
        <div className='flex flex-col items-center justify-center'>
          {dark ? (
            <Subheading dark title='email us' />
          ) : (
            <Subheading title='email us' />
          )}

          <div className='flex items-center mt-2'>
            <i
              className={`${
                dark ? 'text-gray-800' : 'text-gray-200'
              } fa-solid fa-envelope mr-2`}
            ></i>
            <a href='mailto:irvinetint@gmail.com'>
              {dark ? (
                <Description desc='irvinetint@gmail.com' nomargin white />
              ) : (
                <Description desc='irvinetint@gmail.com' nomargin blue />
              )}
            </a>
          </div>
        </div>
        <hr className='w-1/2 mx-auto border border-gray-400' />
        <div className='flex flex-col items-center justify-center'>
          {dark ? (
            <Subheading dark title='visit us' />
          ) : (
            <Subheading title='visit us' />
          )}
          <div className='flex items-center mt-2 text-gray-200'>
            <i
              className={`${
                dark ? 'text-gray-800' : 'text-gray-200'
              } fa-solid fa-location-dot mr-2`}
            ></i>
            {dark ? (
              <Description
                desc='8787 Irvine Center Dr, Irvine, CA 92618'
                nomargin
                dark
              />
            ) : (
              <Description
                desc='8787 Irvine Center Dr, Irvine, CA 92618'
                nomargin
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
