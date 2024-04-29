import Image from 'next/image'

const Pager = ({ direction }) => {
  return (
    <div className='lg:hidden'>
      {direction === 'both' ? (
        <>
          <div
            id='pager-left'
            class='fixed left-0 top-1/2 transform -translate-y-1/2 z-10'
          >
            <Image
              src='/img/pager-left.png'
              width={32}
              height={32}
              className='pointer-events-none'
            />
          </div>
          <div
            id='pager-right'
            class='fixed right-0 top-1/2 transform -translate-y-1/2 z-10'
          >
            <Image
              src='/img/pager-right.png'
              width={32}
              height={32}
              className='pointer-events-none'
            />
          </div>
        </>
      ) : direction === 'right' ? (
        <div
          id='pager-right'
          class='fixed right-0 top-1/2 transform -translate-y-1/2 z-10'
        >
          <Image
            src='/img/pager-right.png'
            width={32}
            height={32}
            className='pointer-events-none'
          />
        </div>
      ) : (
        <div
          id='pager-left'
          class='fixed left-0 top-1/2 transform -translate-y-1/2 z-10'
        >
          <Image
            src='/img/pager-left.png'
            width={32}
            height={32}
            className='pointer-events-none'
          />
        </div>
      )}
    </div>
  )
}

export default Pager
