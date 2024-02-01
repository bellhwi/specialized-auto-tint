import Link from 'next/link'

const Pager = ({ direction }) => {
  return (
    <>
      {direction === 'both' ? (
        <>
          <div class='fixed left-0 top-1/2 transform -translate-y-1/2 z-10'>
            <i class='fa-solid fa-chevron-left text-3xl text-white p-2'></i>
          </div>
          <div class='fixed right-0 top-1/2 transform -translate-y-1/2 z-10'>
            <i class='fa-solid fa-chevron-right text-3xl text-white p-2'></i>
          </div>
        </>
      ) : direction === 'right' ? (
        <div class='fixed right-0 top-1/2 transform -translate-y-1/2 z-10'>
          <i class='fa-solid fa-chevron-right text-3xl text-white p-2'></i>
        </div>
      ) : (
        <div class='fixed left-0 top-1/2 transform -translate-y-1/2 z-10'>
          <i class='fa-solid fa-chevron-left text-3xl text-white p-2'></i>
        </div>
      )}
    </>
  )
}

export default Pager
