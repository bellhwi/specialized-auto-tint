import Image from 'next/image'

const Pager = ({ direction }) => {
  return (
    <div className='lg:hidden'>
      {direction === 'both' ? (
        <>
          <div class='fixed left-0 top-1/2 transform -translate-y-1/2 z-10'>
            <Image src='/img/pager-left.png' width={32} height={32} />
          </div>
          <div class='fixed right-0 top-1/2 transform -translate-y-1/2 z-10'>
            <Image src='/img/pager-right.png' width={32} height={32} />
          </div>
        </>
      ) : direction === 'right' ? (
        <div class='fixed right-0 top-1/2 transform -translate-y-1/2 z-10'>
          <Image src='/img/pager-right.png' width={32} height={32} />
        </div>
      ) : (
        <div class='fixed left-0 top-1/2 transform -translate-y-1/2 z-10'>
          <Image src='/img/pager-left.png' width={32} height={32} />
        </div>
      )}
    </div>
  )
}

export default Pager
